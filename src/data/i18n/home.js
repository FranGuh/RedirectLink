export const homeContent = {
  es: {
    metadata: {
      title: 'Gustavo Francisco | Developer Links - RedirectLink',
      description:
        'Enlaces oficiales de Gustavo Francisco - Desarrollador Web React. Proyectos, portfolio, redes sociales y contacto profesional.',
      keywords: 'Gustavo Francisco, desarrollador web, React, portfolio, programador',
    },
    background: {
      src: '/images/user/fondo2.jpg',
      alt: 'Fondo decorativo de perfil de Gustavo Francisco',
    },
    profile: {
      name: 'Gustavo Francisco',
      username: '@FranGuh',
      photo: '/images/user/Profilepic.png',
      photoAlt: 'Foto de perfil de Gustavo Francisco',
      description: 'Soy Gustavo Francisco, Software Engineer powered by AI.',
      highlights: ['Software Engineer', 'AI'],
    },
    about: {
      title: 'Soy Gustavo Francisco',
      paragraphs: [
        'Construyo productos de punta a punta como <b>Software Engineer</b> full-stack: <b>React, TypeScript, Next.js y Svelte</b> en el frontend, <b>Python y Node</b> en el backend, sobre infraestructura cloud (AWS, Vercel, Cloudflare).',
        'Como <b>fundador y mantenedor principal de plynte-labs</b>, mi foco son los <b>sistemas de IA local-first</b>: <b>OpenCohost</b>, un co-host de voz con IA para streamers (LLMs locales con Ollama + síntesis de voz en tiempo real); <b>Brick.draw</b>, una app de escritorio en <b>Tauri/Rust</b> que mejora dibujos con <b>Stable Diffusion XL</b>; y pipelines de <b>visión artificial</b> con PyTorch y Whisper.',
        'La <b>inteligencia artificial</b> no es un adorno en lo que hago: es el motor. La uso para construir más rápido y más profundo, pero cada decisión técnica la valido con criterio propio. <b>Construyo, mido y escalo</b> productos reales.',
      ],
    },
    modalLabels: {
      close: 'Cerrar modal',
      historyLink: 'Leer mi historia completa →',
      projectsTitle: 'Proyectos',
    },
    links: [
      { name: 'Sobre Mí', icon: 'lucide:book', href: '#', action: 'openModal' },
      { name: 'Mi Historia', icon: 'lucide:scroll', href: '/history' },
      { name: 'plynte', icon: 'lucide:flask-conical', href: 'https://plynte.com' },
      { name: 'OpenCohost', icon: 'lucide:mic', href: 'https://opencohost.com' },
      { name: 'LinkedIn', icon: 'lucide:linkedin', href: 'https://www.linkedin.com/in/gustavo-francisco-salgado-andrade-496553337/' },
      { name: 'Github', icon: 'lucide:github', href: 'https://github.com/FranGuh' },
      { name: 'Portfolio', icon: 'lucide:file-user', href: 'https://franguh.plynte.com' },
      { name: 'X', icon: 'simple-icons:x', href: 'https://x.com/FranGuhh' },
    ],
    toggleLabel: 'Cambiar idioma',
  },
  en: {
    metadata: {
      title: 'Gustavo Francisco | Developer Links - RedirectLink',
      description:
        'Official links for Gustavo Francisco, a software engineer building AI-powered products, local-first tools, and developer experiences.',
      keywords: 'Gustavo Francisco, software engineer, React, AI, portfolio, developer',
    },
    background: {
      src: '/images/user/fondo2.jpg',
      alt: 'Decorative profile background for Gustavo Francisco',
    },
    profile: {
      name: 'Gustavo Francisco',
      username: '@FranGuh',
      photo: '/images/user/Profilepic.png',
      photoAlt: 'Profile photo of Gustavo Francisco',
      description: 'I am Gustavo Francisco, Software Engineer powered by AI.',
      highlights: ['Software Engineer', 'AI'],
    },
    about: {
      title: 'I am Gustavo Francisco',
      paragraphs: [
        'I build products end to end as a full-stack <b>Software Engineer</b>: <b>React, TypeScript, Next.js, and Svelte</b> on the frontend, <b>Python and Node</b> on the backend, deployed on cloud infrastructure such as AWS, Vercel, and Cloudflare.',
        'As the <b>founder and lead maintainer of plynte-labs</b>, I focus on <b>local-first AI systems</b>: <b>OpenCohost</b>, an AI voice co-host for streamers using local LLMs and real-time voice synthesis; <b>Brick.draw</b>, a <b>Tauri/Rust</b> desktop drawing app enhanced with <b>Stable Diffusion XL</b>; and computer-vision pipelines with PyTorch and Whisper.',
        '<b>Artificial intelligence</b> is not decoration in my work: it is the engine. I use it to build faster and deeper, while validating every technical decision with my own judgment. I <b>build, measure, and scale</b> real products.',
      ],
    },
    modalLabels: {
      close: 'Close modal',
      historyLink: 'Read my full story →',
      projectsTitle: 'Projects',
    },
    links: [
      { name: 'About Me', icon: 'lucide:book', href: '#', action: 'openModal' },
      { name: 'My Story', icon: 'lucide:scroll', href: '/en/history' },
      { name: 'plynte', icon: 'lucide:flask-conical', href: 'https://plynte.com' },
      { name: 'OpenCohost', icon: 'lucide:mic', href: 'https://opencohost.com' },
      { name: 'LinkedIn', icon: 'lucide:linkedin', href: 'https://www.linkedin.com/in/gustavo-francisco-salgado-andrade-496553337/' },
      { name: 'Github', icon: 'lucide:github', href: 'https://github.com/FranGuh' },
      { name: 'Portfolio', icon: 'lucide:file-user', href: 'https://franguh.plynte.com' },
      { name: 'X', icon: 'simple-icons:x', href: 'https://x.com/FranGuhh' },
    ],
    toggleLabel: 'Switch language',
  },
};

const sharedProjects = [
  {
    name: 'OpenCohost',
    icon: 'lucide:mic',
    href: 'https://opencohost.com',
    image: '/images/ContainerGrid/VoiceAI/VoiceAI.webp',
    imageAlt: {
      es: 'Captura de OpenCohost - co-host de voz con IA para streamers con LLMs locales',
      en: 'OpenCohost screenshot - AI voice co-host for streamers with local LLMs',
    },
  },
  {
    name: 'Brick.draw',
    icon: 'lucide:palette',
    href: 'https://github.com/plynte-labs/brick-draw',
    image: '/images/ContainerGrid/BrickDraw/Home.webp',
    imageAlt: {
      es: 'Captura de Brick.draw - app de escritorio de dibujo con IA (Stable Diffusion XL)',
      en: 'Brick.draw screenshot - AI-enhanced desktop drawing app with Stable Diffusion XL',
    },
  },
  {
    name: 'LiveAudio',
    icon: 'lucide:audio-lines',
    href: 'https://github.com/plynte-labs/liveaudio',
    image: '/images/ContainerGrid/LiveAudio/LiveAudio.webp',
    imageAlt: {
      es: 'Captura de LiveAudio - subtitulado en tiempo real para streamers con Whisper',
      en: 'LiveAudio screenshot - real-time captions for streamers with Whisper',
    },
  },
];

for (const locale of ['es', 'en']) {
  homeContent[locale].projects = sharedProjects.map((project) => ({
    ...project,
    imageAlt: project.imageAlt[locale],
  }));
}
