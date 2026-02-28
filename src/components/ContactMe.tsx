import { motion } from "motion/react";
import { staggerContainer } from "../utils/Animations";
import FormContact from "../form/FormContact";

export default function ContactMe() {


  return (
    <motion.section
      className="py-16 px-4 bg-gray-900/50 "
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      id="contact"
      viewport={{ once: true, amount: 0.5 }} // aparece al 20% en pantalla
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-montserrat font-bold text-3xl text-center mb-4 text-gray-100">Contáctame</h2>
        <p className="text-center text-gray-400 mb-12">
          ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él
        </p>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.8 },
            },
          }}
          className="bg-gray-800 border-gray-700 rounded-md"
        >
          <FormContact />
        </motion.div>
      </div>
    </motion.section>

  )
}

