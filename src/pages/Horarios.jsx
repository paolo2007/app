import { Logorokys } from "../components/Logorokys";
import { Link } from "react-router";
import { useState } from "react";

import "../styles/Horarios.css";

export const Horarios = () => {
  const [selected, setSelected] = useState(null); // guarda la hora seleccionada
  const [fecha, setFecha] = useState(""); // guarda la fecha elegida
  const [aviso, setAviso] = useState(""); // mensaje de error

  const horas = ["2:00 pm", "2:45 pm", "3:30 pm", "2:15 pm", "6:30 pm", "7:15 pm"];

  const handleNext = (e) => {
    e.preventDefault();

    if (!fecha || selected === null) {
      setAviso("Por favor selecciona una fecha y una hora antes de continuar.");
    } else {
      setAviso("");
      window.location.href = "/Personas"; // redirige si todo está completo
    }
  };

  return (
    <>
      <Logorokys descripcion />
      <section className="marco2">
        <div className="retro">
          <Link to="/Reserva" className="retroseso">ATRÁS</Link>
        </div>

        <h3>Elige fecha y hora</h3>

        <form className="register-form" onSubmit={handleNext}>
          <input
            type="date"
            name="dia"
            id="dia"
            required
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          <h3>Horas disponibles</h3>
          
          <div className="horas">
            {horas.map((hora, index) => (
              <button
                key={index}
                type="button"
                className={selected === index ? "btn-hora seleccionado" : "btn-hora"}
                onClick={() => setSelected(index)}
              >
                {hora}
              </button>
            ))}
          </div>

          {aviso && <p className="aviso">{aviso}</p>}

          <button type="submit" className="siguiente">Siguiente</button>
        </form>
      </section>
    </>
  );
};
