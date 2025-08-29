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
      className="overflow-hidden hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full r hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="mb-4 space-y-2">
          <div className="font-montserrat font-bold text-gray-100">{title}</div>
          <div className="line-clamp-4 text-gray-400">{description}</div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, indexTech) => (
              <span
                key={indexTech}
                className="text-xs cursor-pointer p-2 rounded-sm bg-gray-700 text-gray-300 hover:bg-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="flex-1 justify-center items-center flex p-2 bg-emerald-500 rounded-md hover:bg-emerald-600 text-gray-950"
              type="button"
              onClick={() => window.open(links.demo, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </button>
            <button
              className="flex-1 justify-center items-center flex p-2 border-collapse rounded-md border  border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-gray-100 bg-transparent"
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