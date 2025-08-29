import { motion } from "motion/react";
import { timeline } from "../data/Data";
import { fadeInGroup, staggerContainer } from "../utils/Animations";

export default function Education() {

  return (
    <section id="education" className="py-16 px-4 my-8 bg-gray-900/50">
      <div className="container mx-auto w-full max-w-4xl">
        <h2 className="font-montserrat font-bold text-3xl text-center mb-12 text-gray-100">
          Formación Profesional
        </h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {timeline.map((item, index) => (
            <motion.div variants={fadeInGroup} key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                {index < timeline.length - 1 && <div className="w-0.5 h-16 bg-gray-700 mt-4"></div>}
              </div>
              <div className="flex-1 bg-gray-800 border-gray-700 p-4 rounded-md">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="border-gray-600 text-gray-300">
                      {item.period}
                    </span>
                  </div>
                  <p className="font-montserrat font-bold text-gray-100">{item.title}</p>
                  <p className="font-semibold text-emerald-400">{item.subtitle}</p>
                </div>
                <div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}