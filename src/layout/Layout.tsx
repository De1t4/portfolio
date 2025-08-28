import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="scroll-smooth md:scroll-auto min-h-screen bg-gray-950 text-gray-100">
      <Header />
      <div className="py-12 px-4 max-w-7xl mx-auto">
        {children}
      </div>
      <Footer />
    </main>
  )
}