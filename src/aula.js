/* =========================================================================
   aula.js — Sirve el aula estática existente SIN modificar sus archivos.

   Sobre cada página .html inyecta:
     - justo después de <body ...>: el bootstrap del progreso
       (window.__AULA_PROGRESS__ + progress.repository.js). Va al PRINCIPIO
       porque las páginas esperan AulaProgressRepo.ready antes de renderizar
       nada, así que el objeto tiene que existir antes de que corra
       cualquier otro script del body.
     - justo antes de </body>: window.__AULA_MOODLE_URL__ + auth.js (muestra
       la identidad y vigila el vencimiento de la sesión). Esto no depende
       del progreso, así que se queda donde estaba.

   Los assets (css, js del aula, imágenes) se sirven tal cual con express.static.
   Así el código del aula queda intacto; toda la integración vive en el gateway.
   ========================================================================= */
import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import config from './config.js';

const AULA_BASE = path.resolve(config.aula.dir);

// Bootstrap del progreso: se inyecta apenas abre <body>, ANTES que cualquier
// otro script de la página (course.config.js, progress.js, screens.js, etc.),
// porque esos scripts esperan `AulaProgressRepo.ready`.
function progressBootstrap() {
  var progressCfg = JSON.stringify({ mode: config.progress.mode, endpoint: config.progress.endpoint });
  return (
    '\n<script>window.__AULA_PROGRESS__=' + progressCfg + ';</script>' +
    '\n<script src="/aula-client/progress.repository.js"></script>\n'
  );
}

// Identidad del estudiante: se inyecta al final, antes de </body> (igual que antes).
function bodyEndSnippet() {
  return (
    '\n<script>window.__AULA_MOODLE_URL__=' + JSON.stringify(config.moodleEffectiveUrl) + ';</script>' +
    '\n<script src="/aula-client/auth.js"></script>\n'
  );
}

// Middleware: intercepta SOLO las páginas .html para inyectar el bootstrap.
export function aulaHtmlInjector() {
  const bodyEnd = bodyEndSnippet();
  return function (req, res, next) {
    if (req.method !== 'GET' && req.method !== 'HEAD') return next();
    let rel;
    try { rel = decodeURIComponent(req.path); } catch { return next(); }
    if (!rel.toLowerCase().endsWith('.html')) return next();

    const filePath = path.join(AULA_BASE, rel);
    // Guarda contra path traversal: el archivo debe quedar dentro de AULA_BASE.
    if (filePath !== AULA_BASE && !filePath.startsWith(AULA_BASE + path.sep)) {
      return res.status(403).type('text/plain').send('Ruta no permitida.');
    }
    fs.readFile(filePath, 'utf8', (err, html) => {
      if (err) return next(); // no existe → que siga la cadena (404 de static)

      // 1) Inyectar el bootstrap del progreso justo después de la etiqueta
      //    <body ...> de apertura (con o sin atributos: class, data-screen, etc.)
      let out = html;
      const bodyOpenMatch = out.match(/<body\b[^>]*>/i);
      if (bodyOpenMatch) {
        const insertAt = bodyOpenMatch.index + bodyOpenMatch[0].length;
        out = out.slice(0, insertAt) + progressBootstrap() + out.slice(insertAt);
      } else {
        // No debería pasar en las páginas del aula, pero por las dudas:
        // si no hay <body>, lo mandamos al principio del documento.
        out = progressBootstrap() + out;
      }

      // 2) Inyectar identidad + auth.js antes de </body> (comportamiento previo)
      out = out.includes('</body>')
        ? out.replace('</body>', bodyEnd + '</body>')
        : out + bodyEnd;

      res.set('Content-Type', 'text/html; charset=utf-8');
      res.set('Cache-Control', 'no-cache');
      if (req.method === 'HEAD') return res.end();
      res.send(out);
    });
  };
}

// Estáticos del aula (todo lo que no sea .html: css, js, img, pdf, etc.).
export function aulaStatic() {
  return express.static(AULA_BASE, { index: false });
}