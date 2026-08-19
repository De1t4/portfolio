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
        <h2 className="font-montserrat font-black text-3xl md:text-4xl text-center mb-2 text-gray-100 tracking-tight">
          Contáctame
        </h2>
        <p className="text-center text-gray-400 mb-12 text-sm md:text-base">
          ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y cómo
          puedo ayudarte.
        </p>
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
