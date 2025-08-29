import { type FormEvent, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

export default function ContactMe() {


  const form = useRef<HTMLFormElement>(null);
  const OnSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('email_service_22', 'template_8eahz7k', form.current, {
          publicKey: 'qUwMOO_DufbL6nI8f',
        })
        .then(
          () => {
            toast.success("¡Gracias por tu mensaje!. Te estaré respondiendo a la brevedad.");
            (e.target as HTMLFormElement).reset();
          },
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (_error) => {
            toast.error("Ocurrió un inconveniente. Por favor, inténtalo nuevamente más tarde.");
          },
        );
    }
  };

  return (
    <section id="contact" className="py-16 px-4 my-4 bg-gray-900/50">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-montserrat font-bold text-3xl text-center mb-4 text-gray-100">Contáctame</h2>
        <p className="text-center text-gray-400 mb-12">
          ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él
        </p>
        <div className="bg-gray-800 border-gray-700 rounded-md">
          <div className="p-6">
            <form ref={form} onSubmit={OnSendEmail} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  autoComplete="on"
                  className="bg-gray-700 p-2 w-full rounded-md border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  required
                  autoComplete="on"
                  className="bg-gray-700 p-2 w-full rounded-md border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  required
                  autoComplete="on"
                  className="bg-gray-700 p-2 w-full rounded-md border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-emerald-500"
                />
              </div>
              <button
                type="submit"
                value={"Send"}
                className="w-full p-2 rounded-md font-semibold bg-emerald-500 hover:bg-emerald-600 text-gray-950"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

