import React from 'react'

export default function SobreMi() {

  const fotos = ['foto1.jpeg', 'foto2.jpeg', 'foto3.jpeg', 'foto4.jpeg']
  return (
		<main className={`p-4    dark:bg-zinc-900`}>
			<h1 className={`text-4xl text-center my-4 font-semibold text-[#485caa]   dark:bg-zinc-900`}>Sobre Mí</h1>
			<div className={` animate-fade-in transition-all duration-300 flex items-center w-[60rem] m-auto border-t-2 max-md:flex-col max-lg:w-auto  gap-x-4 dark:bg-zinc-900`}>
				<div className={`flex flex-col   dark:bg-zinc-900 dark:text-zinc-100`}>
					<h1 className={`text-[#213547] text-4xl text-left my-4 font-semibold max-md:text-center   dark:bg-zinc-900`}>¿Quién soy?</h1>
					<p className={`text-[#213547] text-justify space-x-6 text-xl font-[400] max-md:my-4    dark:bg-zinc-900 dark:text-zinc-100`}>
						Soy estudiante de 'Análisis en Sistemas' y programador autodidacta. Mi pasión por la tecnología me impulsa a buscar oportunidades laborales en el campo de las tecnologías para continuar mi desarrollo profesional y aprender de manera continua. Estoy emocionado por formar parte del mundo laboral y aprovechar cada experiencia para adquirir nuevos conocimientos y habilidades en el ámbito de las tecnologías.
					</p>
				</div>
				<img src={'image.jpg'} alt="" className={`w-[30rem] h-[20rem]   dark:bg-zinc-900`}/>
			</div>
			<div className={`w-[60rem] flex items-center m-auto my-20 gap-8 max-md:flex-col-reverse max-lg:w-auto   dark:bg-zinc-900`}>
				<div className={`w-[20rem] grid grid-rows-2 grid-flow-col gap-4 border-4 p-4 border-black   dark:bg-zinc-900`}>
					{fotos.map((foto, index)=>(
						<div key={index} className=' animate-fade-in transition-all duration-300'>
							<img src={foto} alt="" className='cursor-pointer hover:scale-110 transition-all duration-300' />
						</div>
					))
					}
				</div>
				<div className={`w-[40rem] max-lg:w-2/4 max-md:w-auto   dark:bg-zinc-900`}>
					<h1 className={`text-[#213547] text-4xl text-right my-4 font-semibold max-md:text-center  dark:bg-zinc-900 dark:text-zinc-100`}>Paisajes</h1>
					<p className={`text-[#213547] text-justify space-x-6 text-xl font-[400] max-md:my-4  dark:bg-zinc-900 dark:text-zinc-100`}>
					Soy una persona que disfruta explorar y apreciar los diversos paisajes a los que viajo, ya sean entornos urbanos vibrantes o impresionantes paisajes naturales. Encuentro  fascinación en la diversidad de escenarios que ofrece nuestro mundo, y disfruto plenamente de la experiencia de sumergirme en la belleza de la ciudad y la majestuosidad de la naturaleza.</p>
				</div>
			</div>
		</main>
  )
}
