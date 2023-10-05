import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDarkMode } from '../context/DarkModeContext'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
  const {darkMode, setDarkMode} = useDarkMode()

	const cambiarModoTema = () =>{
		setDarkMode(!darkMode);
	}

	const links = [{
		title: 'Habilidades',
		route: '/habilidades'
	},{
		title: 'Proyectos',
		route: '/proyectos',
	},{
		title: 'Sobre mi',
		route: 'sobremi',
	}]

  return (
    <>
			<nav className={`flex justify-between bg-white items-center border-b-2 py-6 px-8  ${darkMode ? "border-zinc-600 bg-zinc-900": ""}`} >
				<NavLink to={'/'}>
					<div className={`flex items-center gap-4 ${darkMode ? "bg-zinc-900": ""}`}>
							<h1 className={`font-bold  text-2xl font-sans text-[#213547] ${darkMode ? "bg-zinc-900 text-[#fff]": ""}`}>Mauricio Chambi</h1>
							<p className={`font-normal text-[#213547] max-lg:hidden ${darkMode ? "bg-zinc-900 text-[#fff]" : ""}`}>Estudiante de Analisis de Sistemas</p>
					</div>
				</NavLink>
				<div className={`flex gap-4 items-center max-md:hidden ${darkMode ? 'bg-zinc-900':''}`}>
						{links.map(({title, route})=>(
							<div key={route} className='flex items-center'>
								<NavLink to={route}>
									<p className={`text-[#213547] text-lg font-semibold hover:text-[#485caa] hover:cursor-pointer ${darkMode ?'bg-zinc-900 text-zinc-100' :''}`}>{title}</p>
								</NavLink>
							</div>
						))}
						<p onClick={cambiarModoTema} className={`text-[#213547] bg-white transition-all text-lg font-semibold hover:text-[#485caa] hover:cursor-pointer ${darkMode ? 'bg-zinc-900 text-zinc-100': ''}`}>Modo Oscuro</p>
				</div>
				<div className='hidden max-md:flex cursor-pointer'>
					<FaBars className='text-2xl'></FaBars>
				</div>
			</nav>
    </>
  )
}
