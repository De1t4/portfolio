import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaMoon, FaSun, FaWindowClose } from 'react-icons/fa'
import { useTranslation } from "react-i18next";

export default function Navbar() {
	const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation("navbar");


	const [theme, setTheme] = useState(()=>{
		if(window.matchMedia("(prefers-color-scheme:dark)").matches){
			return 'dark'
		}
		return 'light'
	})
	useEffect(() => {
		if(theme == 'dark'){
			document.querySelector('html').classList.add('dark')
		}else{
			document.querySelector('html').classList.remove('dark')
		}
	}, [theme]);

	const handleChangeTheme = () =>{
		setTheme(prevTheme => prevTheme == "light"? "dark":"light")
	}

	const handleLanguageChange = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language)
  };

	const handleNavbar = () =>{
		setOpen(!open)
	}
	const links = [{
		title: t("skills"),
		route: '/habilidades'
	},{
		title: t("projects"),
		route: '/proyectos',
	},{
		title: t("aboutme"),
		route: 'sobremi',
	},{
		title:t("contact"),
		route:"/contacto"
	}

]
	
	useEffect(() => {
    const closeModal = () => {
      if (window.innerWidth > 768) {
        setOpen(false); // Cierra el modal cuando el ancho supere los 768px
      }
    };

    window.addEventListener('resize', closeModal);

    return () => {
      window.removeEventListener('resize', closeModal);
    };
  }, []);
  return (
    <>
			<nav className={`border-2 h-30 z-50 flex justify-between bg-zinc-100 items-center border-b-2 py-6 px-40 max-md:px-8 max-xl:px-20 max-lg:z-20  dark:border-zinc-600 dark:bg-zinc-800 duration-300 transition-all animate-slide-down`} >
				<NavLink to={'/'} className={"flex items-center gap-4  child dark:bg-zinc-800 bg-zinc-100 "}>
					<img src={'LogoPage.png'} alt="logo-page"  className='w-12 object-cover rounded-lg brightness-125 z-40'/>
					<p className={`font-normal italic text-[#213547] bg-zinc-100 max-lg:hidden dark:bg-zinc-800 dark:text-[#fff]`}>{t("studies")}</p>
				</NavLink>
				<div className={`flex gap-6 bg-zinc-100 items-center max-[850px]:hidden dark:bg-zinc-800`}>
						{links.map(({title, route})=>(
								<NavLink to={route} key={route} className={` text-[#213547] bg-zinc-100 text-lg font-semibold hover:scale-105 duration-300 transition-all hover:text-[#485caa] dark:hover:text-[#485caa] hover:cursor-pointer dark:bg-zinc-800 dark:text-zinc-100`}>
									{title}
								</NavLink>
						))}
						<select name="" id="" value={i18n.language} onChange={handleLanguageChange} className='bg-zinc-200 text-[#213547] font-semibold w-24 text-center h-8 border-2  rounded-lg border-[#444] dark:border-[#5A73D4] outline-none dark:text-[#485caa] dark:bg-[#111]'>
							<option value="es" className=' bg-zinc-200 text-[#213547] font-semibold w-24 text-center h-8 border-2  rounded-lg border-[#444] dark:text-[#5A73D4] dark:bg-[#111]'>{t("spanish")}</option>
							<option value="en" className='bg-zinc-200 text-[#213547] font-semibold w-24 text-center h-8 border-2  rounded-lg border-[#444] dark:text-[#5A73D4] dark:bg-[#111]'>{t("english")}</option>
						</select>
						<p onClick={handleChangeTheme} className={`text-[#213547] hover:scale-105 duration-300  p-2 rounded-lg bg-zinc-200 transition-all border-2 hover:dark:border-[#485caa] border-[#111] text-lg font-semibold dark:hover:text-[#485caa] hover:cursor-pointer flex items-center dark:bg-zinc-900 dark:text-zinc-100`}>{theme == "dark" ?<FaMoon className='bg-zinc-200  dark:bg-zinc-900'></FaMoon> : <FaSun className='bg-zinc-200 dark:bg-zinc-900'></FaSun>}</p>
				</div>
				{open
				? <div className='z-50 hidden bg-zinc-100  max-[850px]:flex cursor-pointer hover:scale-110 duration-300 transition-all' onClick={handleNavbar}>
				<FaWindowClose className={`text-2xl text-[#213547] bg-zinc-100 dark:text-zinc-100 dark:bg-zinc-800`}></FaWindowClose>
				</div>
				:<div className='hidden max-[850px]:flex bg-zinc-100 cursor-pointer hover:scale-110 duration-300 transition-all' onClick={handleNavbar}>
				<FaBars className={`text-2xl text-[#213547] bg-zinc-100 dark:text-zinc-100 dark:bg-zinc-800`}></FaBars>
				</div>
				}
			</nav>
			<div className={`${open?'flex':'hidden'}  z-30 rounded-b-xl  absolute bg-zinc-100 w-full top-0 h-[33rem] flex-col items-center justify-center dark:bg-zinc-800`}>
				{links.map(({title, route})=>(
							<div key={route} className='flex my-4 items-center'>
								<NavLink to={route} className={`bg-zinc-100 dark:bg-zinc-800`}>
									<p className={`border-zinc-300 text-[#213547] text-lg font-semibold hover:text-[#485caa] hover:brightness-90 transition-all duration-300 hover:scale-110 hover:cursor-pointer border-2 p-2 w-60 text-center rounded-lg dark:bg-zinc-700 dark:hover:brightness-125 dark:text-zinc-100 hover:dark:text-[#485caa] hover:dark:border-[#485caa] dark:border-zinc-500`}>{title}</p>
								</NavLink>
							</div>
						))}
					<p onClick={handleChangeTheme} className={`flex justify-center items-center my-4 text-[#213547] text-lg font-semibold hover:text-[#485caa] hover:brightness-90 transition-all duration-300 hover:scale-110 hover:cursor-pointer border-2 p-2 w-60 text-center rounded-lg dark:bg-zinc-700 dark:hover:brightness-125 border-zinc-300 dark:border-zinc-500 hover:dark:text-[#485caa] hover:dark:border-[#485caa] dark:text-zinc-100`}>{theme == "dark" ?<FaMoon className='border-zinc-500 mr-1  dark:bg-zinc-700'></FaMoon> : <FaSun className='bg-zinc-100 mr-1 '></FaSun>}  {t("theme")}</p>
					<select name="" id="" value={i18n.language} onChange={handleLanguageChange} className='border-zinc-300 my-4 text-[#213547] text-lg font-semibold hover:text-[#485caa] hover:brightness-90 transition-all duration-300 hover:cursor-pointer border-2 p-2 w-60 text-center rounded-lg dark:bg-zinc-700 dark:hover:brightness-125 dark:text-zinc-100 hover:dark:text-[#485caa] hover:dark:border-[#485caa] dark:border-zinc-500'>
							<option value="es" className=' border-zinc-300 my-4 text-[#213547] text-lg font-semibold hover:text-[#485caa] hover:brightness-90 transition-all duration-300 hover:cursor-pointer border-2 p-2 w-60 text-center rounded-lg dark:bg-zinc-700 dark:hover:brightness-125 dark:text-zinc-100 hover:dark:text-[#485caa] hover:dark:border-[#485caa] dark:border-zinc-500'>{t("spanish")}</option>
							<option value="en" className='border-zinc-300 my-4 text-[#213547] text-lg font-semibold hover:text-[#485caa] hover:brightness-90 transition-all duration-300 hover:cursor-pointer border-2 p-2 w-60 text-center rounded-lg dark:bg-zinc-700 dark:hover:brightness-125 dark:text-zinc-100 hover:dark:text-[#485caa] hover:dark:border-[#485caa] dark:border-zinc-500'>{t("english")}</option>
						</select>
			</div>

			<div className={`${open ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-full flex items-center bg-black bg-opacity-50 z-0`} onClick={handleNavbar}></div>
    </>
  )
}
