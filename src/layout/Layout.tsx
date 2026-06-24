import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import InteractiveBackground from "../components/InteractiveBackground";
import Preloader from "../components/Preloader";
import { ReactLenis } from "lenis/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <main className="scroll-smooth md:scroll-auto min-h-screen bg-gray-950 text-gray-100 relative">
        <InteractiveBackground className="fixed inset-0 z-0 pointer-events-none" />
        <div className="relative z-10">
          <Header />
          <div className="py-12 px-4 max-w-7xl mx-auto">
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </ReactLenis>
  )
}