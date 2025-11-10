import { Logorokys } from "../components/Logorokys";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Personas.css";

export const Personas = () => {
  const [cantidad, setCantidad] = useState(2);
  const [mostrarAviso, setMostrarAviso] = useState(false);

  const sumar = () => {
    if (cantidad < 8) {
      const nuevaCantidad = cantidad + 1;
      setCantidad(nuevaCantidad);
      if (nuevaCantidad === 8) {
        setMostrarAviso(true);
      } else {
        setMostrarAviso(false);
      }
    }
  };

  const restar = () => {
    if (cantidad > 2) {
      const nuevaCantidad = cantidad - 1;
      setCantidad(nuevaCantidad);
      setMostrarAviso(false);
    }
  };

  return (
    <>
      <div className="logo2">
        <Logorokys />
      </div>

      <section className="marco4">
        <div className="retro">
          <Link to="/Horarios" className="retroseso">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </Link>
        </div>

        <h5>¿Cuántas personas?</h5>

        <div className="contador">
          <button onClick={restar} className={cantidad <= 2 ? "gris" : ""} disabled={cantidad <= 2}>
            −
          </button>
          <span>{cantidad}</span>
          <button onClick={sumar} className={cantidad >= 8 ? "gris" : ""} disabled={cantidad >= 8}>
            +
          </button>
        </div>

        {/* ✅ Párrafo de aviso centrado */}
        {mostrarAviso && (
          <p className="aviso-whatsapp">
            Superaste el número de personas{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=%2B51981440500&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctate con nosotros para mas personas
            </a>
          </p>
        )}

        <Link
          to="/Datos"
          className="siguiente2"
          onClick={() => {
            const reserva = JSON.parse(localStorage.getItem("reserva")) || {};
            localStorage.setItem("reserva", JSON.stringify({ ...reserva, cantidad }));
          }}
        >
          Siguiente
        </Link>
      </section>
    </>
  );
};
