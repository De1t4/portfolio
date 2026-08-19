import { BookMarked, ChartColumnIncreasing } from "lucide-react";

interface ProjectType {
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  links?: {
    demo: string;
    github: string;
  };
}

export const projects: ProjectType[] = [
  {
    title: "Sistema de Gestión de Stock",
    description:
      "Un emprendimiento de indumentaria gestionaba su inventario con planillas manuales, generando errores y demoras en ventas. Desarrollé un sistema fullstack con React + TypeScript y Supabase + PostgreSQL que automatiza el control de stock en tiempo real, punto de venta con cálculo automático y dashboard de métricas, reduciendo el tiempo de cierre de venta en ~50% y eliminando errores de inventario.",
    image: "/images/jhervys.png",
    images: [
      "/images/jhervys.png",
      "/images/jhervys-2.png",
      "/images/jhervys-3.png",
      "/images/jhervys-4.png",
      "/images/jhervys-5.png",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "HTML5",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Git",
    ],
    links: undefined,
  },
  {
    title: "CONSULTELO",
    description:
      "Profesionales independientes necesitaban gestionar consultas online sin depender de canales informales. Creé una plataforma SaaS con Next.js + Prisma + Supabase que conecta profesionales con usuarios, incluyendo autenticación segura, sistema de roles (owner/user) y panel de administración de servicios.",
    image: "./images/consultelo.png",
    images: [
      "./images/consultelo.png",
      "./images/consultelo-2.png",
      "./images/consultelo-3.png",
      "./images/consultelo-4.png",
      "./images/consultelo-5.png",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "HTML5",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "Git",
    ],
    links: {
      demo: "https://consultelo.vercel.app/",
      github: "https://github.com/De1t4/consultelo",
    },
  },
  {
    title: "MILITARY APP",
    description:
      "Proyecto fullstack que modela un sistema de gestión con roles jerárquicos complejos. Implementé el frontend con Next.js + TypeScript y el backend con Spring Boot + Java + MySQL, diseñando un sistema de herencia de permisos por jerarquía con 4 niveles diferenciados y API REST documentada.",
    image: "./images/miltaryapp.png",
    images: [
      "./images/miltaryapp.png",
      "./images/miltaryapp-2.jfif",
      "./images/miltaryapp-3.jfif",
      "./images/miltaryapp-4.jfif",
      "./images/miltaryapp-5.jfif",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "HTML5",
      "Tailwind CSS",
      "Spring Boot",
      "Java",
      "MySQL",
    ],
    links: {
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7326682386165821440/",
      github: "https://github.com/De1t4/ejercito-project-react-typescript.git",
    },
  },
  {
    title: "JUSTINA.IO",
    description:
      "🥈 2.° puesto en Hackathon No Country. En equipo multidisciplinario y tiempo limitado, diseñamos una plataforma de salud digital para mejorar la comunicación médico-paciente. Lideré el frontend con React + TypeScript, integré el backend en Spring Boot y diseñé interfaces accesibles enfocadas en UX para pacientes.",
    image: "./images/justina.png",
    images: [
      "./images/justina.jpg",
      "./images/justina-2.png",
      "./images/justina-3.png",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "Spring Boot",
      "Java",
    ],
    links: {
      demo: "https://justina-io-h107.netlify.app/",
      github: "https://github.com/No-Country-simulation/h1-07-java-react-",
    },
  },
  {
    title: "DIGITAL CORNER",
    description:
      "Blog fullstack con sistema social de seguidores y feeds personalizados. Frontend en Next.js + TypeScript, backend en Python + FastAPI + MySQL. Integré Cloudinary para gestión de imágenes en la nube y diseñé un sistema de comunidad completo con CRUD de posts y perfiles.",
    image: "./images/blogapp.png",
    images: ["./images/blogapp.png", "./images/blogapp-2.png"],
    technologies: [
      "Next.js",
      "TypeScript",
      "HTML5",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "MySQL",
      "Cloudinary",
    ],
    links: {
      demo: "https://digital-corner.netlify.app/",
      github: "https://github.com/De1t4/blog-app-frontend",
    },
  },
];

