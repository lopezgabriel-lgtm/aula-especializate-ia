/* =========================================================================
   progress.repository.js — Capa de PERSISTENCIA. SOLO backend.
   No usa localStorage: el progreso vive en memoria durante la sesión de
   la pestaña (se repuebla desde el servidor en cada carga) y se persiste
   en el servidor en cada cambio (debounced).

   Por diseño ya NO hay reconciliación local-vs-remoto: hay una única fuente
   de verdad (el servidor). Esto también elimina el riesgo de "bleed-over"
   de progreso entre alumnos en una compu compartida: no queda nada
   persistido en el navegador que un alumno pueda heredar del anterior.
   ========================================================================= */
(function () {
  'use strict';

  var CFG = window.__AULA_PROGRESS__ || { mode: 'local', endpoint: '/api/progress' };
  var MODE = CFG.mode === 'remote' ? 'remote' : 'local';
  var ENDPOINT = CFG.endpoint || '/api/progress';
  var PUSH_DEBOUNCE_MS = 800;

  /* --------------------- caché EN MEMORIA (no persistente) -------------- */
  var mem = null; // string JSON o null; vive solo mientras dura la pestaña
  function loadLocal() { return mem; }
  function writeLocalRaw(str) { mem = str; }
  function saveLocal(str) { writeLocalRaw(str); schedulePush(); }

  /* ------------------------ Adaptador remoto ------------------------- */
  function nullRemote() {
    return { load: function () { return Promise.resolve(null); }, save: function () { return Promise.resolve(); } };
  }
  function httpRemote(ep) {
    return {
      load: function () {
        return fetch(ep, { credentials: 'same-origin', headers: { Accept: 'application/json' } })
          .then(function (r) {
            if (r.status === 401) { var e = new Error('sin_sesion'); e.noSession = true; throw e; }
            if (!r.ok) return null;
            return r.json();
          })
          .then(function (j) { return (j && j.doc != null) ? JSON.stringify(j.doc) : null; });
      },
      save: function (str) {
        var doc; try { doc = JSON.parse(str); } catch (e) { return Promise.resolve(); }
        return fetch(ep, {
          method: 'PUT', credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(doc)
        }).then(function (r) { if (!r.ok) throw new Error('save_failed'); });
      }
    };
  }
  var remote = MODE === 'remote' ? httpRemote(ENDPOINT) : nullRemote();

  /* --------------- Empuje al servidor (debounced) -------------------- */
  var pushTimer = null, dirty = false, pushing = false;
  function schedulePush() {
    if (MODE !== 'remote') return;
    dirty = true;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(flush, PUSH_DEBOUNCE_MS);
  }
  function flush() {
    if (MODE !== 'remote' || pushing || !dirty) return Promise.resolve();
    pushing = true;
    var snapshot = loadLocal();
    return remote.save(snapshot)
      .then(function () { dirty = false; })
      .catch(function () {
        // Sin red / servidor caído: NO hay caché local de respaldo.
        // Queda "dirty" y reintenta en el próximo cambio o en el próximo
        // debounce; avisamos a la UI para que el alumno sepa que no se guardó.
        try { window.dispatchEvent(new CustomEvent('aula-progress-sync-error')); } catch (e) {}
      })
      .then(function () { pushing = false; });
  }

  /* ----------------------- Carga inicial ------------------------------
     Una sola vez por carga de página: trae el doc del servidor (o null si
     el alumno es nuevo) y lo deja en memoria. No hay merge: gana el server.
     ---------------------------------------------------------------------- */
  var readyResolve;
  var ready = new Promise(function (res) { readyResolve = res; });

  function init() {
    if (MODE !== 'remote') { mem = null; readyResolve(); return; }
    remote.load()
      .then(function (str) { mem = str; })
      .catch(function (e) {
        // Sin sesión o sin red: arrancamos en blanco (defaultState se
        // encarga en progress.js). auth.js es responsable de redirigir si
        // la sesión venció; acá no duplicamos esa lógica.
        mem = null;
      })
      .then(readyResolve);
  }
  init();

  /* ------------------- Flush final al salir -------------------------- */
  window.addEventListener('pagehide', function () {
    if (MODE === 'remote' && dirty && mem != null) {
      try {
        fetch(ENDPOINT, {
          method: 'PUT', credentials: 'same-origin', keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: mem
        });
      } catch (e) {}
    }
  });

  /* --------------------------- API pública --------------------------- */
  window.AulaProgressRepo = {
    mode: MODE,
    ready: ready,          // <- las pantallas esperan esto antes de renderizar
    loadLocal: loadLocal,
    saveLocal: saveLocal,
    loadRemote: remote.load,
    saveRemote: remote.save,
    flush: flush
  };
})();