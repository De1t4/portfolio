export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-gray-400">© {year} Mauricio Chambi.</p>
      </div>
    </footer>
  )
}