export const timeline = [
  {
    period: "2025 Ago - Presente",
    title: "Ciencia de Datos",
    subtitle: "Estudio actual",
    description:
      "Inicié mis estudios en la carrera de Licenciatura en Ciencia de Datos, con el objetivo de especializarme mis habilidades en programación y estadística.",
    icon: <ChartColumnIncreasing />,
  },
  {
    period: "2022 Mar - 2024 Dic",
    title: "Análisis en Sistemas",
    subtitle: "Inicio de carrera",
    description:
      "Inicié mi primera carrera en Técnico en Análisis de Sistemas, con muchas dudas pero con el objetivo de explorar el mundo de la tecnología y la programación.",
    icon: <BookMarked />,
  },
];

export const experiences = [
  {
    company: "Primarket",
    position: "Frontend Lead",
    period: "Jun 2025 - Dic 2025",
    location: "Buenos Aires, Argentina",
    type: "Profesional Independiente",
    link: "https://www.linkedin.com/company/primarket/home/",
    technologies: [
      "HTML5",
      "React.js",
      "Tailwind CSS",
      "MySQL",
      "Spring Boot",
      "Java",
      "Git",
      "Next.js",
      "Zustand",
      "Material UI",
      "Scrum",
    ],
    achievements: [
      "Colaboré de forma voluntaria liderando el equipo de desarrollo técnico (5 miembros), asumiendo la arquitectura y construcción de los módulos frontend más críticos de la plataforma.",
      "Fomenté la estandarización del código mediante la revisión de más de 100 PRs e implementación de herramientas de calidad, aplicando patrones de diseño y promoviendo buenas prácticas para reducir un 30% los errores de despliegue.",
      "Optimicé los flujos de trabajo del equipo, mejorando los tiempos de entrega en un 25% a través de la estandarización de código.",
      "Guiado y apoyo técnico a desarrolladores menos experimentados en la adopción de buenas prácticas de programación y estándares del proyecto.",
    ],
  },
  {
    company: "IcarisTech",
    position: "Frontend Developer",
    period: "Sep 2024 - Mar 2025",
    link: "https://www.linkedin.com/company/icaristech/",
    location: "Buenos Aires, Argentina",
    type: "Profesional Independiente",
    technologies: [
      "HTML5",
      "React.js",
      "Tailwind CSS",
      "MySQL",
      "Spring Boot",
      "Java",
      "Git",
      "Docker",
      "Figma",
      "Mercado Pago",
    ],
    achievements: [
      "Trabajé en equipo para un cliente directo, gestionando la comunicación técnica y negociación de requerimientos para alinear el desarrollo con objetivos de negocio.",
      "Diseñe componentes críticos e integré pasarela de Mercado Pago, asegurando transacciones seguras mediante un manejo robusto de estados y APIs.",
      "Implementé interfaces intuitivas optimizadas, asegurando una experiencia de usuario fluida y alineada con la identidad de marca del cliente. ",
      "Desarrollo y entrega del 100% de los módulos críticos acordados bajo contrato dentro de los plazos estipulados, logrando un índice de satisfacción del cliente excelente.",
    ],
  },
  {
    company: "No Country",
    position: "Frontend Developer",
    period: "Ene 2024 - Ago 2024",
    location: "Remoto",
    link: "https://nocountry.tech/",
    type: "Contrato de prácticas",
    description:
      "Prácticas profesionales en agencia digital especializada en sitios web corporativos. Aprendizaje de metodologías ágiles, trabajo en equipo y desarrollo de proyectos reales para clientes de diversos sectores.",
    technologies: [
      "React.Js",
      "HTML5",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Next.Js",
      "Git",
      "Figma",
      "Scrum",
    ],
    achievements: [
      "Colaboración activa en el ciclo completo de desarrollo de 4 MVPs, priorizando características esenciales junto al equipo para validar ideas de producto de forma ágil y eficientes",
      "Participación activa en sesiones de Code Review, recibiendo feedback técnico constructivo para mejorar la calidad de mi código y aplicando las sugerencias de manera inmediata.",
      "Obtención del 2.° puesto en el Hackatón Interno de la organización Justina.IO, diseñando y prototipando una característica innovadora evaluada bajo criterios de viabilidad técnica, negocio y presentación ante un jurado.",
    ],
  },
];
