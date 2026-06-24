import { ExternalLink, Github } from "lucide-react"
import { motion } from "motion/react"
import { fadeInGroup } from "../utils/Animations"

interface CardProjectProps {
  image: string, title: string, description: string, technologies: string[], links: { demo: string, github: string }
}

export default function CardProject({ image, title, description, technologies, links }: CardProjectProps) {
  return (
    <motion.div
      variants={fadeInGroup}
      className="flex flex-col h-full bg-gray-900/40 backdrop-blur-md border border-gray-800/80 rounded-2xl overflow-hidden hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)] hover:-translate-y-2 transition-all duration-300 group"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent pointer-events-none" />
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div className="mb-6 space-y-3">
          <h3 className="font-montserrat font-bold text-lg text-gray-100 group-hover:text-emerald-300 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, indexTech) => (
              <span
                key={indexTech}
                className="text-xs px-2.5 py-1.5 rounded-full bg-gray-800/40 border border-gray-850 text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/20 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              className="flex-1 justify-center items-center flex py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] text-gray-950 font-bold rounded-xl transition-all duration-200"
              type="button"
              onClick={() => window.open(links.demo, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </button>
            <button
              className="flex-1 justify-center items-center flex py-2.5 px-4 bg-gray-800/60 border border-gray-700/80 hover:border-emerald-500/30 hover:text-emerald-400 text-gray-300 font-bold rounded-xl transition-all duration-200"
              type="button"
              onClick={() => window.open(links.github, "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              Código
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}