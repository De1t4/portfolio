import copy from 'copy-to-clipboard'
import React from 'react'
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from 'react-icons/fa';

export default function Home() {
	const copyMail = () =>{
		copy('mauriciochambicaceres@gmail.com')
		alert("Mail copiado")
	}

	const links = [
  {
    href: "https://github.com/De1t4",
    iconClass: <FaGithub className={`text-4xl w-auto h-auto cursor-pointer transition-all duration-300 hover:scale-110 text-[#1a1a1a] dark:bg-zinc-900 dark:text-zinc-100`}></FaGithub>,
    text: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/mauricio-chambi-7a90b724a/",
    iconClass: <FaLinkedin className={`text-4xl w-auto h-auto cursor-pointer transition-all duration-300 hover:scale-110 text-[#1a1a1a] dark:bg-zinc-900 dark:text-zinc-100`}></FaLinkedin>,
    text: "LinkedIn",
  },
  {
    href: "https://drive.google.com/file/d/1LPF4Dk7zvbyxj1oHJfbJgfqk6aV1hcRn/view",
    iconClass: <FaFileAlt className={`text-4xl w-auto h-auto cursor-pointer transition-all duration-300 hover:scale-110 text-[#1a1a1a] dark:bg-zinc-900 dark:text-zinc-100`}></FaFileAlt>,
    text: "Currículum",
  },
];
  return (
    <>
		<main className={`min-h-screen  dark:bg-zinc-900`}>
				<section className={`flex w-[50rem] m-auto flex-col max-lg:w-auto dark:bg-zinc-900 `}>
					<div className={`flex items-center gap-8 border-b-2 p-8 max-md:flex-col dark:bg-zinc-900 dark:border-zinc-500`}>
							<img src={"img.png"} alt="mi foto" className=' w-[20rem] rounded-full h-[20rem] duration-300 transition-all animate-fade-in'/>
							<h1 className={`text-4xl leading-[3rem] max-lg:text-center text-[#213547] dark:bg-zinc-900 dark:text-zinc-100`}>Un gusto. Soy<span className={`text-[#485caa] font-semibold cursor-pointer hover:brightness-110 dark:bg-zinc-900`}> Mauricio Chambi</span>. Estudiante de Análisis en Sistemas</h1>
					</div>
					<h1 className={`text-3xl  font-bold text-[#485caa] text-center py-4 dark:bg-zinc-900`}>Contacto</h1>
					<div className={`flex justify-around mb-8 dark:bg-zinc-900`}>
						<span className='flex flex-col items-center dark:bg-zinc-900 text-zinc-100'>
							<FaEnvelope className={`text-4xl w-auto h-auto cursor-pointer  transition-all duration-300 hover:scale-110 text-[#1a1a1a] dark:bg-zinc-900 dark:text-zinc-100`} onClick={copyMail}></FaEnvelope>
							<p className='dark:bg-zinc-900 text-[#213547] dark:text-zinc-100'>Email</p>
						</span>
						{links.map(({href, iconClass, text})=>(
							<span className='flex flex-col items-center dark:bg-zinc-900 text-zinc-100'>
								<a href={href} target='_blank' key={text} className={`dark:bg-zinc-900 text-[#213547]`}>
									{iconClass}
								</a>
								<p className='dark:bg-zinc-900 dark:text-zinc-100 text-[#213547]'>{text}</p>
							</span>

						))
						}
					</div>
				</section>
		</main>
    </>
  )
}
