import { Building, Calendar, MapPin, Users } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Freelance",
      position: " Desarrollador Web",
      period: "Abr 2025 - Actualidad",
      location: "Buenos Aires, Argentina",
      type: "Tiempo Parcial",
      description:
        "Me desempeño como desarrollador web freelance, liderando el desarrollo frontend de un e-commerce B2B. Dirijo un equipo de 5 personas, asignando tareas, realizando code reviews y coordinando reuniones con líderes de otras áreas. Garantizo un desarrollo eficiente y escalable, aplicando la metodología ágil Scrum",
      technologies: ["HTML5", "React.js", "Tailwind CSS", "MySQL", "Spring Boot", "Java", "Git", "Next.js", "Zustand", "Material UI", "Scrum"],
      achievements: [
        "Lideré un equipo de 5 desarrolladores",
        "Implementé sistema de componentes reutilizables",
        "Mejoré la performance del sitio en un 30%",
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
      technologies: ["HTML5", "React.js", "Tailwind CSS", "MySQL", "Spring Boot", "Java", "Git", "Docker"],
      achievements: [
        "Integré sistemas de pago como Mercado Pago y PayPal",
        "Entregué todos los proyectos dentro del plazo acordado",
        "Colaboré en la creación de MVPs exitosos",
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
        "Desarrollé 4 MVPs completos desde cero",
        "Aprendí metodologías agiles Scrum y Kanban",
        "Obtuvé el segundo puesto en un Hackathon interno",
      ],
    },
  ]


  return (
    <section id="experience" className="py-16 px-4 ">
      <div className="container mx-auto w-full">
        <h2 className="font-montserrat font-bold text-3xl text-center mb-4 text-gray-100">Experiencia Profesional</h2>
        <div className="space-y-8 ">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-md border-gray-700 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
            >
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="font-montserrat font-bold text-xl text-gray-100 mb-2">
                      {exp.position}
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                      <Building className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="border-gray-600 text-gray-300">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-300 mb-4 leading-relaxed mt-2">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-100 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    Logros principales:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-100 mb-3">Tecnologías utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs p-2 rounded-sm cursor-pointer bg-gray-700 text-gray-300 hover:bg-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}