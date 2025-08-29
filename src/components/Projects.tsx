import { motion } from "motion/react"
import { projects } from "../data/Data"
import { fadeInGroup, staggerContainer } from "../utils/Animations"
import CardProject from "./CardProject"

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-16  my-4 ">
        <h2 className="font-montserrat font-bold text-3xl text-center mb-4 text-gray-100">Proyectos</h2>
        <motion.div
          className="grid grid-cols-2 gap-4 max-md:grid-cols-1 md:gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
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
          <motion.div
            variants={fadeInGroup}
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
          </motion.div>
        </motion.div>


      </section>
    </>
  )
}