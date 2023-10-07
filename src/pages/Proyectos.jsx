import React from 'react'
import { ProyectosProps } from '../components/ProyectosProps';

export default function Proyectos() {

	const proyectos = [
		{
			nombre: 'CALCULADORA',
			descripcion: 'Una calculadora interactiva que realiza operaciones matemáticas básicas. Desarrollada en HTML, CSS, SaSS y JavaScript.',
			imagen: 'calculator.jpg',
			pagina: 'https://de1t4.github.io/Calculator/',
			repositorio: 'https://github.com/De1t4/Calculator',
		},
		{
			nombre: 'REST COUNTRIES API',
			descripcion: 'Aplicación web que utiliza la REST Countries API, los usuarios pueden explorar datos de diferentes países. Desarrollada con tecnologías como React Js, HTML, CSS y API REST.',
			imagen: 'desktop-preview1.jpg',
			pagina: 'https://countries-api-rest-react.netlify.app/',
			repositorio: 'https://github.com/De1t4/countries-api-rest',
		},
		{
			nombre: 'CRUD CONTACTOS',
			descripcion: 'Proyecto CRUD (Crear, Leer, Actualizar, Eliminar). Tecnologías utilizadas: React JS, HTML, Bootstrap y CSS.',
			imagen: 'contact.png',
			pagina: 'https://crud-contactos.netlify.app/',
			repositorio: 'https://github.com/De1t4/crud-contact',
		},
		{
			nombre: 'PROYECTO DE CODO A CODO',
			descripcion: 'Proyecto del curso Java FullStack de Codo a CoDurante mi participación en el curso Java FullStack de Codo a Codo, desarrollé un proyecto utilizando una combinación de tecnologías clave que incluyen HTML, CSS, Bootstrap y JavaScript.',
			imagen: 'ba1.jpg',
			pagina: 'https://de1t4.github.io/Trabajo-practico-integrador-JS/',
			repositorio: 'https://github.com/De1t4/Trabajo-practico-integrador-JS',
		},
		{
			nombre: 'LANDING PAGE',
			descripcion: 'Landing Page que creé de la página Front End Mentor donde. Utilicé tecnologías como HTML, CSS, SaSS y JavaScript.',
			imagen: 'desktop-preview.jpg',
			pagina: 'https://de1t4.github.io/LoopLandingPage/',
			repositorio: 'https://github.com/De1t4/LoopLandingPage',
		},
		{
			nombre: 'DICTIONARY API',
			descripcion: 'Creé una página web de diccionario usando React y una API de diccionario. Los usuarios pueden buscar palabras y obtener su significado.',
			imagen: 'vccuroyji9nqbuffdch6.png',
			pagina: 'https://api-diccionario.netlify.app/',
			repositorio: 'https://github.com/De1t4/app-diccionario',
		},
	];

  return (
    <>
			<main className={` border-black w-auto h-auto p-4 dark:bg-zinc-900`}>
				<h1 className={`text-center mb-4 text-4xl font-semibold dark:bg-zinc-900 dark:text-[#485caa] dark:border-zinc-500`}>Proyectos</h1>
				<div className={`grid grid-rows-3 border-t-2 grid-flow-col gap-4 w-[50rem] m-auto max-lg:grid-rows-6 max-lg:w-auto dark:bg-zinc-900 animate-fade-in`}>
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
