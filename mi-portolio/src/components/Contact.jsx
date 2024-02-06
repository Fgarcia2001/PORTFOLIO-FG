import React from "react";

const Contact = () => {
  return (
    <div
      name="Contacto"
      className="w-screen 2xl:mt-20 h-screen flex items-center flex-col"
    >
      <h2 className="font-semibold text-[40px]">Contáctame!</h2>
      <p className="mt-3 p-3">
        Estoy buscando oportunidades para crecer como desarrollador web
        trabajando en equipos colaborativos. ¡Por favor, comunícate conmigo para
        que podamos colaborar! 😊🚀
      </p>

      <form
        action="https://formspree.io/f/mwkglpyn"
        method="POST"
        className="flex flex-col items-center pt-10"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="border border-slate-800 w-[400px] mt-6 sm:w-[260px]"
        />
        <input
          placeholder="Email"
          name="email"
          type="text"
          className="border border-slate-800 w-[400px] mt-6 mt-4 sm:w-[260px] "
        />

        <textarea
          className="border border-slate-800 w-[400px] mt-6 mt-4 sm:w-[260px] "
          name="mensaje"
          placeholder="Mensaje"
          cols="30"
          rows="10"
        ></textarea>
        <button
          type="submit"
          className="border border-slate-800 mt-4 mt-4 mt-8 w-[200px] sm:w-[150px] "
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
