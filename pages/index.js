import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Redirigir al usuario a la página principal (Estadoriego.js)
    router.push("Estadoriego.js");
  }

  return (
    <div className="login">
      <h2>Sistema de Riego ITCHII</h2>
      <button className="login-btn" onClick={handleLogin}>
        Iniciar sesión
      </button>
    </div>
  );
}