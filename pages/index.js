import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-blue-300/60">
      <header>
        <h1 className="font-bold flex w-full text-2xl justify-center dark:bg-blue-300/70 lg:static lg:w-auto lg:p-5">
          Sistema de Riego Automático
        </h1>
        <p className="font-bold flex w-full text-2xl justify-center dark:border-neutral-800 dark:bg-blue-300/70 lg:static border-b-4 lg:p-5">
          Instituto Tecnológico de Chihuahua 2
        </p>
      </header>
      <nav>
        {/*
        <a href="#">Inicio</a>
        <a href="#">Acerca de</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
        */}
      </nav>
      <div className="arial flex w-full text-2xl justify-center">
        Este es el sitio web en el que se realiza el riego automático de las instalaciones del Instituto Tecnológico de Chihuahua 2.
      </div>
      <center><div id='conPrincipal'>
        <div id='conS' className="arial flex w-full text-2xl justify-center">
          <h1>Sistema de Riego ITCHII</h1>
        </div>
        <div id='conS'>
          <p><a href='/on'><button>Regar</button></a></p>
        </div>
        <div id='conS'>
          <p><a href='/off'><button>Suspender</button></a></p>
        </div>
      </div></center>
      <div className="font-bold flex w-full text-2xl justify-center dark:border-neutral-800 dark:bg-blue-300/70 border-t-4 lg:p-5">
        <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href=""
          target=""
          rel="noopener noreferrer">
          <Image
            src="/tecnm.png"
            alt="Logo Tec2"
            className="dark"
            width={250}
            height={24}
            priority
          />
          <Image
            src="/tec2.png"
            alt="Logo Tec2"
            className="dark"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </main>
  );
}
