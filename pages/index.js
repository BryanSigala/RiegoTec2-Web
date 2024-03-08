import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <style>{`
        /* Estilos para el body */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff; /* blanco */
            color: #1b396a; /* azul marino */
        }

        /* Estilos para el encabezado */
        header {
            background-color: #ffffff; /* azul marino */
            color: #000000; /* blanco */
            padding: 1em;
            font-family: sans-serif;
            text-align: center;
            position: relative; /* Añadimos posición relativa al header */
        }

        /* Estilos para el logo izquierdo */
        .logo-left {
            position: absolute;
            top: 3px; /* Ajusta la distancia desde la parte superior */
            left: 5px; /* Ajusta la distancia desde la izquierda */
            max-width: 100%; /* Logro responsivo */
            height: auto; /* Mantiene la proporción original de la imagen */
        }

        /* Estilos para el logo derecho */
        .logo-right {
            position: absolute;
            top: 3px; /* Ajusta la distancia desde la parte superior */
            right: 5px; /* Ajusta la distancia desde la derecha */
            max-width: 100%; /* Logro responsivo */
            height: auto; /* Mantiene la proporción original de la imagen */
        }

        /* Estilos para la barra de navegación */
        nav {
            background-color: #003366; /* azul oscuro */
            color: #ffffff; /* blanco */
            padding: 1em;
            text-align: center;
        }

        /* Estilos para la sección */
        section {
            padding: 2em;
        }

        /* Estilos para el pie de página */
        footer {
            background-color: #1b396a; /* azul marino */
            color: #ffffff; /* blanco */
            padding: 1em;
            text-align: center;
        }

        /* Estilos para los botones */
        button {
            width: 30%;
            height: 100%;
            background-color: #dbdbdb;
            color: #1b396a;
            border: 3px solid;
            border-radius: 1vw;
            border-color: #1b396a;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 1.5vw;
        }

        /* Estilos para el contenedor principal */
        #conPrincipal {
            margin-top: 10px;
            width: 40%;
            height: 80%;
            background-color: #dbdbdb;
            border: 3px solid;
            border-radius: 1vw;
            box-shadow: 2px 2px 20px #1b396a;
        }

        /* Estilos para el contenedor secundario */
        #conS {
            width: 100%;
            height: 100%;
        }

        /* Estilos para el segundo contenedor secundario */
        #conS2 {
            width: 80%;
            height: 100%;
            text-align: left;
        }
      `}</style>
      <header>
        <h1>Sistema de riego automático</h1>
        <p>Tecnológico Nacional de México Campus Chihuahua 2</p>
      </header>
      <nav>
        {/* <a href="#">Inicio</a>
        <a href="#">Acerca de</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a> */}
      </nav>
      <section>
        <h2>Bienvenido</h2>
        <p>Este es un sitio web en el que se realizará el riego automatizado de las instalaciones del Instituto Nacional
            de México campus chihuahua 2.</p>
        <div id='conPrincipal'>
          <div id='conS'>
            <h1>Sistema de Riego ITCHII</h1>
          </div>
          <div id='conS'>
            <p><a href='/on'><button>Regar</button></a></p>
          </div>
          <div id='conS'>
            <p><a href='/off'><button>Suspender</button></a></p>
          </div>
        </div>
        <div id='conPrincipal'>
          <div id='conS'>
            <h1>Señales</h1>
          </div>
          <div id='conS2'>
            <p>Humedad de aire: </p>
          </div>
          <div id='conS2'>
            <p>Humedad de suelo: </p>
          </div>
          <div id='conS2'>
            <p>Temperatura: </p>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy;Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
