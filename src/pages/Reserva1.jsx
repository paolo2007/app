import { Logorokys} from "../components/Logorokys";
import { Link } from "react-router";
import { useState } from "react";

import "../styles/Reserva1.css";

export const Reserva1 = () => {
  const [form, setForm] = useState({
  });

  return (
    <>
      <Logorokys descripcion/>
       <section className="marco1">
  <div className="retro">
    <Link to="/Reserva" className="retroseso">ATRÁS</Link>
    <h1>RESERVANDO MESA</h1>
  </div>

  <div className="register-container">
    <form className="register-form">
      <input
        type="date"
        name="dia"
        id="dia"
        required
      />
      <input
        type="number"
        name="personas"
        id="personas"
        placeholder="Número de personas"
        min="1"
        required
      />
      <Link to="/Gracias" className="siguiente">Siguiente</Link>
    </form>
  </div>
</section>

    </>
  );
};
