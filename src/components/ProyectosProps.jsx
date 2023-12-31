import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa';

export const ProyectosProps = (props) => {

  return (
    <>
    <div className={`border-2  shadow-lg shadow-[#485caa] border-zinc-500 p-4 rounded-lg my-4 dark:bg-zinc-900 dark:border-gray-600`}>
        <img src={props.imagen} alt="proyecto-imagen" className='border-2 border-zinc-300 transition-all duration-300 w-80  h-44 rounded-lg m-auto hover:scale-105 cursor-pointer'/>
        <h1 className={`mt-2 text-[#213547] font-semibold dark:bg-zinc-900 dark:text-zinc-100`}>{props.nombre}</h1>
        <p className={`text-[#213547] border-y-2 my-2  dark:bg-zinc-900 dark:text-zinc-100 dark:border-gray-600`}>{props.descripcion}</p>
        <div className={`flex justify-center gap-8 items-center dark:bg-zinc-900`}>
            <a href={props.repositorio} target='_blank' className={`dark:bg-zinc-900`}>
              <FaGithub className={`fa-brands fa-github text-4xl text-[#1a1a1a]  cursor-pointer transition-all duration-300 hover:scale-110 dark:bg-zinc-900 dark:text-zinc-100`}></FaGithub>
            </a>
            <a href={props.pagina} target='_blank' className={`dark:bg-zinc-900`}>
              <FaLink className={`fa-brands fa-github text-4xl text-[#1a1a1a]  cursor-pointer transition-all duration-300 hover:scale-110 dark:bg-zinc-900 dark:text-zinc-100`}></FaLink>
            </a>
        </div>
    </div>
    </>
  )
}
