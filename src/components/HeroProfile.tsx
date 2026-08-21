import copy from "copy-to-clipboard";
import { FileText, Mail } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export default function HeroProfile() {
  const onCopyMail = () => {
    copy("mauriciochambicaceres@gmail.com");
    toast.success("Email Copiado");
  };
  return (
    <>
      <section className="relative px-4 h-[calc(95dvh-64px)] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(16,185,129,0.12), transparent 70%)",
              "radial-gradient(circle at 100% 0%, rgba(16,185,129,0.12), transparent 70%)",
              "radial-gradient(circle at 100% 100%, rgba(16,185,129,0.12), transparent 70%)",
              "radial-gradient(circle at 0% 100%, rgba(16,185,129,0.12), transparent 70%)",
              "radial-gradient(circle at 0% 0%, rgba(16,185,129,0.12), transparent 70%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="container mx-auto max-w-4xl text-center ">
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01] as [number, number, number, number],
              }}
              className="relative w-40 h-40 mx-auto mb-6 group cursor-pointer"
            >
              {/* Outer soft glowing ring */}
              <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <img
                src="./me.jpg"
                alt="Mauricio Chambi"
                className="w-40 h-40 rounded-full object-cover border-4 border-emerald-500/20 relative z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]"
              />
            </motion.div>

            <motion.h1
              className="font-montserrat font-black text-4xl md:text-6xl mb-4 text-gray-100 tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hola, soy{" "}
              <span className="text-emerald-400">Mauricio Chambi</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Desarrollador Frontend con experiencia liderando equipos y
              construyendo productos reales para clientes{" "}
              {/* <span className="text-gray-300 font-medium">React, Next.js</span> */}
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
                className="w-48 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] text-gray-950 transition-all duration-200 cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="w-5 h-5" />
                <span>Contáctame</span>
              </motion.button>

              <motion.button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1U9GyE5L6QR6Q3zQ_Q4_Jby9t-jGfLypV/view?usp=sharing",
                    "_blank",
                  )
                }
                className="w-48 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-gray-900/40 border border-gray-800 hover:border-emerald-500/30 hover:text-emerald-400 text-gray-300 transition-all duration-200 cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <FileText className="w-5 h-5" />
                <span>Ver CV</span>
              </motion.button>
            </motion.div>
            {/* <div className="w-full flex justify-center mt-4">
              <motion.div
                className="absolute bottom-8  m-auto flex flex-col items-center gap-2 opacity-0 cursor-pointer pointer-events-auto"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ opacity: 1 }}
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 font-montserrat">
                  Deslizar
                </span>
                <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-1.5">
                  <motion.div
                    className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                    animate={{
                      y: [0, 12, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
