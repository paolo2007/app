import { Logorokys} from "../components/Logorokys";
import { Link } from "react-router";
import { useState } from "react";

import "../styles/Horarios.css";

export const Horarios = () => {
  const [form, setForm] = useState({
  });

  return (
    <>
      <Logorokys descripcion/>
      <section className="marco2">
  <div className="retro">
    <Link to="/Reserva" className="retroseso">ATRÁS</Link>
  </div>
  <h3>Elige  fecha y hora</h3>

    <form className="register-form">
      <input
        type="date"
        name="dia"
        id="dia"
        required
      />

  <h3>Horas disponibles</h3>
  <div class="horas">
   
    <button>2:00 pm</button>
    <button>2:45 pm</button>
    <button>3:30 pm</button>
    <button>2:15 pm</button>
        <button>6:30 pm</button>
    <button>7:15 pm</button>
    

</div>

      <Link to="/Personas" className="siguiente">Siguiente</Link>
    </form>
</section>

    </>
  );
};
