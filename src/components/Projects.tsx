import { motion } from "motion/react"
import { projects } from "../data/Data"
import { fadeInGroup, staggerContainer } from "../utils/Animations"
import CardProject from "./CardProject"

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-center mb-2 text-gray-100 tracking-tight">
            Proyectos
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-md mx-auto text-sm md:text-base">
            Una selección de mis trabajos más recientes e iniciativas de código abierto.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project) => (
              <CardProject
                key={project.title}
                image={project.image}
                images={project.images}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                links={project.links}
              />
            ))}
            
            {/* Próximamente Card */}
            <motion.div
              variants={fadeInGroup}
              className="flex flex-col h-full bg-gray-900/20 backdrop-blur-md border border-gray-800/50 border-dashed rounded-2xl p-6 md:p-8 hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.03)] hover:-translate-y-1 transition-all duration-300 group relative justify-between overflow-hidden min-h-[350px]"
            >
              <div className="flex-grow flex flex-col justify-center items-center text-center space-y-6 py-8">
                <div className="relative flex items-center justify-center">
                  {/* Outer spinning dash ring */}
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-500/30 animate-[spin_10s_linear_infinite]" />
                  {/* Inner glowing dot */}
                  <div className="absolute w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 animate-pulse flex items-center justify-center">
                    <span className="text-emerald-400 text-xs font-bold font-montserrat">...</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-montserrat font-bold text-lg text-gray-100 group-hover:text-emerald-300 transition-colors duration-200">
                    Próximamente
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
                    Estoy trabajando en nuevos proyectos que pronto estarán disponibles aquí. ¡Mantente atento!
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3 w-full mt-auto">
                <button
                  className="flex-1 justify-center items-center flex py-2.5 px-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/60 font-semibold rounded-xl cursor-not-allowed"
                  disabled
                >
                  Próximamente
                </button>
                <button
                  className="flex-1 justify-center items-center flex py-2.5 px-4 bg-gray-800/20 border border-gray-800/40 text-gray-500/60 font-semibold rounded-xl cursor-not-allowed"
                  disabled
                >
                  Código
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}