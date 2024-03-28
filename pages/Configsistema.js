import { signIn } from "next-auth/react";

export default function Login() {
  const handleLogin = async () => {
    try {
      await signIn(); // Iniciar sesión utilizando NextAuth
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
}
