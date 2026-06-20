const sharedProjects = [
  {
    name: 'OpenCohost',
    image: '/images/history/opencohost.webp',
    stack: ['Python', 'Ollama', 'QwenTTS', 'Edge-TTS', 'Flask'],
    href: 'https://opencohost.com',
  },
  {
    name: 'LiveAudio',
    image: '/images/history/liveaudio.webp',
    stack: ['Python', 'Whisper', 'Silero VAD', 'OBS', 'Nuitka'],
    href: 'https://github.com/plynte-labs/liveaudio',
  },
  {
    name: 'Brick.draw',
    image: '/images/history/brickdraw.webp',
    stack: ['Tauri', 'Rust', 'React', 'TypeScript', 'Zustand'],
    href: 'https://github.com/plynte-labs/brick-draw',
  },
  {
    name: 'Sloppy',
    image: '/images/history/sloppy.webp',
    stack: ['Python', 'SDXL', 'PyTorch', 'FastAPI', 'CUDA'],
    href: '',
  },
  {
    name: 'RememberCompanion',
    image: '/images/history/remembercompanion.webp',
    stack: ['React Native', 'TypeScript', 'SQLite', 'SQLCipher'],
    href: '',
  },
];

export const historyContent = {
  es: {
    metadata: {
      title: 'Mi Historia | Gustavo Francisco',
      description:
        'El punto de inflexión: del código improvisado al diseño de sistemas y la automatización agéntica. La historia de Gustavo Francisco, Software Engineer powered by AI.',
      keywords: 'Gustavo Francisco, historia, software engineer, IA, automatización agéntica',
    },
    labels: {
      back: '← Volver',
      eyebrow: 'Mi Historia',
      projectsEyebrow: 'Lo que construí',
      projectsTitle: 'Proyectos, no promesas',
      projectImageAlt: 'Captura de',
      projectLink: 'Ver proyecto →',
      primaryCta: 'Conocé plynte-labs →',
      secondaryCta: '← Volver a los enlaces',
      toggleLabel: 'Cambiar idioma',
    },
    hero: {
      title: 'El Punto de Inflexión',
      lede: 'La transición real del código improvisado al diseño de sistemas y la automatización agéntica.',
    },
    scenes: [
      {
        eyebrow: 'El Origen',
        title: 'El mejor y peor día de mi vida comenzó aquí',
        paragraphs: [
          'Con 24 años, a una semana de recibir mi título de Ingeniero en Sistemas Computacionales, me encontré en un callejón sin salida. Las ofertas del mercado tradicional estaban rotas: salarios de miseria de menos de 8,000 pesos mensuales, procesos de reclutamiento ciegos dirigidos por filtros automatizados y el fantasma del estancamiento profesional. Vi a muchos compañeros de facultad rendirse ante la frustración y refugiarse en los videojuegos.',
          'Fue el peor día porque el estrés financiero y la incertidumbre eran asfixiantes. Sabía que no podía competir en el mercado de mano de obra barata y repetitiva. Pero también fue el mejor día porque tomé una decisión de hierro. Desinstalé de raíz League of Legends (donde había invertido incontables horas para llegar a rango Esmeralda) y decidí que toda esa disciplina mental, capacidad de foco y resiliencia se canalizarían en construir mi propio destino.',
          'Invertí mis últimos 5 dólares en perfeccionar mis fundamentos de desarrollo web con cursos avanzados y en registrar webinars de metodologías avanzadas de automatización con agentes. Entendí que copiar y pegar código generado por chats sin entender el motor V8 de Google, la persistencia segura con SQLCipher o las integraciones CUDA en GPU local de 12GB era una trampa. En ese instante dejé de ser un programador reactivo y empecé a pensar como un Arquitecto de Sistemas.',
        ],
      },
      {
        eyebrow: 'La Filosofía',
        title: 'La dirección lógica por encima de la escritura manual de código',
        paragraphs: [
          'La irrupción de la inteligencia artificial de frontera no destruyó mi carrera; la potenció. Comprendí rápidamente una regla de negocio fundamental: escribir sintaxis se volvió barato, pero diseñar arquitectura y resolver la distribución lo es todo. La ingeniería moderna ya no consiste en escribir líneas de código de forma manual e ineficiente, sino en dirigir la lógica abstracta.',
          'Adopté el desarrollo dirigido por especificaciones (Spec-Driven Development o SDD) y la documentación de decisiones arquitectónicas (ADRs). Dejé de programar por intuición ciega para pasar a modelar sistemas híbridos locales y de nube. En lugar de gastar miles de dólares en suscripciones cerradas, integré herramientas de orquestación agéntica como Codex, Antigravity y la base de conocimiento vectorial Engram, operando bajo chasis local-first.',
          'Esta forma de trabajo me permite actuar como el director de un equipo técnico integrado en mi propia computadora. Investigo, diseño la estrategia, audito los planes de testing y controlo los tradeoffs de cada decisión — y entrego software seguro, tipado y validado a una velocidad que como desarrollador individual no habría imaginado.',
        ],
      },
    ],
    projectsDescription:
      'Sistemas que diseñé y construí de punta a punta. Uso herramientas como Ollama, Whisper o Stable Diffusion — pero la arquitectura que las orquesta es mía.',
    ctaText: 'De código improvisado a dirigir un laboratorio de IA. Y esto recién empieza.',
  },
  en: {
    metadata: {
      title: 'My Story | Gustavo Francisco',
      description:
        'The turning point: from improvised code to systems design and agentic automation. The story of Gustavo Francisco, Software Engineer powered by AI.',
      keywords: 'Gustavo Francisco, story, software engineer, AI, agentic automation',
    },
    labels: {
      back: '← Back',
      eyebrow: 'My Story',
      projectsEyebrow: 'What I built',
      projectsTitle: 'Projects, not promises',
      projectImageAlt: 'Screenshot of',
      projectLink: 'View project →',
      primaryCta: 'Explore plynte-labs →',
      secondaryCta: '← Back to links',
      toggleLabel: 'Switch language',
    },
    hero: {
      title: 'The Turning Point',
      lede: 'The real transition from improvised code to systems design and agentic automation.',
    },
    scenes: [
      {
        eyebrow: 'The Origin',
        title: 'The best and worst day of my life started here',
        paragraphs: [
          'At 24, one week away from receiving my Computer Systems Engineering degree, I hit a wall. The traditional market felt broken: very low salaries, blind recruiting pipelines driven by automated filters, and the threat of professional stagnation. I watched many classmates give up under that frustration and escape into videogames.',
          'It was the worst day because the financial stress and uncertainty were suffocating. I knew I could not compete in a cheap, repetitive labor market. But it was also the best day because I made a hard decision. I uninstalled League of Legends, where I had invested countless hours reaching Emerald rank, and decided that all that mental discipline, focus, and resilience would go into building my own path.',
          'I invested my last five dollars in deepening my web development fundamentals and recording advanced agent-automation methodology webinars. I understood that copy-pasting generated code without understanding Google V8, secure persistence with SQLCipher, or local 12GB GPU CUDA integrations was a trap. That day I stopped acting like a reactive programmer and started thinking like a Systems Architect.',
        ],
      },
      {
        eyebrow: 'The Philosophy',
        title: 'Logical direction matters more than manually writing code',
        paragraphs: [
          'Frontier artificial intelligence did not destroy my career; it amplified it. I quickly understood a core business rule: syntax became cheap, but architecture and distribution are everything. Modern engineering is no longer about manually writing lines of code inefficiently; it is about directing abstract logic.',
          'I adopted Spec-Driven Development and Architecture Decision Records. I stopped programming by blind intuition and started modeling hybrid local and cloud systems. Instead of spending thousands of dollars on closed subscriptions, I integrated agentic orchestration tools such as Codex, Antigravity, and the Engram vector knowledge base under a local-first chassis.',
          'This workflow lets me operate like the director of a technical team inside my own computer. I research, design strategy, audit testing plans, and control the tradeoffs behind every decision — delivering secure, typed, validated software at a speed I would not have imagined as a solo developer.',
        ],
      },
    ],
    projectsDescription:
      'Systems I designed and built end to end. I use tools like Ollama, Whisper, and Stable Diffusion — but the architecture that orchestrates them is mine.',
    ctaText: 'From improvised code to directing an AI lab. And this is only getting started.',
  },
};

