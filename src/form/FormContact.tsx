import emailjs from '@emailjs/browser';
import { useRef, type FormEvent } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

export default function FormContact() {
  const form = useRef<HTMLFormElement>(null);
  const onSendEmail = (e: FormEvent<HTMLFormElement>) => {
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
    <div className="p-8 md:p-10">
      <form ref={form} onSubmit={onSendEmail} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300 tracking-wide">
            Correo Electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            required
            autoComplete="on"
            className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10 transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300 tracking-wide">
            Nombre Completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            required
            autoComplete="on"
            className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10 transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300 tracking-wide">
            Tu Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Cuéntame sobre tu proyecto..."
            rows={5}
            required
            autoComplete="on"
            className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10 transition-all duration-200 resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3.5 px-4 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] text-gray-950 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
        >
          <span>Enviar Mensaje</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  )
}
