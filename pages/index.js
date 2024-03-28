import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Redirigir al usuario a la página principal (Estadoriego)
    router.push("/Estadoriego");
  };

  return (
    <div className="login">
      <h2>Sistema de Riego ITCHII</h2>
      <button className="login-btn" onClick={handleLogin}>
        Iniciar sesión
      </button>
    </div>
  );
}

// Adrian ayuda aquí abajo para hacer el login chido xD

/* import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const { data: session } = useSession(); // Obtener la sesión del usuario
  const router = useRouter();

  useEffect(() => {
    // Verificar si hay una sesión activa al cargar la página
    if (session) {
      router.replace("/Estadoriego");
    }
  }, [session, router]);

  const handleLogin = async () => {
    try {
      await signIn(); // Iniciar sesión utilizando NextAuth
      router.push("/Estadoriego.js"); // Redirigir a la página Estadoriego.js después del inicio de sesión
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="login">
      <h2>
        <img
          src="tec2.png"
          alt="Logo Sistema de Riego ITCHII"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        Sistema de Riego ITCHII
      </h2>
      <div className="input-group">
        <label htmlFor="username">
          Usuario:
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingresa usuario"
            style={{ marginLeft: "37px" }}
          />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="password">
          Contraseña:
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa contraseña"
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <button className="login-btn" onClick={handleLogin}>
        Iniciar sesión
      </button>
    </div>
  );
}*/