const localizedProjectText = {
  es: [
    ['Co-host de voz con IA', 'Construí un co-host de voz con IA para streamers: ingiere el chat de Twitch/YouTube en tiempo real, genera respuestas con LLMs locales y sintetiza la voz al vuelo. Local-first y determinístico.'],
    ['Subtitulado en tiempo real', 'Sistema de subtítulos en vivo para streamers: detección de voz continua con Silero VAD, transcripción con Whisper local e integración directa en OBS. Empaquetado portable con Nuitka.'],
    ['App de escritorio de dibujo', 'App de escritorio de dibujo por capas (estilo Paint/Photoshop) construida en Tauri + Rust. Se comunica con Sloppy para mejorar los dibujos con Stable Diffusion XL local.'],
    ['API de visión artificial', 'API de visión artificial que genera y mejora imágenes con Stable Diffusion XL por inferencia local. Es el motor de IA detrás de Brick.draw.'],
    ['Diario local-first en Android', 'App Android de diario de productividad, local-first, con la base de datos cifrada (SQLCipher) para privacidad máxima. Registra pensamientos, acciones y satisfacción diaria.'],
  ],
  en: [
    ['AI voice co-host', 'I built an AI voice co-host for streamers: it ingests Twitch/YouTube chat in real time, generates responses with local LLMs, and synthesizes voice on the fly. Local-first and deterministic.'],
    ['Real-time captions', 'Live captioning system for streamers: continuous voice detection with Silero VAD, local Whisper transcription, and direct OBS integration. Packaged portably with Nuitka.'],
    ['Desktop drawing app', 'Layer-based desktop drawing app, in the spirit of Paint/Photoshop, built with Tauri + Rust. It connects with Sloppy to enhance drawings through local Stable Diffusion XL.'],
    ['Computer-vision API', 'Computer-vision API that generates and improves images with Stable Diffusion XL through local inference. It is the AI engine behind Brick.draw.'],
    ['Local-first Android journal', 'Android productivity journal app, local-first, with an encrypted SQLCipher database for privacy. It tracks thoughts, actions, and daily satisfaction.'],
  ],
};

for (const locale of ['es', 'en']) {
  historyContent[locale].projects = sharedProjects.map((project, index) => ({
    ...project,
    role: localizedProjectText[locale][index][0],
    description: localizedProjectText[locale][index][1],
  }));
}
