import copy from 'copy-to-clipboard'
import React, { useContext } from 'react'
import { DarkModeContext } from '../context/ContextDark'
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from 'react-icons/fa';

export default function Home() {
	const copyMail = () =>{
		copy('mauriciochambicaceres@gmail.com')
		alert("Mail copiado")
	}
	const {darkMode} = useContext(DarkModeContext)

	const links = [
  {
    href: "https://github.com/De1t4",
    iconClass: <FaGithub className={`text-4xl w-auto h-auto cursor-pointer transition-all duration-300 hover:scale-110 text-[#1a1a1a] ${darkMode ? "bg-zinc-900 text-zinc-100": ""}`}></FaGithub>,
    text: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/mauricio-chambi-7a90b724a/",
    iconClass: <FaLinkedin className={`text-4xl w-auto h-auto cursor-pointer transition-all duration-300 hover:scale-110 text-[#1a1a1a] ${darkMode ? "bg-zinc-900 text-zinc-100": ""}`}></FaLinkedin>,
    text: "LinkedIn",
  },
  {
    href: "https://drive.google.com/file/d/1LPF4Dk7zvbyxj1oHJfbJgfqk6aV1hcRn/view",
    iconClass: <FaFileAlt className={`text-4xl w-auto h-auto cursor-pointer transition-all duration-300 hover:scale-110 text-[#1a1a1a] ${darkMode ? "bg-zinc-900 text-zinc-100": ""}`}></FaFileAlt>,
    text: "Currículum",
  },
];
  return (
    <>
		<main className={`min-h-screen  ${darkMode ? "bg-zinc-900": ""}`}>
				<section className={`flex w-[50rem] m-auto flex-col max-lg:w-auto ${darkMode ? "bg-zinc-900 ": ""}`}>
					<div className={`flex items-center gap-8 border-b-2 p-8 max-md:flex-col ${darkMode ? "bg-zinc-900 border-zinc-500": ""}`}>
							<img src={"img.png"} alt="mi foto" className=' w-[20rem] rounded-full h-[20rem]'/>
							<h1 className={`text-4xl leading-[3rem] max-lg:text-center ${darkMode ? "bg-zinc-900 text-zinc-100": ""}`}>Un gusto. Soy<span className={`text-[#485caa] font-semibold cursor-pointer hover:brightness-110 ${darkMode ? "bg-zinc-900": ""}`}> Mauricio Chambi</span>. Estudiante de Análisis en Sistemas</h1>
					</div>
					<h1 className={`text-3xl font-bold text-[#485caa] text-center py-4 ${darkMode ? "bg-zinc-900": ""}`}>Contacto</h1>
					<div className={`flex justify-around mb-8 ${darkMode ? "bg-zinc-900": ""}`}>
						<FaEnvelope className={`text-4xl w-auto h-auto cursor-pointer transition-all duration-300 hover:scale-110 text-[#1a1a1a] ${darkMode ? "bg-zinc-900 text-zinc-100": ""}`} onClick={copyMail}></FaEnvelope>
						{links.map(({href, iconClass, text})=>(
							<a href={href} target='_blank' key={text} className={`${darkMode ? "bg-zinc-900": ""}`}>
								{iconClass}
							</a>
						))
						}
					</div>
				</section>
		</main>
    </>
  )
}
