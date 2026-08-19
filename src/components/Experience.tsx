import {
  Calendar,
  MapPin,
  Briefcase,
  Code2,
  Terminal,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { experiences } from "../data/Data";
import { motion } from "motion/react";
import { fadeInGroup, staggerContainer } from "../utils/Animations";

export default function Experience() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Briefcase className="w-5 h-5" />;
      case 1:
        return <Code2 className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative ">
        <h2 className="font-montserrat font-black text-3xl md:text-4xl text-center mb-2 text-gray-100 tracking-tight">
          Experiencia Profesional
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-md mx-auto text-sm md:text-base">
          Mi trayectoria en el desarrollo de software y colaboración con equipos
          de tecnología.
        </p>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/20 to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                variants={fadeInGroup}
                key={index}
                className="relative pl-10 md:pl-20 group"
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-8 top-4 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-950 border-2 border-emerald-500/40 group-hover:border-emerald-400 flex items-center justify-center text-emerald-400 z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    {getIcon(index)}
                  </div>
                </div>

                {/* Card Container */}
                <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800/80 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                  {/* Subtle inner top-right glow */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-300" />

                  <div>
                    {/* Header: Position & Badges */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 border-b border-gray-800/60 pb-6">
                      <div>
                        <h3 className="font-montserrat font-bold text-xl md:text-2xl text-gray-100 mb-2 leading-tight group-hover:text-emerald-300/90 transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-lg text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1.5 transition-all"
                          >
                            <span>{exp.company}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>

                          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gray-800/80 text-gray-300 border border-gray-700/60">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Period & Location */}
                      <div className="flex flex-col items-start md:items-end gap-1.5 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-emerald-500/80" />
                          <span className="font-medium text-gray-300">
                            {exp.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-emerald-500/80" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed"
                          >
                            <ChevronRight className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-3">
                        Tecnologías utilizadas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-3 py-1.5 rounded-full bg-gray-800/40 border border-gray-800 text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/20 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
