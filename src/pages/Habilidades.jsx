import React, { useContext } from 'react'
import { DarkModeContext } from '../context/ContextDark';

export default function Habilidades() {
	const {darkMode} = useContext(DarkModeContext)

const technologies = [
    {
        nombre: 'JavaScript',
        image: 'javascript.png',
    },
    {
        nombre: 'HTML',
        image: 'html.png',
    },
    {
        nombre: 'CSS',
        image: 'css.png',
    },
    {
        nombre: 'Tailwind',
        image: 'tailwind.png',
    },
    {
        nombre: 'TypeScript',
        image: 'type.png',
    },
    {
        nombre: 'React',
        image: 'react.png',
    },
    {
        nombre: 'GitHub',
        image: 'github.png',
    },
    {
        nombre: 'MySQL',
        image: 'mysql.png',
    },
    {
        nombre: 'Python',
        image: 'python.jpg',
    },
    {
        nombre: 'Flask',
        image: 'flask.png',
    },
    {
        nombre: 'Vite',
        image: 'vite.jpg',
    },
    ];
      
  return (
    <>
    <main className={`p-4 flex justify-center min-h-screen ${darkMode ? 'bg-zinc-900' :''}`}>
        <div className={`w-[50rem] max-lg:w-full h-[100%] ${darkMode ? 'bg-zinc-900': ''}`}>
					<h1 className={`text-4xl mb-4 pb-4 text-[#485caa] font-semibold text-center border-b-2 ${darkMode ? 'bg-zinc-900 text-zinc-200 border-zinc-400':''}`}>Habilidades</h1>
					<p className={`my-2 ${darkMode ?'bg-zinc-900 text-zinc-100':''}`}>Estas son las tecnologías con las que trabajo para llevar a cabo mis proyectos.</p>
					<div className={` grid grid-rows-4 grid-flow-col gap-4 max-md:grid-rows-6 my-8 ${darkMode ? 'bg-zinc-900': ''}`}>
					{technologies.map(({nombre, image})=>(
							<div key={nombre} className={`flex hover:scale-105 transition-all	duration-300 justify-between items-center border-2 p-4 rounded-lg w-[15rem] cursor-pointer hover:filter hover:brightness-90	max-md:w-full `}>
								<p>{nombre}</p>
								<div className='w-10 h-10'>
									<img src={image} alt="tecnologias-utilizadas" />
								</div>
							</div>
						))
						}
					</div>
				</div>
    </main>

    </>
  )
}
