import { Logorokys} from "../components/Logorokys";
import { Link } from "react-router";
import { useState } from "react";

import "../styles/Reserva.css";

export const Reserva = () => {
  const [form, setForm] = useState({
  });

  return (
    <>
      <Logorokys descripcion/>
      <section className="marco1">
  <div className="retro">
    <Link to="/" className="retroseso">ATRÁS</Link>
  </div>
  <h2>Rellene los campos para su reserva:</h2>

    <form className="register-form">
      <input
        type="text"
        name="nombre"
        id="nombre"
        placeholder="Nombre completos"
        required
      />
      <input
        type="tel"
        name="telefono"
        id="telefono"
        placeholder="Número de teléfono"
        required
      />
      <input
        type="email"
        name="correo"
        id="correo"
        placeholder="Correo electrónico"
        required
      />
      <input
        type="text"
        name="ocasion"
        id="ocasion"
        placeholder="Ocasión"
        required
      />
      <Link to="/Horarios" className="siguiente">Siguiente</Link>
    </form>
</section>

      
    </>
  );
};
