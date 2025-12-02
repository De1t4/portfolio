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
  // {
  //   period: "2023 Mar - Presente",
  //   title: "Informática Aplicada",
  //   subtitle: "Estudio actual",
  //   description:
  //     "Empecé mi segunda carrera en Técnico en Informática Aplicada, con el objetivo de profundizar mis conocimientos en programación y desarrollo de software.",
  //   icon: <MonitorCog />,
  // },
  {
    period: "2022 Mar - 2024 Dic",
    title: "Análisis en Sistemas",
    subtitle: "Inicio de carrera",
    description:
      "Inicié mi primera carrera en Técnico en Análisis de Sistemas, con muchas dudas pero con el objetivo de explorar el mundo de la tecnología y la programación.",
    icon: <BookMarked />,
  },
]

export const experiences = [
  {
    company: "Freelance",
    position: " Desarrollador Web",
    period: "Jun 2025 - Actualidad",
    location: "Buenos Aires, Argentina",
    type: "Tiempo Parcial",
    description:
      "Me desempeño como desarrollador web freelance, liderando el desarrollo frontend de un e-commerce B2B. Dirijo un equipo de 5 personas, asignando tareas, realizando code reviews y coordinando reuniones con líderes de otras áreas. Garantizo un desarrollo eficiente y escalable, aplicando la metodología ágil Scrum",
    technologies: ["HTML5", "React.js", "Tailwind CSS", "MySQL", "Spring Boot", "Java", "Git", "Next.js", "Zustand", "Material UI", "Scrum"],
    achievements: [
      "Lideré el equipo de Frontend (5 miembros), implementando Scrum para la entrega de un e-commerce B2B mayorista con un 10% de ahorro de tiempo respecto al plazo inicial",
      "Revisé más de 100 PRs, lo que resultó en una reducción del 30% de errores en el despliegue de la aplicación.",
      "Mantuve y modernicé la base de código, garantizando la adopción de mejores prácticas para optimizar la escalabilidad del sistema y reducir la deuda técnica.",
      "Coordiné la integración con el equipo de Backend, definiendo las APIs y optimizando el manejo de datos para mejorar los tiempos de carga en el cliente."
    ],
  },
  {
    company: "IcarisTech",
    position: "Desarrollador Web",
    period: "Sep 2024 - Mar 2025",
    location: "Remoto",
    type: "Contractor",
    description:
      "Desarrollo de aplicaciones web completas para startups y pymes. Creación de APIs RESTful, bases de datos y interfaces de usuario. Trabajo directo con fundadores para materializar sus ideas en productos digitales. Documentación y mantenimiento de código. Soporte post-lanzamiento.",
    technologies: ["HTML5", "React.js", "Tailwind CSS", "MySQL", "Spring Boot", "Java", "Git", "Docker", "Figma", "Mercado Pago"],
    achievements: [
      "Gestioné la comunicación directa con clientes para la toma de requerimientos y alineando el desarrollo con las necesidades del negocio.",
      "Desarrollé módulos críticos (gestión de pagos y carritos) utilizando React y Java, asegurando transacciones seguras y optimizando el flujo de compra del usuario",
      "Implementé interfaces intuitivas optimizadas, asegurando una experiencia de usuario fluida y alineada con laidentidad de marca del cliente. ",
    ],
  },
  {
    company: "No Country",
    position: "Desarrollador Frontend (Prácticas)",
    period: "Ene 2024 - Ago 2024",
    location: "Remoto",
    type: "Prácticas",
    description:
      "Prácticas profesionales en agencia digital especializada en sitios web corporativos. Aprendizaje de metodologías ágiles, trabajo en equipo y desarrollo de proyectos reales para clientes de diversos sectores.",
    technologies: ["React.Js", "HTML5", "Tailwind CSS", "TypeScript", "JavaScript", "Next.Js", "Git", "Figma", "Scrum",],
    achievements: [
      "Desarrollé 4 nuevas aplicaciones web tipo MVPs (Productos Mínimos Viables) en entornos de simulación laboral, colaborando con equipos multidisciplinarios (Diseño, Backend, QA) bajo metodologías ágiles.",
      "Implementé arquitecturas escalables con React, TypeScript y Tailwind CSS, logrando despliegues en producción robustos y libres de errores críticos. ",
      "Logros:  Obtuve el 2º puesto entre 15 equipos en el Hackathon 'Justina.IO', desarrollando y presentando unasolución funcional.",
    ],
  },
]
