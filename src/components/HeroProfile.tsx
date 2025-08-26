import copy from "copy-to-clipboard";
import { FileText, Mail } from "lucide-react";
import { toast } from "sonner";

export default function HeroProfile() {
  const onCopyMail = () => {
    copy('mauriciochambicaceres@gmail.com')
    toast.success('Email Copiado')
  }
  return (
    <section className=" px-4 h-[calc(100dvh-64px)] flex items-center">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <img
            src="./me.jpg"
            alt="Mauricio Chambi"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-emerald-500/20"
          />
          <h1 className="font-montserrat font-black text-4xl md:text-6xl mb-4 text-gray-100">
            Un gusto. Soy <span className="text-emerald-400">Mauricio Chambi</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Analista en Sistemas y Desarrollador Web especializado en crear experiencias digitales modernas y
            funcionales
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={onCopyMail} className="w-48 flex items-center justify-center gap-2 p-2 rounded-lg font-semibold bg-emerald-500 hover:bg-emerald-600 text-gray-950">
              <span>
                <Mail />
              </span>
              Contáctame
            </button>
            <button className="w-48 flex items-center justify-center gap-2 p-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-gray-100 bg-transparent"
            >
              <span>
                <FileText />
              </span>
              Ver CV
            </button>
          </div>
        </div>
      </div>
      {/* <iframe src="https://drive.google.com/file/d/1U9GyE5L6QR6Q3zQ_Q4_Jby9t-jGfLypV/view" className=" w-60 h-80"></iframe> */}

    </section>
  )
}