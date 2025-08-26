import { Calendar, Code, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-montserrat font-bold text-3xl text-center mb-12 text-gray-100">Sobre mí</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Soy Análista en Sistemas con pasión por el desarrollo web y la tecnología. Me especializo
              en crear aplicaciones modernas utilizando React, Next.js y tecnologías del ecosistema JavaScript.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Mi enfoque se centra en escribir código limpio, crear interfaces intuitivas y resolver problemas
              complejos con soluciones elegantes y eficientes. Me encanta aprender nuevas tecnologías y
              mantenerme actualizado con las últimas tendencias en desarrollo web.
            </p>
            <div className="flex flex-wrap gap-8 justify-center items-center ">
              <a
                href="#"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-300">Argentina, Buenos Aires</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-300">Disponible para proyectos</span>
            </div>
            <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-300">Desarrollador Full Stack</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-300">mauriciochambicaceres@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}