import { useState, useEffect } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { createPortal } from "react-dom";

const navLinks = [
  { href: "#about", id: "about", label: "Sobre mí" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#projects", id: "projects", label: "Proyectos" },
  { href: "#experience", id: "experience", label: "Experiencia" },
  { href: "#education", id: "education", label: "Formación" },
  { href: "#contact", id: "contact", label: "Contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const closeMobile = () => setMobileOpen(false);

  // ScrollSpy: Detect which section is currently active in the viewport
  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "experience", "education", "contact"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 450);

      // If scrolled near page bottom, highlight contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 180;
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. Global Reading Progress Bar fixed at top of screen */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-300 origin-left z-[100] shadow-[0_0_12px_rgba(16,185,129,0.7)]"
        style={{ scaleX }}
      />

      {/* 2. Header Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-gray-800/80 bg-gray-950/85 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]"
            : "border-b border-gray-800/40 bg-gray-950/60 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand Mark with 360 rotation on hover */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs tracking-tight transition-all duration-700 group-hover:rotate-[360deg] group-hover:bg-emerald-500 group-hover:text-gray-950 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              MC
            </div>
            <span className="font-bold text-sm sm:text-base text-gray-100 group-hover:text-white transition-colors">
              Mauricio Chambi
            </span>
          </a>

          {/* Desktop Nav: Floating Pill with Active Magnetic Indicator */}
          <nav className="hidden md:flex items-center p-1 rounded-full bg-gray-900/60 border border-gray-800/80 backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors duration-200 select-none ${
                    isActive
                      ? "text-gray-950 font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {/* Active sliding indicator pill */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 transition-all duration-200 relative z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* 3. Mobile Menu — Rendered via Portal */}
      {createPortal(
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-gray-950/70 backdrop-blur-sm z-[55] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMobile}
              />

              {/* Panel */}
              <motion.nav
                className="fixed top-16 left-0 right-0 z-[56] md:hidden bg-gray-950/98 backdrop-blur-2xl border-b border-gray-800 shadow-2xl shadow-emerald-500/5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.id;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={closeMobile}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/5"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        )}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* 4. Floating "Back to Top" Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gray-900/90 border border-gray-800 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300 backdrop-blur-md cursor-pointer group"
            title="Volver arriba"
            aria-label="Volver al inicio de la página"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
