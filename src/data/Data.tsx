import { BookMarked, ChartColumnIncreasing } from "lucide-react";

export const projects = [
  {
    title: "MILITARY APP",
    description:
      "Es una aplicación diseñada para gestionar diferentes tipos de usuarios en un entorno militar simulado, organizados según su jerarquía y responsabilidades.",
    image: "./images/miltaryapp.png",
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
      "Diseñada para transformar la experiencia en el cuidado de la salud. Nuestra misión es proporcionar soluciones educativas eficientes para pacientes como a médicos, mejorando la comunicación, optimizando procesos y facilitando el acceso a información médica.",
    image: "./images/justina.png",
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
    title: "NEARBYTOUR",
    description:
      "NearbyTour es tu puerta de entrada a las joyas ocultas del mundo, esos lugares secretos que solo los lugareños conocen. Descubre tesoros inexplorados, aventuras únicas y la auténtica cultura local con NearbyTour.",
    image: "/images/nearby.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "HTML5",
      "Tailwind CSS",
      "Firebase",
      "Cloudinary",
    ],
    links: {
      demo: "https://nearbytour.vercel.app/home",
      github: "https://github.com/No-Country/s11-21-react-next",
    },
  },
  {
    title: "DIGITAL CORNER",
    description:
      "Digital Corner es un blog dinámico que te permite escribir posts sobre tecnologías. Aquí, puedes construir tu comunidad al tener seguidores y seguir a personas que compartan tus intereses.",
    image: "./images/blogapp.png",
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
  {
    title: "DRINKVENTRY",
    description:
      "DrinkVentry es una aplicación para la gestión de inventarios de bebidas. Permite el control de diversas bebidas, clientes, presenta un sistema distintivo de administración con roles específicos para el administrador y el usuario.",
    image: "./images/drinkventry.png",
    technologies: [
      "React.js",
      "TypeScript",
      "HTML5",
      "Tailwind CSS",
      "Mongo DB",
      "Node.js",
      "Express.js",
    ],
    links: {
      demo: "https://drinkventry.netlify.app/",
      github:
        "https://github.com/No-Country/s12-23-tn-typescript-react/tree/developer",
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
    position: "Desarrollador Web",
    period: "Jun 2025 - Dic 2025",
    location: "Buenos Aires, Argentina",
    type: "Profesional Independiente",
    link: "https://primarket.codershub.top/",
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
      "Lideré un equipo técnico de 5 desarrolladores bajo metodología ágiles, optimizando los tiempos de entrega de los sprints en un 30%.",
      "Fomenté la estandarización del código mediante la revisión de más de 100 PRs e implementación de herramientas de calidad, aplicando patrones de diseño y promoviendo buenas prácticas para reducir un 30% los errores de despliegue.",
      "Refactorización de código heredado (legacy code) hacia arquitecturas limpias y modulares en React, facilitando la escalabilidad del sistema y reduciendo el tiempo de inducción de nuevos desarrolladores.",
      "Guiado y apoyo técnico a desarrolladores menos experimentados en la adopción de buenas prácticas de programación y estándares del proyecto.",
    ],
  },
  {
    company: "IcarisTech",
    position: "Desarrollador Web",
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
    position: "Desarrollador Frontend",
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
