import { Calendar, Code, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { fadeInGroup, staggerContainer } from "../utils/Animations";

export default function AboutMe() {
  return (
    <motion.section
      className="py-20 px-4 relative overflow-hidden bg-transparent"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      id="about"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Soft background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2
          className="font-montserrat font-black text-3xl md:text-4xl text-center mb-12 text-gray-100 tracking-tight"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            },
          }}
        >
          Sobre mí
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <motion.p
              className="text-base md:text-lg leading-relaxed mb-6 text-gray-300"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.8 },
                },
              }}
            >
              Soy Técnico Superior en Análisis de Sistemas y estudiante de Lic.
              en Ciencia de Datos, especializado en el ecosistema React, Next.js
              y TypeScript. Cuento con experiencia liderando equipos frontend,
              diseñando módulos críticos y reduciendo un 30% los errores en
              producción mediante estandarización de código y buenas prácticas.
              <br />
              Me encanta mantenerme actualizado con las últimas tendencias en
              desarrollo web.
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="https://github.com/De1t4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900/40 border border-gray-800 text-gray-300 hover:border-emerald-500/30 hover:text-emerald-400 hover:bg-emerald-500/5 hover:shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all duration-200 font-semibold text-sm"
                variants={fadeInGroup}
                transition={{ duration: 0.6 }}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mauriciochambi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900/40 border border-gray-800 text-gray-300 hover:border-emerald-500/30 hover:text-emerald-400 hover:bg-emerald-500/5 hover:shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all duration-200 font-semibold text-sm"
                variants={fadeInGroup}
                transition={{ duration: 0.6 }}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>

          <motion.div
            className="bg-gray-900/40 backdrop-blur-md border border-gray-800/80 rounded-2xl p-6 md:p-8 space-y-4 hover:border-emerald-500/20 hover:shadow-[0_0_35px_rgba(16,185,129,0.04)] transition-all duration-300 relative overflow-hidden"
            variants={fadeInGroup}
          >
            {/* Subtle inner top-right glow */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl transition-all duration-300" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-emerald-500/5 transition-colors duration-200 group">
                <MapPin className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 text-sm md:text-base font-medium">
                  Argentina, Buenos Aires
                </span>
              </div>
              <div className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-emerald-500/5 transition-colors duration-200 group">
                <Calendar className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 text-sm md:text-base font-medium">
                  Disponible para proyectos
                </span>
              </div>
              <div className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-emerald-500/5 transition-colors duration-200 group">
                <Code className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 text-sm md:text-base font-medium">
                  Desarrollador Full Stack
                </span>
              </div>
              <div className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-emerald-500/5 transition-colors duration-200 group">
                <Mail className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 text-sm md:text-base font-medium break-all">
                  mauriciochambicaceres@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
