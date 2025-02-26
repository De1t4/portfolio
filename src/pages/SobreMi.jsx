import React from 'react'
import { useTranslation } from 'react-i18next';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AppWindow, BookOpen, Building, ChartColumn, GraduationCapIcon, HeartPulse, HomeIcon, UniversityIcon, Users } from 'lucide-react';

export default function SobreMi() {
	const { t } = useTranslation("about");
	return (
		<main className={`p-4  min-h-screen `}>
			<h1 className={`text-center mb-4 text-4xl font-semibold  text-[#485caa] dark:border-zinc-500`}>{t("title")}</h1>

			<VerticalTimeline className={""}>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2022 Mar - 2024 Dec"
					contentStyle={{ "border": "1px solid rgb(33, 150, 243)" }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					iconStyle={{ background: 'rgb(33, 150, 243)' }}
					icon={<HomeIcon className="text-white bg-transparent " />}
				>
					<h3 className="vertical-timeline-element-title">Análisis en Sistemas</h3>
					<h4 className="vertical-timeline-element-subtitle">Inicio de carrera</h4>
					<p>
						Inicio mi primera carrera en <b>Técnico en Análisis de Sistemas</b>, con muchas dudas pero con el objetivo de explorar el mundo de la <b>tecnología</b> y la <b>programación</b>.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2022 Ago - 2022 Dic"
					iconStyle={{ background: "rgb(250 200 21)", color: "#fff" }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(250 200 21)' }}
					contentStyle={{ "border": "1px solid rgb(250 200 21)" }}
					icon={<BookOpen className="text-white bg-transparent " />}
				>
					<h3 className="vertical-timeline-element-title">Codo a Codo</h3>
					<h4 className="vertical-timeline-element-subtitle">Curso Fullstack</h4>
					<p>
						Finalizo el curso de <b>Desarrollo Fullstack de Codo a Codo</b>, donde aprendí las bases de <b>Java y MySQL</b>. Durante la cursada, trabajamos en un proyecto integrador: un CRUD utilizando las tecnologías vistas.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 100, 243)' }}
					date="2023 Mar"
					contentStyle={{ "border": "1px solid rgb(33, 100, 243)" }}
					iconStyle={{ background: "rgb(33, 100, 243)", color: "#fff" }}
					icon={<UniversityIcon className="text-white bg-transparent" />}
				>
					<h3 className="vertical-timeline-element-title">Informática Aplicada</h3>
					<h4 className="vertical-timeline-element-subtitle">Segunda carrera</h4>
					<p>
						Inicio mi segunda tecnicatura, en <b>Programación Aplicada</b>, con el objetivo de profundizar mis conocimientos en programación y mejorar mi perfil profesional.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2023 Jul - 2023 Ago"
					contentStyle={{ "border": "1px solid rgb(33, 150, 243)" }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<AppWindow className="text-white bg-transparent" />}
				>
					<h3 className="vertical-timeline-element-title">APP de Países</h3>
					<h4 className="vertical-timeline-element-subtitle">Desarrollo de aplicación</h4>
					<p>
						Desarrollé mi primera aplicación haciendo conexiones a APIs externas con React. El proyecto consistió en realizar <b>consultas a APIs y renderizar la información</b> obtenida como desafío personal.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2023 Nov - 2024 May"
					contentStyle={{ "border": "1px solid rgb(30 58 138)" }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(30 58 138)' }}
					iconStyle={{ background: "rgb(30 58 138)", color: "#fff" }}
					icon={<Users className="text-white bg-transparent" />}
				>
					<h3 className="vertical-timeline-element-title">Digital Corner</h3>
					<h4 className="vertical-timeline-element-subtitle">Aplicación Web</h4>
					<p>
						Desarrollé Digital Corner, una <b>aplicación web para la publicación de posts</b>. Usé <b>Next.js</b> para el frontend y <b>FastAPI</b> de Python para el backend, con MySQL como base de datos, para reforzar mis conocimientos tanto en frontend como en backend.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2024 Ene - Ago"
					contentArrowStyle={{ borderRight: '7px solid  rgb(131 24 67)' }}
					iconStyle={{ background: "rgb(131 24 67)", color: "#fff" }}
					contentStyle={{ "border": "1px solid rgb(131 24 67)" }}
					icon={<Building className="text-white bg-transparent " />}
				>
					<h3 className="vertical-timeline-element-title">No Country</h3>
					<h4 className="vertical-timeline-element-subtitle">Desarrollador Frontend</h4>
					<p>
						Ingresé como Desarrollador Frontend en <b>No Country</b>, colaborando en el desarrollo de MVPs como <b>NearbyTour</b>, <b>ThinderPet</b> y <b>DrinkVentry</b>, con tecnologías como React, Next.js y Node.js.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentArrowStyle={{ borderRight: '7px solid  #FFA046' }}
					contentStyle={{ "border": "1px solid #FFA046" }}
					date="2024 Jun - Ago"
					iconStyle={{ background: "#FFA046", color: "#fff" }}
					icon={<HeartPulse className="text-white bg-transparent" />}
				>
					<h3 className="vertical-timeline-element-title">Hackathon Justina.IO</h3>
					<h4 className="vertical-timeline-element-subtitle">Hackathon</h4>
					<p>
						<b>Participé en un Hackathon</b> trabajando en el desarrollo de una aplicación médica para Justina, en un equipo multidisciplinario de 7 personas, utilizando <b>React y Java</b>. Terminamos en <b>segundo lugar de 15 equipo</b>s.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2024 Ago - Sep"
					contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
					contentStyle={{ "border": "1px solid rgb(233, 30, 99)" }}
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
					icon={<BookOpen className=' bg-transparent text-white' />}
				>
					<h3 className="vertical-timeline-element-title">Alura Latam</h3>
					<h4 className="vertical-timeline-element-subtitle">Formación Java & Spring Boot</h4>
					<p>
						Finalicé una formación en Java y Spring Boot en Alura Latam, donde profundicé mis conocimientos en Spring Boot, uno de los frameworks más importantes en el desarrollo backend.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2024 Dic"
					contentArrowStyle={{ borderRight: '7px solid  rgb(50, 30, 99)' }}
					contentStyle={{ "border": "1px solid rgb(50, 30, 99)" }}
					iconStyle={{ background: "rgb(50, 30, 99)", color: "#fff" }}
					icon={<GraduationCapIcon className=' bg-transparent text-white' />}
				>
					<h3 className="vertical-timeline-element-title">Análisis de Sistemas</h3>
					<h4 className="vertical-timeline-element-subtitle">Título de Técnico</h4>
					<p>
						<b>Finalicé mis estudios en Análisis de Sistemas</b>, aprendiendo sobre bases de datos, análisis funcional, diagramas, ingeniería de software, y patrones de diseño, con tecnologías como PHP, Python y Java.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2024 Ago - Actualidad"
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					contentStyle={{ "border": "1px solid rgb(33, 150, 243)" }}
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<ChartColumn className="text-white bg-transparent" />}
				>
					<h3 className="vertical-timeline-element-title">IcarisTech</h3>
					<h4 className="vertical-timeline-element-subtitle">Desarrollador Web</h4>
					<p>
						Formo parte de una organización dedicada al<b> desarrollo de software a medida</b>. Creamos herramientas digitales para <b>impulsar empresas</b>, <b>optimizar procesos</b> y conectar el mundo a través de soluciones tecnológicas.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2025 - Próximamente"
					contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
					contentStyle={{ "border": "1px solid rgb(16, 204, 82)" }}
					iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
					icon={<GraduationCapIcon className=' bg-transparent text-white' />}
				>
					<h3 className="vertical-timeline-element-title">Licenciatura en Ciencia de Datos</h3>
					<h4 className="vertical-timeline-element-subtitle">Futuro Académico</h4>
					<p>
						Iniciaré la Licenciatura en Ciencia de Datos, una área que me apasiona y en la que tengo grandes expectativas para seguir desarrollándome profesionalmente.
					</p>
				</VerticalTimelineElement>

			</VerticalTimeline>

		</main>
	)
}
