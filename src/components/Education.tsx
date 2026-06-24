import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import { timeline } from "../data/Data";
import { fadeInGroup, staggerContainer } from "../utils/Animations";

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="font-montserrat font-black text-3xl md:text-4xl text-center mb-2 text-gray-100 tracking-tight">
          Formación Profesional
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-md mx-auto text-sm md:text-base">
          Mi camino de aprendizaje académico y especialización tecnológica.
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
            {timeline.map((item, index) => (
              <motion.div
                variants={fadeInGroup}
                key={index}
                className="relative pl-10 md:pl-20 group"
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-8 top-4 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-950 border-2 border-emerald-500/40 group-hover:border-emerald-400 flex items-center justify-center text-emerald-400 z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <span className="text-sm md:text-base flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-5 md:[&>svg]:h-5 text-emerald-400">
                      {item.icon}
                    </span>
                  </div>
                </div>

                {/* Card Container */}
                <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800/80 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Subtle inner top-right glow */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-300" />
                  
                  <div>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 pb-4 border-b border-gray-800/60">
                      <div>
                        <h3 className="font-montserrat font-bold text-xl md:text-2xl text-gray-100 mb-1 group-hover:text-emerald-300/90 transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-semibold text-emerald-400 text-base">{item.subtitle}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-400 self-start md:self-auto">
                        <Calendar className="w-4 h-4 text-emerald-500/80" />
                        <span className="font-medium text-gray-300">{item.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.description}</p>
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