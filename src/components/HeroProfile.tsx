import copy from "copy-to-clipboard";
import { ArrowDown, Copy, Download } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export default function HeroProfile() {
  const onCopyMail = () => {
    copy("mauriciochambicaceres@gmail.com");
    toast.success("Email copiado al portapapeles", {
      description: "mauriciochambicaceres@gmail.com",
    });
  };

  const cvLink =
    "https://drive.google.com/file/d/1U9GyE5L6QR6Q3zQ_Q4_Jby9t-jGfLypV/view?usp=sharing";

  return (
    <section className="relative min-h-[92svh] flex flex-col justify-center items-center px-4 overflow-hidden pt-12 pb-16">
      {/* Background ambient lighting */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 15% 20%, rgba(16,185,129,0.08), transparent 50%)",
            "radial-gradient(circle at 85% 30%, rgba(16,185,129,0.08), transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(16,185,129,0.08), transparent 50%)",
            "radial-gradient(circle at 15% 20%, rgba(16,185,129,0.08), transparent 50%)",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Ghost Outline Typography behind the hero */}
      <p
        className="hero-ghost select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black tracking-tighter text-stroke-ghost text-[18vw] leading-none z-0 opacity-40 uppercase"
        aria-hidden="true"
      >
        MAURICIO
      </p>

      <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
        {/* Editorial Photo Frame with Depth & Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mb-8 group"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-2xl opacity-50 group-hover:opacity-100 group-hover:bg-emerald-500/20 transition-all duration-700" />

          {/* Photo Container */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-1.5 bg-gradient-to-b from-gray-700/40 via-gray-850/60 to-gray-900/80 border border-gray-700/60 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="w-full h-full rounded-[20px] overflow-hidden relative">
              <img
                src="./me.jpg"
                alt="Mauricio Chambi"
                className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Badge overlay on bottom */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gray-900/95 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] tracking-wider uppercase whitespace-nowrap shadow-lg flex items-center gap-1.5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>MC · {new Date().getFullYear()}</span>
            </div>
          </div>
        </motion.div>

        {/* Dual Typography Headline */}
        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] mb-4"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="block">Frontend</span>
          <span className="block mt-1">
            <em className="font-serif italic font-normal text-emerald-400 drop-shadow-[0_0_35px_rgba(16,185,129,0.3)]">
              Developer<span className="text-white">.</span>
            </em>
          </span>
        </motion.h1>

        {/* Roles line in Monospace */}
        <motion.p
          className="font-mono text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-6 max-w-xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <span className="text-emerald-400">Analista de Sistemas</span>
          <span className="mx-2 text-gray-600">/</span>
          <span>Frontend Lead</span>
          <span className="mx-2 text-gray-600">/</span>
          <span>Ciencia de Datos</span>
        </motion.p>

        {/* CTAs Group */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          {/* Primary CTA: Explore work */}
          <a
            href="#projects"
            className="group flex items-center gap-2 py-3.5 px-6 rounded-full font-semibold bg-emerald-500 hover:bg-emerald-400 text-gray-950 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 text-sm"
          >
            <span>Explorar Proyectos</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          {/* Secondary CTA: Resume */}
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 py-3.5 px-6 rounded-full font-semibold bg-gray-900/80 border border-gray-700/80 hover:border-emerald-500/40 hover:bg-emerald-500/5 text-gray-200 hover:text-emerald-300 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 text-sm"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Descargar CV</span>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 group-hover:text-emerald-300">
              PDF
            </span>
          </a>

          {/* Copy Email CTA */}
          <button
            type="button"
            onClick={onCopyMail}
            className="group flex items-center gap-2 py-3.5 px-5 rounded-full font-semibold bg-gray-900/60 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white transition-all duration-300 text-sm cursor-pointer"
            title="Copiar email"
          >
            <Copy className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors" />
            <span>Copiar Email</span>
          </button>
        </motion.div>

        {/* Scroll indicator with vertical dripping line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-gray-500 hover:text-emerald-400 transition-colors group cursor-pointer"
            aria-label="Ir a la sección Sobre mí"
          >
            <span className="group-hover:tracking-[0.25em] transition-all duration-300">
              Deslizar
            </span>
            <div className="relative w-px h-10 bg-gray-800 overflow-hidden rounded-full">
              <div className="absolute left-0 w-full h-1/2 bg-emerald-400 animate-drip" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
