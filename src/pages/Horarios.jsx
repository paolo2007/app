import { Logorokys } from "../components/Logorokys";
import { Link } from "react-router";
import { useState } from "react";
import "../styles/Horarios.css";

export const Horarios = () => {
  const [selected, setSelected] = useState(null); // guarda la hora seleccionada
  const [fecha, setFecha] = useState(""); // guarda la fecha elegida
  const [aviso, setAviso] = useState(""); // mensaje de error

  // ✅ lista de horas disponibles
  const horas = ["2:00p.m ", "2:45p.m", "5:00p.m", "4:15p.m", "6:30p.m", "7:15p.m"];

  // ✅ obtener la fecha de hoy en formato YYYY-MM-DD para limitar el input
  const today = new Date().toISOString().split("T")[0];

  const handleNext = (e) => {
    e.preventDefault();

    if (!fecha || selected === null) {
      setAviso("Por favor selecciona una fecha y una hora antes de continuar.");
    } else {
      setAviso("");

      // 🔹 Guardamos los datos seleccionados en localStorage
      const reservaGuardada = JSON.parse(localStorage.getItem("reserva")) || {};
      const datosCompletos = {
        ...reservaGuardada,
        fecha: fecha,
        hora: horas[selected],
      };

      localStorage.setItem("reserva", JSON.stringify(datosCompletos));

      // 🔹 Redirigimos a la siguiente página
      window.location.href = "/Personas";
    }
  };

  return (
    <>
      <div className='logo1'>
      <Logorokys/>
    </div>

      <section className="marco2">
        <div className="retro">
          <Link to="/Reserva" className="retroseso"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg></Link>
        </div>

        <h3>Elige fecha y hora</h3>

        <form className="register-form" onSubmit={handleNext}>
          <input
            type="date"
            name="dia"
            id="dia"
            required
            value={fecha}
            min={today} // ✅ evita seleccionar fechas pasadas
            onChange={(e) => setFecha(e.target.value)}
          />

          <div className="horas">
            <h3>Horas disponibles</h3>
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
