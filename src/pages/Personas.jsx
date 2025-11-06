import { Logorokys} from "../components/Logorokys";
import { Link } from "react-router";
import { useState } from "react";

import "../styles/Personas.css";

export const Personas = () => {
  const [form, setForm] = useState({
  });

  return (
    <>
      <Logorokys descripcion/>
      <section className="marco4">
  <div className="retro">
    <Link to="/Horarios" className="retroseso">ATRÁS</Link>
  </div>
  <h5>¿Cuántas personas?</h5>
  <div class="contador">
    <button id="restar">−</button>
    <span id="cantidad">2</span>
    <button id="sumar">+</button>
</div>

     <Link to="/Gracias" className="siguiente2">Siguiente</Link>
</section>
    </>
    
  );
};
