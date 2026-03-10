import Footer from "./Footer";
import Header from "./Header";
import InteractiveBackground from "../components/InteractiveBackground";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
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
  )
}