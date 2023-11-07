import React from 'react'
import { ProyectosProps } from '../components/ProyectosProps';
import { useTranslation } from 'react-i18next';

export default function Proyectos() {
  const { t } = useTranslation("project");

	const proyectos = [
		{
			nombre: t("project1"),
			descripcion: t("text1"),
			imagen: 'thinderpet.png',
			pagina: 'https://thinderpet.vercel.app/',
			repositorio: 'https://github.com/No-Country/c13-36-t-node-react'
		},
		{
			nombre: t("project3"),
			descripcion: t("text3"),
			imagen: 'desktop-preview1.jpg',
			pagina: 'https://countries-api-rest-react.netlify.app/',
			repositorio: 'https://github.com/De1t4/countries-api-rest',
		},
		{
			nombre: t("project4"),
			descripcion: t("text4"),
			imagen: 'ba1.jpg',
			pagina: 'https://de1t4.github.io/Trabajo-practico-integrador-JS/',
			repositorio: 'https://github.com/De1t4/Trabajo-practico-integrador-JS',
		},
		{
			nombre: t("project5"),
			descripcion: t("text5"),
			imagen: 'desktop-preview.jpg',
			pagina: 'https://de1t4.github.io/LoopLandingPage/',
			repositorio: 'https://github.com/De1t4/LoopLandingPage',
		},
		{
			nombre: t("project2"),
			descripcion: t("text2"),
			imagen: 'calculator.jpg',
			pagina: 'https://de1t4.github.io/Calculator/',
			repositorio: 'https://github.com/De1t4/Calculator',
		},
		{
			nombre: t("project6"),
			descripcion: t("text6"),
			imagen: 'vccuroyji9nqbuffdch6.png',
			pagina: 'https://api-diccionario.netlify.app/',
			repositorio: 'https://github.com/De1t4/app-diccionario',
		},
	];

  return (
    <>
		{/* COLOR: #D1D6EA */}
			<main className={` border-black w-auto h-auto p-4 dark:bg-zinc-900`}>
				<h1 className={`text-center mb-4 text-4xl font-semibold dark:bg-zinc-900 text-[#485caa] dark:border-zinc-500`}>{t("title")}</h1>
				<div className={`grid grid-cols-2 gap-4 w-[50rem] m-auto max-md:grid-cols-1 max-md:w-full dark:bg-zinc-900 animate-fade-in `}>
					{proyectos.map(({nombre, descripcion, imagen, pagina, repositorio})=>(
						<React.Fragment key={nombre}>
							<ProyectosProps key={nombre} nombre={nombre} descripcion={descripcion} imagen={imagen} pagina={pagina} repositorio={repositorio}></ProyectosProps>
						</React.Fragment>
					))
					}
				</div>
			</main>
    </>
  )
}
