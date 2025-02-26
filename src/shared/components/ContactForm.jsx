import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { useMailprex } from "usemailprex-react";

export function ContactForm() {
  const { t } = useTranslation("home");
  const webName = "Portfolio Mauricio Chambi";
  const url = "https://api.mailprex.top/email/send";
  const emailDestiny = import.meta.env.VITE_EMAIL_DESTINY || "";
  const formToken = import.meta.env.VITE_MAILPREX_FORM_TOKEN || "";
  const [isLoading, setIsLoading] = useState(false);
  const { formData, handleChange, handleSubmit, response } = useMailprex({
    url,
    formToken,
    webName,
    emailDestiny,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await handleSubmit(e);

    if (response.error) {
      toast.error(
        t("errorMessageEmail")
      );
    } else {
      toast.success(
        t("successMessage")
      );

      formData.fullname = "";
      formData.email = "";
      formData.message = "";
    }
    e.target.reset();
    setIsLoading(false);
  };
  return (<>
    <form onSubmit={handleFormSubmit} className='px-20 max-md:px-0 flex flex-col py-2 gap-y-2 dark:bg-zinc-900'>
      <label htmlFor="email" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa]'>
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        onChange={handleChange}
        placeholder={t("ejemplo")}
        className='border-2 rounded-lg dark:border-zinc-500 p-2 dark:bg-[#222] dark:text-[#fff] text-[#213547]'
      />
      <label htmlFor="fullname" className='text-[#213547] font-semibold dark:bg-zinc-900 dark:text-[#485caa]'>
        {t("name")}
      </label>
      <input
        id="fullname"
        type="text"
        name="fullname"
        required
        onChange={handleChange}
        placeholder="John"
        className="border-2 rounded-lg dark:border-zinc-500 p-2 dark:bg-[#222] dark:text-[#fff] text-[#213547]"
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
        onChange={handleChange}
      />

      <button type="submit" disabled={isLoading} className='my-2 w-[20rem] m-auto border-2 bg-[#485caa] text-[#fff] font-semibold'>
        {t("btnText")}
      </button>
    </form>
  </>
  );

}
