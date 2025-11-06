import { Logorokys} from "../components/Logorokys";
import { Link } from "react-router";
import { useState } from "react";

import "../styles/Admi.css";

export const Admi = () => {
  const [form, setForm] = useState({
  });

  return (
    <>
      <Logorokys descripcion/>
      <section className="marco1">
        <div className="retro">
          <Link to="/login" className="retroseso">ATRAS</Link><h1>ADMINISTRADOR</h1>
        </div>
        <div className="register-container">
      <form className="register-form">
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre de usuario"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          required
        />
       <Link to="/TablaReservas" className="siguiente">Siguiente</Link>
      </form>
    </div>
      </section>
      
    </>
  );
};
