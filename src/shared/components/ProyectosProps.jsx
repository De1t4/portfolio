import { FaGithub, FaRocket } from 'react-icons/fa'

export const languageColors = {
  "React.Js": " dark:text-black border-t-4 border-t-blue-700",
  "TypeScript": " dark:text-black border-t-4 border-t-teal-700",
  "HTML5": "dark:text-black border-t-4 border-t-orange-700",
  "Tailwind CSS": "dark:text-black border-t-4 border-t-indigo-700",
  "Mongo DB": " dark:text-black border-t-4 border-t-green-700",
  "Next.Js": "dark:text-black border-t-4 border-t-purple-700",
  "Python": "text-black border-t-4 border-t-yellow-700",
  "Spring Boot": " dark:text-black border-t-4 border-t-cyan-400",
  "MySQL": "dark:text-black border-t-4 border-t-gray-700",
  "Cloudinary": " dark:text-black border-t-4 border-t-pink-700",
  "CSS3": "border-t-4 border-t-[#0060AD] dark:text-black",
  "Firebase": " dark:text-black border-t-4 border-t-yellow-500",
  "JavaScript": "dark:text-black border-t-4 border-t-yellow-600",
  "BootStrap": "dark:text-black border-t-4 border-t-purple-500",
  "GitHub": "dark:text-black border-t-4 border-t-black",
  "Vite": "dark:text-black border-t-4 border-t-purple-400"
};

// eslint-disable-next-line react/prop-types
export const ProyectosProps = ({ nombre, descripcion, imagen, pagina, repositorio, languages }) => {

  const styleBTN = "border-[#747bff]   rounded-sm border-2 flex gap-2 justify-center items-center px-3 py-2 text-sm focus:ring-2 focus:outline-none focus:ring-[#747bff]"
  return (
    <article className="max-w-sm max-md:m-auto h-full bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
      <div className="h-52 rounded-t-md border-black">
        <a href={pagina == "" ? "#" : pagina} target="_blank" rel='noreferrer'>
          <img className="rounded-t-lg w-full object-cover h-full" src={imagen} alt="image project" />
        </a>
      </div>
      <div className="p-5 dark:bg-gray-900 ">
        <a href={pagina} target="_blank" rel='noreferrer'>
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:bg-gray-900 text-gray-900 dark:dark:text-white uppercase">{nombre}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:bg-gray-900 dark:text-gray-400">{descripcion}</p>

        <span className="flex justify-around dark:bg-gray-900">
          {
            repositorio != "" &&
            (<a href={repositorio} target="_blank" className={styleBTN} rel='noreferrer'>
              <FaGithub /> Github
            </a>)
          }
          {
            pagina != "" && (
              <a href={pagina} target="_blank" className={styleBTN} rel='noreferrer'>
                <FaRocket /> Deploy
              </a>
            )
          }
        </span>

        <div className=" flex-wrap h-full w-full flex dark:bg-gray-900  mt-4">
          {languages.map((language, index) => (
            <span key={index} className={`p-2 m-1 border-2 border-gray-300 rounded-md select-none cursor-pointer ${languageColors[language] || "bg-gray-300 text-black border-gray-500" /* Color por defecto */
              }`}>
              {language}
            </span>
          ))}
        </div>



      </div>

    </article>


  )
}
