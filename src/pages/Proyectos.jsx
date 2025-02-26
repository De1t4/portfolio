import React from 'react'
import { ProyectosProps } from '../shared/components/ProyectosProps';
import { useTranslation } from 'react-i18next';


export default function Proyectos() {
  const { t } = useTranslation("project");

	const proyectos = [
		{
			nombre: t("project2"),
			descripcion: t("text2"),
			imagen: 'nearby.png',
			pagina: 'https://nearbytour.vercel.app/home',
			repositorio: 'https://github.com/No-Country/s11-21-react-next',
			languages:[
				"Next.Js", "Firebase", "Cloudinary", "HTML5", "TypeScript", "Tailwind CSS",
			]
		},
		{
			nombre: t("project5"),
			descripcion: t("text5"),
			imagen: 'drinkventry.png',
			pagina: 'https://drinkventry.netlify.app/',
			repositorio: 'https://github.com/No-Country/s12-23-tn-typescript-react/tree/developer',
			languages:[
				"React.Js", "TypeScript", "HTML5", "Tailwind CSS","Mongo DB"
			]
		},
		{
			nombre: t("project6"),
			descripcion:  t("text6"),
			imagen: 'blogapp.png',
			pagina: 'https://digital-corner.netlify.app/',
			repositorio: 'https://github.com/De1t4/blog-app-frontend',
			languages:[
				"Next.Js", "TypeScript", "HTML5", "Tailwind CSS","Python", "FastAPI", "MySQL", "Cloudinary"
			]
		},
		{
			nombre: t("project1"),
			descripcion: t("text1"),
			imagen: 'thinderpet.png',
			pagina: 'https://thinderpet.vercel.app/',
			repositorio: 'https://github.com/No-Country/c13-36-t-node-react',
			languages:[
				"React.Js", "TypeScript", "HTML5", "Tailwind CSS"
			]
		},
		{
			nombre: t("project3"),
			descripcion: t("text3"),
			imagen: 'Starwars.png',
			pagina: 'https://neowyze-challenge.netlify.app/',
			repositorio: 'https://github.com/De1t4/Neowyze-challenge',
			languages:[
				"Next.Js", "TypeScript", "HTML5", "Tailwind CSS"
			]
		},

		{
			nombre: t("project4"),
			descripcion: t("text4"),
			imagen: 'ba1.jpg',
			pagina: 'https://de1t4.github.io/Trabajo-practico-integrador-JS/',
			repositorio: 'https://github.com/De1t4/Trabajo-practico-integrador-JS',
			languages:[
				"HTML5", "CSS3", "JavaScript","BootStrap"
			]
		},
	];

  return (
    <>
			<main className={` border-black w-auto h-auto p-4 dark:bg-zinc-900`}>
				<h1 className={`text-center mb-4 text-4xl font-semibold dark:bg-zinc-900 text-[#485caa] dark:border-zinc-500`}>{t("title")}</h1>
				<section className={` grid mb-4 grid-cols-2 gap-4 w-[50rem]  m-auto max-md:grid-cols-1 max-md:w-full dark:bg-zinc-900 animate-fade-in `}>
					{proyectos.map(({nombre, descripcion, imagen, pagina, repositorio, languages})=>(
						<ProyectosProps languages={languages} key={nombre} nombre={nombre} descripcion={descripcion} imagen={imagen} pagina={pagina} repositorio={repositorio}></ProyectosProps>
					))
					}
				</section>
			</main>
    </>
  )
}
