import React from 'react'
import { ContactForm } from '../shared/components/ContactForm';
import { useTranslation } from 'react-i18next';

export default function Contacto() {

	const { t } = useTranslation("home");

  return (
    <div className="min-h-screen dark:bg-zinc-900">
      <section className='w-[50rem]  m-auto  max-lg:w-full max-md:px-6  dark:bg-zinc-900'>
        <h1 className={`text-3xl  font-bold text-[#485caa] pt-4 text-center dark:bg-zinc-900`}>{t("contact")}</h1>
        <ContactForm></ContactForm>
         </section>
    </div>
  )
}
