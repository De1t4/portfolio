import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import copy from 'copy-to-clipboard';

export default function IconsProfile() {
  const { t } = useTranslation("home");

  const copyMail = () => {
    copy('mauriciochambicaceres@gmail.com')
    toast.success('Email Copiado')
  }

  const links = [
    {
      href: "https://github.com/De1t4",
      iconClass: <FaGithub className={`text-4xl w-auto h-auto cursor-pointer transition-all duration-300 hover:scale-110 text-[#1a1a1a] hover:text-[#485caa] dark:hover:text-[#485caa] dark:bg-zinc-900 dark:text-zinc-100 `}></FaGithub>,
      text: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/mauricio-chambi-7a90b724a/",
      iconClass: <FaLinkedin className={`text-4xl w-auto h-auto cursor-pointer transition-all duration-300 hover:scale-110 text-[#1a1a1a] hover:text-[#485caa] dark:hover:text-[#485caa] dark:bg-zinc-900 dark:text-zinc-100`}></FaLinkedin>,
      text: "LinkedIn",
    },
    {
      href: "https://drive.google.com/file/d/1U9GyE5L6QR6Q3zQ_Q4_Jby9t-jGfLypV/view",
      iconClass: <FaFileAlt className={`text-4xl w-auto h-auto cursor-pointer transition-all duration-300 hover:scale-110 text-[#1a1a1a] hover:text-[#485caa] dark:hover:text-[#485caa] dark:bg-zinc-900 dark:text-zinc-100`}></FaFileAlt>,
      text: t("cv"),
    },
  ];

  return (

    <>
      <div className={`flex justify-between w-[45rem] max-md:w-full mb-8 dark:bg-zinc-900 px-10`}>
        <span className='flex flex-col items-center dark:bg-zinc-900 text-zinc-100' >
          <FaEnvelope onClick={copyMail} className={`text-4xl w-auto h-auto cursor-pointer hover:text-[#485caa] dark:hover:text-[#485caa]  transition-all duration-300 hover:scale-110 text-[#1a1a1a] dark:bg-zinc-900 dark:text-zinc-100`}></FaEnvelope>
          <p className='dark:bg-zinc-900 text-[#213547] dark:text-zinc-100'>Email</p>
        </span>
        {links.map(({ href, iconClass, text, index }) => (
          <span key={index} className='flex flex-col items-center dark:bg-zinc-900 text-zinc-100'>
            <a href={href} target='_blank' key={text} className={`dark:bg-zinc-900 text-[#213547]`}>
              {iconClass}
            </a>
            <p className='dark:bg-zinc-900 dark:text-zinc-100 text-[#213547]'>{text}</p>
          </span>
        ))
        }
      </div>
    </>
  )
}