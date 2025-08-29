import { Calendar, Code, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { fadeInGroup, staggerContainer } from "../utils/Animations";

export default function AboutMe() {
  return (
    <motion.section
      className="py-16 px-4 bg-gray-900/50 "
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      id="about"
      viewport={{ once: true, amount: 0.5 }} // aparece al 20% en pantalla
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.8 },
            },
          }}
        >
          Sobre mí
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.p
              className="text-lg leading-relaxed mb-6 text-gray-300"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.8 },
                },
              }}
            >
              Soy Análista en Sistemas con pasión por el desarrollo web y la tecnología. Me especializo
              en crear aplicaciones modernas utilizando React, Next.js, Java, Spring Boot y tecnologías del ecosistema JavaScript.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed mb-6 text-gray-300"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.8 },
                },
              }}
            >
              Mi enfoque se centra en escribir código limpio, crear interfaces intuitivas y resolver problemas
              complejos con soluciones elegantes y eficientes. Me encanta mantenerme actualizado con las últimas tendencias en desarrollo web.
            </motion.p>

            <div className="flex flex-wrap gap-8 justify-center items-center ">
              <motion.a
                href="https://github.com/De1t4"
                target="_blank"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                variants={fadeInGroup}
                transition={{ duration: 0.6 }}
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mauriciochambi/"
                target="_blank"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                variants={fadeInGroup}
                transition={{ duration: 0.6 }}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
            </div>
          </div>
          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-3"
              variants={fadeInGroup}
            >
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-300">Argentina, Buenos Aires</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              variants={fadeInGroup}
            >
              <Calendar className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-300">Disponible para proyectos</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              variants={fadeInGroup}
            >
              <Code className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-300">Desarrollador Full Stack</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              variants={fadeInGroup}
            >
              <Mail className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-300">mauriciochambicaceres@gmail.com</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>

  )
}