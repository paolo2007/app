import { Logorokys } from "../components/Logorokys";
import { Link } from "react-router";
import { useState } from "react";

import "../styles/Personas.css";

export const Personas = () => {
  const [cantidad, setCantidad] = useState(2);
  const [aviso, setAviso] = useState("");

  const sumar = () => {
    if (cantidad < 8) {
      const nuevaCantidad = cantidad + 1;
      setCantidad(nuevaCantidad);

      if (nuevaCantidad === 8) {
        setAviso("Superaste las 8 personas, por favor contáctanos para hacer tu reserva.");
      } else {
        setAviso("");
      }
    }
  };

  const restar = () => {
    if (cantidad > 2) {
      const nuevaCantidad = cantidad - 1;
      setCantidad(nuevaCantidad);
      setAviso("");
    }
  };

  return (
    <>
      <Logorokys descripcion />
      <section className="marco4">
        <div className="retro">
          <Link to="/Horarios" className="retroseso">ATRÁS</Link>
        </div>

        <h5>¿Cuántas personas?</h5>

        <div className="contador">
          {/* Botón MENOS */}
          <button
            onClick={restar}
            className={cantidad <= 2 ? "gris" : ""}
            disabled={cantidad <= 2}
          >
            −
          </button>

          <span>{cantidad}</span>

          {/* Botón MÁS */}
          <button
            onClick={sumar}
            className={cantidad >= 8 ? "gris" : ""}
            disabled={cantidad >= 8}
          >
            +
          </button>
        </div>

        {/* Mensaje de aviso */}
        {aviso && <p className="aviso">{aviso}</p>}

        <Link to="/Gracias" className="siguiente2">Siguiente</Link>
      </section>
    </>
  );
};
