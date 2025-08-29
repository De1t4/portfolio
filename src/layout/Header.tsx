export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-gray-950 font-bold">
            MC
          </div>
          <span className="font-montserrat font-bold text-lg text-gray-100">Mauricio Chambi</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">
            Sobre mí
          </a>
          <a href="#experience" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">
            Experiencia
          </a>
          <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">
            Proyectos
          </a>
          <a href="#education" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">
            Educación
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}