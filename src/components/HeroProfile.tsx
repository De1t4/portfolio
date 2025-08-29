import copy from "copy-to-clipboard";
import { FileText, Mail } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export default function HeroProfile() {
  const onCopyMail = () => {
    copy('mauriciochambicaceres@gmail.com')
    toast.success('Email Copiado')
  }
  return (
    <>
      <section className="px-4 h-[calc(100dvh-64px)] flex items-center">
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(16,185,129,0.15), transparent 70%)",
              "radial-gradient(circle at 100% 0%, rgba(16,185,129,0.15), transparent 70%)",
              "radial-gradient(circle at 100% 100%, rgba(16,185,129,0.15), transparent 70%)",
              "radial-gradient(circle at 0% 100%, rgba(16,185,129,0.15), transparent 70%)",
              "radial-gradient(circle at 0% 0%, rgba(16,185,129,0.15), transparent 70%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <img
                src="./me.jpg"
                alt="Mauricio Chambi"
                className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-emerald-500/20"
              />
            </motion.div>
            <motion.h1
              className="font-montserrat font-black text-4xl md:text-6xl mb-4 text-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Un gusto. Soy{" "}
              <span className="text-emerald-400">Mauricio Chambi</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Analista en Sistemas y Desarrollador Web especializado en crear
              experiencias digitales modernas y funcionales
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 items-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.button
                onClick={onCopyMail}
                className="w-48 flex items-center justify-center gap-2 p-2 rounded-lg font-semibold bg-emerald-500 hover:bg-emerald-600 text-gray-950"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Mail />
                Contáctame
              </motion.button>

              <motion.button
                onClick={() => window.open("https://drive.google.com/file/d/1U9GyE5L6QR6Q3zQ_Q4_Jby9t-jGfLypV/view?usp=sharing", "_blank")}
                className="w-48 flex items-center justify-center gap-2 p-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-gray-100 bg-transparent"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <FileText />
                Ver CV
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}