/* course.config.js — Introducción a la IA */
window.COURSE_CONFIG = {
  "name": "Introducción a la IA",
  "logo": "img/especializate-logo-blanco.png",
  "links": {
    "rutas": "inicio.html",
    "progreso": "progreso.html",
    "badges": "badges.html"
  },
  "intro": {
    "label": "Inicio y bienvenida",
    "href": "inicio.html",
    "eyebrow": "Bienvenida",
    "title": "Inicio y bienvenida",
    "description": "Antes de comenzar, conocé especIAlizate, el programa del curso y una introducción al recorrido. Al completar estos tres contenidos se habilita el Módulo 1.",
    "resources": [
      {
        "step": "intro.especializate",
        "required": true,
        "label": "Sobre especIAlizate",
        "kind": "video",
        "youtubeId": "1XwQ2nPGTQ8",
        "description": "Mirá este video para conocer qué es especIAlizate, cómo está organizado el programa y qué vas a encontrar durante el recorrido."
      },
      {
        "step": "intro.programa",
        "required": true,
        "label": "Programa del curso",
        "kind": "pdf",
        "url": "https://drive.google.com/file/d/19hbj1rzgdW8mM5mOw3sCXJp3Mv1mKA2v/view?usp=sharing",
        "description": "Consultá el programa para conocer la propuesta formativa, los objetivos, la estructura del recorrido, los aprendizajes esperados y la modalidad de cursada."
      },
      {
        "step": "intro.introduccion",
        "required": true,
        "label": "Introducción al curso",
        "kind": "video",
        "youtubeId": "wO51weDN_cM",
        "description": "En este video vas a conocer la propuesta del curso y cómo se organiza el recorrido a lo largo de los cinco módulos."
      }
    ]
  },
  "modules": [
    {
      "n": 1,
      "title": "Fundamentos de la IA",
      "description": "En este módulo vas a conocer los fundamentos de la Inteligencia Artificial: qué es, cómo evolucionó, de qué manera aprende y cuáles son sus principales tipos. También vas a reconocer sus capacidades, limitaciones y aplicaciones en situaciones cotidianas, educativas y laborales.",
      "href": "modulo.html?m=1",
      "estimatedTime": "Aprox. 3 hs",
      "video": {
        "youtubeId": "F7B3tS6uvAE",
        "duration": null
      },
      "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979580",
      "objectives": [
        "Qué es la Inteligencia Artificial y cómo evolucionó.",
        "Diferencias entre automatización e IA.",
        "Cómo aprende una IA a partir de datos y modelos.",
        "Tipos de IA: analítica, generativa e híbrida.",
        "Capacidades, limitaciones, sesgos y necesidad de supervisión humana."
      ],
      "units": [
        {
          "n": 1,
          "title": "Historia y evolución de la inteligencia artificial",
          "description": "Vas a descubrir qué significa realmente hablar de Inteligencia Artificial, cómo surgió y qué avances hicieron posible su desarrollo actual. Además, vas a comenzar a reconocer cómo aparece la IA en situaciones cotidianas y cuáles son sus principales capacidades y límites.",
          "video": {
            "youtubeId": "UY23hIPulFk"
          },
          "resources": [
            {
              "id": "m1u1-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-11-Historia-y-evolucion-de-la-Inteligencia-Artificial-o4ennqi5yr8ejmn"
            },
            {
              "id": "m1u1-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1dTN6UOHuNKhiX7aELkRr0mODLJFDprDQ/preview"
            },
            {
              "id": "m1u1-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/693874f3a6862cabf5b0f272"
            }
          ]
        },
        {
          "n": 2,
          "title": "Automatización vs inteligencia artificial",
          "description": "Vas a aprender a distinguir la automatización de la Inteligencia Artificial según su forma de funcionar. También vas a conocer cómo pueden combinarse en sistemas de automatización inteligente y qué criterios permiten elegir la tecnología más adecuada para cada tarea.",
          "video": {
            "youtubeId": "_MNXmMzhs44"
          },
          "resources": [
            {
              "id": "m1u2-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-12-Automatizacion-vs-Inteligencia-Artificial-3znorac4kp1nd5t"
            },
            {
              "id": "m1u2-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1uvenyhIYwy3ahtlEpzRiGwKyPLO7EbFS/preview"
            },
            {
              "id": "m1u2-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/6939ba545ece3c509329397b"
            }
          ]
        },
        {
          "n": 3,
          "title": "¿Cómo aprende una IA? datos, modelos y entrenamiento",
          "description": "Vas a conocer qué ocurre detrás del aprendizaje de una IA: cómo utiliza datos, modelos y procesos de entrenamiento para reconocer patrones y generar resultados. También vas a analizar cómo la calidad de los datos, los errores y los sesgos pueden afectar su funcionamiento.",
          "video": {
            "youtubeId": "hac3BV_eCTo"
          },
          "resources": [
            {
              "id": "m1u3-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-13-Como-aprende-una-IA-owwvxtye8cra81k"
            },
            {
              "id": "m1u3-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/15NjOUJTzH8khu0zN0FFYiRizOk7vUkpr/preview"
            },
            {
              "id": "m1u3-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/693c27dd024f33e6fc93033a"
            }
          ]
        },
        {
          "n": 4,
          "title": "Tipos de inteligencia artificial: analítica, generativa y sistemas híbridos",
          "description": "Vas a diferenciar la IA analítica, generativa e híbrida según lo que cada una puede hacer y producir. A partir de ejemplos concretos, vas a reconocer sus aplicaciones y a desarrollar criterios para elegir qué tipo de IA resulta más adecuado según la tarea.",
          "video": {
            "youtubeId": "LJHv3-o5fqI"
          },
          "resources": [
            {
              "id": "m1u4-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-14-Tipos-de-Inteligencia-Artificial-wpso4wisfiacqjc"
            },
            {
              "id": "m1u4-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1iQSEBnIqdWo9nx-F6oaUDg0DtOZfuXIv/preview"
            },
            {
              "id": "m1u4-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/696645e53e2d95a27671c34b"
            }
          ]
        }
      ]
    },
    {
      "n": 2,
      "title": "Herramientas de IA generativa",
      "description": "En este módulo vas a conocer cómo funcionan las herramientas de IA generativa y cómo utilizarlas de manera efectiva. Vas a trabajar con modelos de texto, imagen, audio y código, aprender a diseñar mejores prompts, transformar textos y evaluar críticamente los resultados generados.",
      "href": "modulo.html?m=2",
      "estimatedTime": "Aprox. 3 hs",
      "video": {
        "youtubeId": "EljUqjpuaxg",
        "duration": null
      },
      "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979584",
      "objectives": [
        "Cómo funcionan los modelos generativos.",
        "Cómo diseñar prompts claros y efectivos.",
        "Cómo reformular, sintetizar y mejorar textos con IA.",
        "Cómo detectar alucinaciones, sesgos y errores.",
        "Cómo verificar y corregir respuestas antes de utilizarlas."
      ],
      "units": [
        {
          "n": 1,
          "title": "¿Qué es un modelo generativo? Texto, imagen, audio y código",
          "description": "Vas a conocer qué distingue a la IA generativa de otros tipos de Inteligencia Artificial y cómo produce contenido nuevo. También vas a explorar modelos de texto, imagen, audio y código, la multimodalidad y sus principales limitaciones.",
          "video": {
            "youtubeId": "g7BEgtQ2Edw"
          },
          "resources": [
            {
              "id": "m2u1-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-21-Que-es-un-modelo-generativo--37hn0kdcm4dt0l8"
            },
            {
              "id": "m2u1-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1XM-P_8xPtWoOz3-916Dwun8UKNGGVi-0/preview"
            },
            {
              "id": "m2u1-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/6943fb7265757a3ec8fdf246"
            }
          ]
        },
        {
          "n": 2,
          "title": "Diseño de prompts efectivos: técnicas, estructura y pensamiento crítico",
          "description": "Vas a aprender a comunicarte con la IA mediante instrucciones claras y estructuradas. Vas a trabajar con los componentes de un buen prompt, técnicas de prompting, iteración y criterios para evaluar la calidad de las respuestas obtenidas.",
          "video": {
            "youtubeId": "Fgun010qBkE"
          },
          "resources": [
            {
              "id": "m2u2-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/xzb5g3adztubf07"
            },
            {
              "id": "m2u2-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/16eldpbRfbW7hQxz0oT1yc5Uiz7FaHoTy/preview"
            },
            {
              "id": "m2u2-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/694403ee9c4929bb14ff80e8"
            }
          ]
        },
        {
          "n": 3,
          "title": "Reformulación, síntesis y mejora de textos con IA",
          "description": "Vas a utilizar la IA como asistente para transformar textos existentes: reformularlos, sintetizarlos, mejorar su claridad y adaptar su tono al destinatario. El objetivo es aprovechar la herramienta sin perder el control sobre el contenido y su significado.",
          "video": {
            "youtubeId": "hMYLXHxxdIQ"
          },
          "resources": [
            {
              "id": "m2u3-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/e1qsbr8jbjbuire"
            },
            {
              "id": "m2u3-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1sPZfRZeq3M8DdMwyee2mM3GA-WwRwMQl/preview"
            },
            {
              "id": "m2u3-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/694424c42550409543683456"
            }
          ]
        },
        {
          "n": 4,
          "title": "Errores frecuentes en la IA: alucinaciones, sesgos y cómo corregirlos",
          "description": "Vas a aprender a reconocer cuándo una respuesta de IA puede ser incorrecta, sesgada o poco confiable. También vas a incorporar métodos para verificar información y técnicas de prompting que permitan corregir y mejorar las respuestas generadas.",
          "video": {
            "youtubeId": "AC4oJvLt_PY"
          },
          "resources": [
            {
              "id": "m2u4-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/ob2lbkgq8dkewo1"
            },
            {
              "id": "m2u4-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1j_p_qIiAqAHirDUhcsggjxYP4fvLOW5h/preview"
            },
            {
              "id": "m2u4-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/69442b861d9a2403caae193c"
            }
          ]
        }
      ]
    },
    {
      "n": 3,
      "title": "Datos, análisis y decisiones con IA",
      "description": "En este módulo vas a aprender a trabajar con datos utilizando Inteligencia Artificial como apoyo. Vas a evaluar la calidad de la información, analizar patrones y tendencias, interpretar resultados con criterio y aplicar estas capacidades en situaciones reales de trabajo.",
      "href": "modulo.html?m=3",
      "estimatedTime": "Aprox. 3 hs",
      "video": {
        "youtubeId": "2TWYeIEnKeI",
        "duration": null
      },
      "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979583",
      "objectives": [
        "Cómo evaluar la calidad de los datos antes de analizarlos.",
        "Cómo clasificar información y detectar patrones y tendencias con IA.",
        "Cómo interpretar resultados y convertirlos en decisiones.",
        "Cómo reconocer sesgos, riesgos y conclusiones poco confiables.",
        "Cómo aplicar la IA en tareas laborales de organización, análisis y comunicación."
      ],
      "units": [
        {
          "n": 1,
          "title": "¿Qué hace que un dato sirva? calidad, fuentes y problemas frecuentes",
          "description": "Vas a aprender a evaluar si un dato es confiable y útil antes de utilizarlo. Vas a reconocer criterios de calidad, errores frecuentes y señales de alerta, comprendiendo por qué la calidad de la información condiciona cualquier análisis realizado con IA.",
          "video": {
            "youtubeId": "o0EFyKQQirU"
          },
          "resources": [
            {
              "id": "m3u1-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-31-Que-es-un-dato-Calidad-fuentes-y-problemas-frecuentes-yk80xbao0gdgpg9"
            },
            {
              "id": "m3u1-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1zyFPsA4xXpN9Z68Gp-KMGkYtJdtuQgZN/preview"
            },
            {
              "id": "m3u1-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/694433be0f3acb89fb77e82c"
            }
          ]
        },
        {
          "n": 2,
          "title": "Análisis asistido por IA: clasificación, patrones y tendencias",
          "description": "Vas a utilizar la IA para organizar y analizar información existente. Aprenderás a clasificar datos, detectar patrones y reconocer tendencias, formulando prompts que permitan obtener conclusiones claras y útiles.",
          "video": {
            "youtubeId": "BsDhSLqutLs"
          },
          "resources": [
            {
              "id": "m3u2-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/UNIDAD-32-Analisis-asistido-por-IA-clasificacion-patrones-y-tende-mcoidb995ssto2x"
            },
            {
              "id": "m3u2-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1I0Gkull9VMNJVTFwq8n30n-ESLvGEi9G/preview"
            },
            {
              "id": "m3u2-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/695cf649251ed5fe005f30ec"
            }
          ]
        },
        {
          "n": 3,
          "title": "Interpretación de resultados: oportunidades, riesgos y mirada crítica",
          "description": "Vas a aprender a interpretar los resultados que produce la IA y a darles sentido dentro de un contexto. También vas a identificar oportunidades, riesgos, sesgos y posibles errores antes de utilizar esos resultados para tomar decisiones.",
          "video": {
            "youtubeId": "QWAF_B2MfGo"
          },
          "resources": [
            {
              "id": "m3u3-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-33-Interpretacion-de-resultados-oportunidades-riesgos-y--dwe2v4p1oxrp01m"
            },
            {
              "id": "m3u3-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/16FgP8C5W5othkMnrFsxl5qtaXFDCgXHn/preview"
            },
            {
              "id": "m3u3-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/695d188d7925b4e1781da35b"
            }
          ]
        },
        {
          "n": 4,
          "title": "IA y trabajo: aplicaciones transversales",
          "description": "Vas a integrar la IA en tareas laborales cotidianas para organizar información, analizar comunicaciones y mejorar procesos. El foco estará en identificar qué tareas puede facilitar la IA y cuáles siguen necesitando tu criterio y supervisión.",
          "video": {
            "youtubeId": "rCjMZZ3d5wM"
          },
          "resources": [
            {
              "id": "m3u4-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-34-IA-y-trabajo-aplicaciones-transversales-mbezuzo8sh9xgmt"
            },
            {
              "id": "m3u4-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1TNwjjBDfyte_tkwutr2ZayqjB79B1uQV/preview"
            },
            {
              "id": "m3u4-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/695d1f35930571d7cba2213f"
            }
          ]
        }
      ]
    },
    {
      "n": 4,
      "title": "Comunicación y organización con IA",
      "description": "En este módulo vas a aprender a organizar información, datos y procesos con apoyo de la Inteligencia Artificial. Vas a transformar información desordenada en estructuras claras, identificar oportunidades de mejora y utilizar la IA como apoyo para comprender, ordenar y comunicar mejor.",
      "href": "modulo.html?m=4",
      "estimatedTime": "Aprox. 3 hs",
      "video": {
        "youtubeId": "0m_GOgnDgzg",
        "duration": null
      },
      "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979582",
      "objectives": [
        "Cómo estructurar información en listas, pasos, tablas y matrices.",
        "Cómo reconocer y preparar datos operativos de calidad.",
        "Cómo identificar tareas repetitivas y procesos.",
        "Cómo detectar oportunidades de automatización.",
        "Cómo usar la IA como apoyo para organizar, resumir y clarificar información."
      ],
      "units": [
        {
          "n": 1,
          "title": "Cómo estructurar información con IA: listas, pasos y tablas simples",
          "description": "Vas a aprender a transformar información desordenada en estructuras claras y accionables. Vas a trabajar con listas, pasos numerados, tablas y matrices comparativas, eligiendo el formato más adecuado según lo que necesites hacer.",
          "video": {
            "youtubeId": "9tQHGTa8tmk"
          },
          "resources": [
            {
              "id": "m4u1-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-41-Como-estructurar-informacion-con-IA-listas-pasos-y-ta-wqar5pvfudz3fhj"
            },
            {
              "id": "m4u1-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/12rBs0XJupjTncoiAByXN8XT29MLgvIwp/preview"
            },
            {
              "id": "m4u1-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/695e622ac5550385d03513e5"
            }
          ]
        },
        {
          "n": 2,
          "title": "Pensar en datos operativos",
          "description": "Vas a distinguir entre datos e información y a reconocer qué características hacen que un dato pueda utilizarse correctamente. También vas a identificar errores de calidad que pueden afectar los análisis y resultados producidos por la IA.",
          "video": {
            "youtubeId": "ylt4sv3_kb8"
          },
          "resources": [
            {
              "id": "m4u2-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-42-Pensar-en-datos-operativos-fu67g3tbs5j810m"
            },
            {
              "id": "m4u2-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1RMjoyXkif_Srj5DXH1emtqCPL8NH-5yR/preview"
            },
            {
              "id": "m4u2-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/695f96d43c93c2f7faca0086"
            }
          ]
        },
        {
          "n": 3,
          "title": "Identificación de tareas repetitivas y procesos",
          "description": "Vas a aprender a reconocer tareas repetitivas y a describir procesos mediante la estructura Disparador → Acción → Resultado. Esto te permitirá detectar qué partes de un proceso pueden simplificarse, mejorarse o automatizarse con apoyo de la IA.",
          "video": {
            "youtubeId": "adDZkBzB4v8"
          },
          "resources": [
            {
              "id": "m4u3-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-43-Identificacion-de-tareas-repetitivas-y-procesos-vhue3ukk0y25kjv"
            },
            {
              "id": "m4u3-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1O2LTD76wRWrKPhTZ741bqAONMTwGSWeG/preview"
            },
            {
              "id": "m4u3-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/695fb86135030ee507a51ae9"
            }
          ]
        },
        {
          "n": 4,
          "title": "IA como apoyo para pensar mejor",
          "description": "Vas a utilizar la IA como una herramienta para ordenar, resumir, reformular y auditar información existente. También vas a reconocer cuándo puede ayudarte a pensar con mayor claridad y qué situaciones siguen requiriendo criterio, validación y responsabilidad humana.",
          "video": {
            "youtubeId": "DkVUkzc7r0s"
          },
          "resources": [
            {
              "id": "m4u4-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-44-IA-como-apoyo-para-pensar-mejor-crc7m2fsmxr41bt"
            },
            {
              "id": "m4u4-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1Nyg1OD0X0lC_0bnp9cRBAqyG_ziJ4CfA/preview"
            },
            {
              "id": "m4u4-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/695ff6792011660d48c528fa"
            }
          ]
        }
      ]
    },
    {
      "n": 5,
      "title": "Ética, riesgos y uso responsable",
      "description": "En este módulo vas a desarrollar una mirada crítica y responsable sobre el uso de la Inteligencia Artificial. Vas a reconocer riesgos, sesgos y problemas de privacidad, aprender a verificar contenidos potencialmente falsos y conocer los principales marcos y principios que orientan un uso ético de estas tecnologías.",
      "href": "modulo.html?m=5",
      "estimatedTime": "Aprox. 3 hs",
      "video": {
        "youtubeId": "dZfWEbNffHg",
        "duration": null
      },
      "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979581",
      "objectives": [
        "Cómo reconocer riesgos, sesgos y discriminación algorítmica.",
        "Cómo proteger datos personales y sensibles al usar IA.",
        "Cómo detectar y verificar deepfakes y desinformación.",
        "Qué marcos regulatorios existen para la IA.",
        "Cómo aplicar principios de transparencia, supervisión humana y responsabilidad profesional."
      ],
      "units": [
        {
          "n": 1,
          "title": "Riesgos, sesgos y discriminación algorítmica",
          "description": "Vas a aprender a reconocer los riesgos que pueden surgir del uso de la IA y a diferenciar un error ocasional de un sesgo sistemático. También vas a analizar cómo los datos y las decisiones de diseño pueden generar resultados injustos o discriminatorios.",
          "video": {
            "youtubeId": "8ztw34gxAG4"
          },
          "resources": [
            {
              "id": "m5u1-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-51-Riesgos-sesgos-y-discriminacion-algoritmica-qdvegcaetgkvyyo"
            },
            {
              "id": "m5u1-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1xswpF6xKTxlKxTV9YI0Y-y_3AXJd_0-L/preview"
            },
            {
              "id": "m5u1-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/69610f887d863f2876232615"
            }
          ]
        },
        {
          "n": 2,
          "title": "Privacidad, datos personales y uso responsable",
          "description": "Vas a conocer qué información requiere mayor protección al trabajar con IA y cómo reducir riesgos mediante la minimización y anonimización de datos. También vas a incorporar prácticas seguras para proteger información propia y de terceros.",
          "video": {
            "youtubeId": "_Uv7__FvvtM"
          },
          "resources": [
            {
              "id": "m5u2-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-52-Riesgos-sesgos-y-discriminacion-algoritmica-pm7k4ti8oyi4whm"
            },
            {
              "id": "m5u2-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1896yaw8-v7u_-vm81ZTti5GSTJTYDMRG/preview"
            },
            {
              "id": "m5u2-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/6961155a186419c336d77b7b"
            }
          ]
        },
        {
          "n": 3,
          "title": "Deepfakes, desinformación y verificación humana",
          "description": "Vas a aprender qué son los deepfakes y cómo la IA puede utilizarse para generar o manipular imágenes, audios, videos y textos. También vas a incorporar señales de alerta y estrategias de verificación para evaluar contenidos antes de confiar en ellos o compartirlos.",
          "video": {
            "youtubeId": "7mXtgPC1xEE"
          },
          "resources": [
            {
              "id": "m5u3-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-53-Deepfakes-desinformacion-y-verificacion-humana-1acn1heh00oy6ub"
            },
            {
              "id": "m5u3-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/11dqV_uTdPJ7b1i1O4sc3CoeUbxMdyHxN/preview"
            },
            {
              "id": "m5u3-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/6964fccfcd476f768300aa4a"
            }
          ]
        },
        {
          "n": 4,
          "title": "Marcos regulatorios y uso responsable de la IA",
          "description": "Vas a conocer los principales marcos regulatorios y principios que orientan el uso responsable de la Inteligencia Artificial. El foco estará en aplicar criterios de transparencia, supervisión humana, protección de datos, justicia y responsabilidad profesional en situaciones reales.",
          "video": {
            "youtubeId": "-1U3yI1CJyA"
          },
          "resources": [
            {
              "id": "m5u4-material",
              "category": "Material de estudio",
              "type": "Presentación (Gamma)",
              "label": "Presentación del tema",
              "required": true,
              "url": "https://gamma.app/docs/Unidad-54-Marcos-regulatorios-y-uso-responsable-de-la-IA-ka6g0e7fpjyaseq"
            },
            {
              "id": "m5u4-doc",
              "category": "Material complementario",
              "type": "Documento PDF",
              "label": "Guía práctica",
              "required": false,
              "url": "https://drive.google.com/file/d/1qy_ZWmIpm_tnCrGANGHa1VBRZKKcoPFS/preview"
            },
            {
              "id": "m5u4-check",
              "category": "Comprobá tus conocimientos",
              "type": "Actividad interactiva",
              "label": "Actividad de repaso",
              "required": false,
              "url": "https://view.genially.com/696522f945556f85282a7da1"
            }
          ]
        }
      ]
    }
  ],
  "final": {
    "label": "Evaluación final",
    "href": "final.html",
    "description": "La evaluación final integra todo el recorrido. Se habilita al completar los cinco módulos y, al aprobarla, activás tu certificación.",
    "quizUrl": "https://aulasvirtuales.bue.edu.ar/mod/quiz/view.php?id=979585",
    "certUrl": "https://aulasvirtuales.bue.edu.ar/mod/customcert/view.php?id=980627",
    "certPreview": "img/certificado-preview.png"
  }
};
