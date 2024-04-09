import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Habilidades() {
  const { t } = useTranslation("skills");

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
	{
        nombre: 'TypeScript',
        image: 'type.png',
	},
    {
        nombre: 'Next Js',
        image: 'nextjs.svg',
	},
    ];
      
  return (
    <>
    <main className={`p-4 flex justify-center min-h-screen dark:bg-zinc-900`}>
			<div className={`w-[50rem] max-lg:w-full h-[100%] dark:bg-zinc-900 animate-fade-in`}>
				<h1 className={`text-4xl mb-4 pb-4 text-[#485caa] font-semibold text-center border-b-2 dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-400`}>{t("title")}</h1>
				<p className={`my-2 text-[#213547] dark:bg-zinc-900 dark:text-zinc-100`}>{t("text")}</p>
				<div className={` grid grid-rows-4 grid-flow-col gap-4 max-md:grid-rows-6 my-8 dark:bg-zinc-900`}>
				{technologies.map(({nombre, image})=>(
						<div key={nombre} className={` flex flex-col-reverse text-zinc-900 hover:scale-105 transition-all duration-300 justify-between items-center border-2 p-4 rounded-lg w-[15rem] cursor-pointer hover:filter hover:brightness-90	max-md:w-full  `}>
							<p className='text-[#213547]'>{nombre}</p>
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
