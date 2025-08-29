import { Building, Calendar, MapPin, Users } from "lucide-react";
import { experiences } from "../data/Data";
import { motion } from "motion/react";
import { fadeInGroup, staggerContainer } from "../utils/Animations";

export default function Experience() {


  return (
    <section id="experience" className="py-16 ">
      <div className="container mx-auto w-full">
        <h2 className="font-montserrat font-bold text-3xl text-center mb-4 text-gray-100">Experiencia Profesional</h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              variants={fadeInGroup}
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
                  <p className="font-semibold text-gray-100 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    Logros principales:
                  </p>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  )
}