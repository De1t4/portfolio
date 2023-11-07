// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { Toaster, toast } from 'sonner';
export function ContactForm() {
  const { t } = useTranslation("home");
  const [state, handleSubmit] = useForm("xdorbbgp");
  if (state.succeeded) {
      return <> 
      <p className=' text-center text-green-500 font-semibold dark:bg-zinc-900'>Tu mensaje fue enviado correctamente</p>
      <form onSubmit={handleSubmit} className='px-20 max-md:px-0 flex flex-col py-8 gap-y-2 dark:bg-zinc-900'>
        <label htmlFor="email" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa]'>
          Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
          placeholder={t("ejemplo")}
          className='border-2 rounded-lg dark:border-zinc-500 p-2 dark:bg-[#222] dark:text-[#fff] text-[#213547]'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="email" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa]'>
          {t("name")}
        </label>
        <input
          id="name"
          type="name" 
          name="name"
          className='border-2 rounded-lg dark:border-zinc-500 p-2 dark:bg-[#222] dark:text-[#fff] text-[#213547]'
          required
          placeholder='John'
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <label htmlFor="email" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa] '>
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          className='border-2  h-60 rounded-lg max-h-64 dark:border-zinc-500 p-2 dark:bg-[#222] dark:text-[#fff] text-[#213547]'
          maxLength={255}
          required
          placeholder='Dejame tu mensaje....'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      <button type="submit" disabled={state.submitting} className='hover:scale-105 transition-all duration-300 my-2 w-[20rem] m-auto border-2 bg-[#485caa] text-[#fff] font-semibold'>
        {t("btnText")}
      </button>
    </form>
  </>
  }
  return (<>
  		<Toaster  richColors/>
      <form onSubmit={handleSubmit} className='px-20 max-md:px-0 flex flex-col py-8 gap-y-2 dark:bg-zinc-900'>
        <label htmlFor="email" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa]'>
          Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
          placeholder={t("ejemplo")}
          className='border-2 rounded-lg dark:border-zinc-500 p-2 dark:bg-[#222] dark:text-[#fff] text-[#213547]'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="email" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa]'>
        {t("name")}
        </label>
        <input
          id="name"
          type="name" 
          name="name"
          className='border-2 rounded-lg dark:border-zinc-500 p-2 dark:bg-[#222] dark:text-[#fff] text-[#213547]'
          required
          placeholder='John'
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <label htmlFor="email" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa] '>
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          className='border-2  h-60 rounded-lg max-h-64 dark:border-zinc-500 p-2 dark:bg-[#222] dark:text-[#fff] text-[#213547]'
          maxLength={255}
          required
          placeholder={t("textMessage")}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      <button type="submit" disabled={state.submitting} className='my-2 w-[20rem] m-auto border-2 bg-[#485caa] text-[#fff] font-semibold'>
        {t("btnText")}
      </button>
    </form>
    </>
  );

}
