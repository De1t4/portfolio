import { BookMarked, ChartColumnIncreasing, MonitorCog } from "lucide-react"

export default function Education() {
  const timeline = [
    {
      period: "2025 Aug - Presente",
      title: "Ciencia de Datos",
      subtitle: "Estudio actual",
      description:
        "Inicié mis estudios en la carrera de Licenciatura en Ciencia de Datos, con el objetivo de especializarme mis habilidades en programación y estadística.",
      icon: <ChartColumnIncreasing />,
    },
    {
      period: "2023 Mar - Presente",
      title: "Informática Aplicada",
      subtitle: "Estudio actual",
      description:
        "Empecé mi segunda carrera en Técnico en Informática Aplicada, con el objetivo de profundizar mis conocimientos en programación y desarrollo de software.",
      icon: <MonitorCog  />,
    },
    {
      period: "2022 Mar - 2024 Dec",
      title: "Análisis en Sistemas",
      subtitle: "Inicio de carrera",
      description:
        "Inicié mi primera carrera en Técnico en Análisis de Sistemas, con muchas dudas pero con el objetivo de explorar el mundo de la tecnología y la programación.",
      icon: <BookMarked />,
    },
  ]


  return (
    <section id="education" className="py-16 px-4 my-8 bg-gray-900/50">
      <div className="container mx-auto w-full max-w-4xl">
        <h2 className="font-montserrat font-bold text-3xl text-center mb-12 text-gray-100">
          Formación Profesional
        </h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                {index < timeline.length - 1 && <div className="w-0.5 h-16 bg-gray-700 mt-4"></div>}
              </div>
              <div className="flex-1 bg-gray-800 border-gray-700 p-4 rounded-md">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="border-gray-600 text-gray-300">
                      {item.period}
                    </span>
                  </div>
                  <p className="font-montserrat font-bold text-gray-100">{item.title}</p>
                  <p className="font-semibold text-emerald-400">{item.subtitle}</p>
                </div>
                <div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}