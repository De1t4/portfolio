import { useTranslation } from 'react-i18next';
import { languageColors } from '../shared/components/ProyectosProps';

export default function Habilidades() {
	const { t } = useTranslation("skills");


	const technologies = [
		{
			nombre: 'JavaScript',
			image: 'javascript.png',
		},
		{
			nombre: 'HTML5',
			image: 'html.png',
		},
		{
			nombre: 'CSS3',
			image: 'css.png',
		},
		{
			nombre: 'Tailwind CSS',
			image: 'tailwind.png',
		},

		{
			nombre: 'React.Js',
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
			nombre: 'Spring Boot',
			image: 'spring.png',
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
			nombre: 'Next.Js',
			image: 'nextjs.svg',
		},
	];

	return (
		<main className={`p-4 flex justify-center min-h-screen dark:bg-zinc-900`}>
			<div className={`w-[50rem] max-lg:w-full h-[100%] dark:bg-zinc-900 animate-fade-in`}>
				<h1 className={`text-center mb-4 text-4xl font-semibold dark:bg-zinc-900 text-[#485caa] dark:border-zinc-500`}>{t("title")}</h1>
				<p className={`my-2 text-[#213547] dark:bg-zinc-900 dark:text-zinc-100`}>{t("text")}</p>
				<div className={` grid grid-rows-4 grid-flow-col gap-4 max-md:grid-rows-6 my-8 dark:bg-zinc-900`}>
					{technologies.map(({ nombre, image }) => (
						<div key={nombre} className={`${languageColors[nombre] || "bg-gray-300 text-black border-gray-500" /* Color por defecto */
							} flex flex-col-reverse text-zinc-900 hover:scale-105 transition-all duration-300 justify-between items-center border-2 p-4 rounded-lg w-[15rem] cursor-pointer hover:filter hover:brightness-90	max-md:w-full  `}>
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
	)
}
