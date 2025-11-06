import { Logorokys} from "../components/Logorokys";
import { Link } from "react-router";
import { useState } from "react";

import "../styles/Gracias.css";

export const Gracias = () => {
  const [form, setForm] = useState({
  });

  return (
    <>
      <Logorokys descripcion/>
      <section className="marco1">
  <div className="retro">
    <Link to="/" className="retroseso">ATRÁS</Link>
    <h1> MESA RESERVADA</h1>
  </div>
   <div className="texto"><p>GRACIAS POR SU RESERVA </p></div>
      <div className="valor"><p>SU CODIGO ES: 968967</p></div>
     <Link to="/Login" className="siguiente">Siguiente</Link>
</section>
    </>
  );
};
