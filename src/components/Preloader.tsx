import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const name = "MAURICIO";
  const letters = Array.from(name);
  const totalColumns = 10;
  const columns = Array.from({ length: totalColumns });

  // State to trigger exit animation of columns and text
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    // Stage 1: Entrance of text is automatic on mount.
    // Stage 2: Wait for text entrance (0.8s) + hold (1.0s) = 1.8s, then start exit.
    const exitTimer = setTimeout(() => {
      setStartExit(true);
    }, 1800);

    // Stage 3: Wait for exit animation to complete and call onComplete to unmount.
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Framer Motion variants for letters
  const letterVariants = {
    initial: { y: "100%" },
    animate: (i: number) => ({
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.45,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], // Custom easeOutCubic
      },
    }),
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number], // Custom easeOutExpo
      },
    },
  };

  // Framer Motion variants for columns
  const columnVariants = {
    initial: { y: 0 },
    exit: (i: number) => ({
      y: "100%",
      transition: {
        delay: i * 0.08,
        duration: 0.65,
        ease: [0.77, 0, 0.175, 1] as [number, number, number, number], // Custom easeInOutQuart
      },
    }),
  };

  return (
    <div className="fixed inset-0 z-[9999] flex select-none pointer-events-none">
      {/* 10 Vertical Background Columns */}
      <div className="absolute inset-0 flex w-full h-full pointer-events-auto">
        {columns.map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={columnVariants}
            initial="initial"
            animate={startExit ? "exit" : "initial"}
            className="w-[10%] h-full bg-gray-950 border-r border-black/5 last:border-none"
          />
        ))}
      </div>

      {/* Centered Name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] flex justify-center items-center pointer-events-none overflow-hidden py-4">
        <div className="flex">
          {letters.map((char, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden h-[14vw] sm:h-[9vw] lg:h-[110px]"
            >
              <motion.span
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate={startExit ? "exit" : "animate"}
                className="inline-block font-montserrat font-black text-[12vw] sm:text-[8vw] lg:text-[100px] leading-none tracking-widest text-[#dedede] uppercase"
              >
                {char}
              </motion.span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
