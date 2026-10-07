import { motion } from "motion/react";
import { staggerContainer } from "../utils/Animations";
import FormContact from "../form/FormContact";

export default function ContactMe() {
  return (
    <motion.section
      className="py-20 px-4 relative overflow-hidden bg-transparent"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      id="contact"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Central soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-2xl relative">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
            06 / CONEXIÓN
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-100 tracking-tight">
            Hablemos de <em className="font-serif italic font-normal text-emerald-400">proyectos.</em>
          </h2>
          <p className="text-center text-gray-400 mt-3 text-sm md:text-base font-light">
            ¿Tienes un producto o desafío en mente? Conversemos sobre cómo llevarlo a producción.
          </p>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="bg-gray-900/60 backdrop-blur-md border border-gray-800/80 rounded-2xl hover:border-emerald-500/20 hover:shadow-[0_0_40px_rgba(16,185,129,0.04)] transition-all duration-300"
        >
          <FormContact />
        </motion.div>
      </div>
    </motion.section>
  );
}
