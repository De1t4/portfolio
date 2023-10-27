// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export function ContactForm() {
  const [state, handleSubmit] = useForm("xdorbbgp");
  if (state.succeeded) {
      return <><p className='text-center text-green-500 font-semibold dark:bg-zinc-900'>Tu mensaje fue enviado correctamente</p>
      <form onSubmit={handleSubmit} className=' flex flex-col pb-8 gap-y-2 dark:bg-zinc-900'>
        <label htmlFor="email" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa]'>
          Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
          placeholder='ejemplo@gmail.com'
          className='border-2 rounded-lg dark:border-zinc-500 p-2 dark:bg-[#222] dark:text-[#fff] text-[#213547]'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="email" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa]'>
          Nombre
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
          Tu mensaje
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
        Enviar Mensaje
      </button>
    </form>
      </>
  }
  return (
      <form onSubmit={handleSubmit} className=' flex flex-col py-8 gap-y-2 dark:bg-zinc-900'>
        <label htmlFor="email" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa]'>
          Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
          placeholder='ejemplo@gmail.com'
          className='border-2 rounded-lg dark:border-zinc-500 p-2 dark:bg-[#222] dark:text-[#fff] text-[#213547]'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="email" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa]'>
          Nombre
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
          Tu mensaje
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
        Enviar Mensaje
      </button>
    </form>
  );

}
