import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import IconsProfile from './IconsProfile';

export default function ProfileView() {
  const { t } = useTranslation("home");
  return (
    <main className={`min-h-screen dark:bg-zinc-900 `}>
      <section className={`flex w-[50rem]  items-center m-auto flex-col max-lg:w-auto dark:bg-zinc-900 `}>
        <motion.div
          className={`flex items-center gap-x-10 border-b-2 py-8 max-lg:flex-col max-md:flex-col dark:bg-zinc-900 dark:border-zinc-500`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <img src={"img.jpg"} alt="mi foto" className='shadow-[0px_20px_20px_10px_#cbd5e0] hover:shadow-[0px_20px_20px_10px_#a0aec0] dark:shadow-none dark:bg-zinc-900 bg-zinc-100 border-zinc-100 dark:border-zinc-700 transition-all duration-300 border-2 p-2 cursor-pointer w-[18rem] rounded-full h-[18rem] ' />
          <h1 className={`text-4xl leading-[3rem] max-lg:text-center text-[#213547] dark:bg-zinc-900 dark:text-zinc-100`}>
            {t("title")}
            <span className={`text-[#485caa] font-semibold cursor-pointer hover:brightness-110 dark:bg-zinc-900`}>
              {t("myname")}
            </span>
            {t("studies")}
          </h1>
        </motion.div>
        <h1 className={`text-3xl  font-bold text-[#485caa] text-center py-4 dark:bg-zinc-900`}>{t("network")}</h1>
        <IconsProfile />
      </section>

    </main>
  )
}