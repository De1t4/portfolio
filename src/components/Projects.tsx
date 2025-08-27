import CardProject from "./CardProject"

export default function Projects() {

  const projects = [
    {
      title: "MILITARY APP",
      description: "Es una aplicación diseñada para gestionar diferentes tipos de usuarios en un entorno militar simulado, organizados según su jerarquía y responsabilidades.",
      image: "./images/miltaryapp.png",
      technologies: ["Next.js", "TypeScript", "HTML5", "Tailwind CSS", "Spring Boot", "Java", "MySQL"],
      links: {
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:7326682386165821440/",
        github: "https://github.com/De1t4/ejercito-project-react-typescript.git",
      }
    },
    {
      title: "JUSTINA.IO",
      description:
        "Diseñada para transformar la experiencia en el cuidado de la salud. Nuestra misión es proporcionar soluciones educativas eficientes para pacientes como a médicos, mejorando la comunicación, optimizando procesos y facilitando el acceso a información médica.",
      image: "./images/justina.png",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "MySQL", "Spring Boot", "Java"],
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
      technologies: ["Next.js", "TypeScript", "HTML5", "Tailwind CSS", "Firebase", "Cloudinary"],
      links: {
        demo: 'https://nearbytour.vercel.app/home',
        github: 'https://github.com/No-Country/s11-21-react-next',
      },
    },
    {
      title: "DIGITAL CORNER",
      description:
        "Digital Corner es un blog dinámico que te permite escribir posts sobre tecnologías. Aquí, puedes construir tu comunidad al tener seguidores y seguir a personas que compartan tus intereses.",
      image: "./images/blogapp.png",
      technologies: ["Next.js", "TypeScript", "HTML5", "Tailwind CSS", "Python", "FastAPI", "MySQL", "Cloudinary"],
      links: {
        demo: 'https://digital-corner.netlify.app/',
        github: 'https://github.com/De1t4/blog-app-frontend',
      },
    },
    {
      title: "DRINKVENTRY",
      description:
        "DrinkVentry es una aplicación para la gestión de inventarios de bebidas. Permite el control de diversas bebidas, clientes, presenta un sistema distintivo de administración con roles específicos para el administrador y el usuario.",
      image: "./images/drinkventry.png",
      technologies: ["React.js", "TypeScript", "HTML5", "Tailwind CSS", "Mongo DB", "Node.js", "Express.js"],
      links: {
        demo: 'https://drinkventry.netlify.app/',
        github: 'https://github.com/No-Country/s12-23-tn-typescript-react/tree/developer',
      },
    },
  ]

  return (
    <>
      <section id="projects" className="py-16  my-4 ">
        <h2 className="font-montserrat font-bold text-3xl text-center mb-4 text-gray-100">Proyectos</h2>
        <div className="grid  grid-cols-2 gap-4 max-md:grid-cols-1 md:gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <CardProject
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
            />
          ))}
          <div
            className="overflow-hidden flex justify-center items-center hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700"
          >
            <div className="p-4">
              <div className="mb-4 space-y-2">
                <div className="font-montserrat font-bold text-gray-100 text-center">Próximamente</div>
                <div className="line-clamp-3 text-gray-400">Estoy trabajando en nuevos proyectos que pronto estarán disponibles aquí. ¡Mantente atento!</div>
              </div>
              <div>
                <div className="flex gap-2">
                  <button className="flex-1 justify-center items-center flex p-2 bg-emerald-500 rounded-md hover:bg-emerald-600 text-gray-950"
                  >
                    Próximamente
                  </button>
                  <button
                    className="flex-1 justify-center items-center flex p-2 border-collapse rounded-md border  border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-gray-100 bg-transparent"
                  >
                    Código
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}