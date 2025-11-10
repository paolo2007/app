import { Logorokys } from "../components/Logorokys";
import { Link } from "react-router-dom"; // 🔹 asegúrate de usar react-router-dom
import "../styles/Datos.css";

export const Datos = () => {
  // 🔹 obtenemos todos los datos guardados en localStorage
  const reserva = JSON.parse(localStorage.getItem("reserva")) || {};

  return (
    <>
      <div className='logo4'>
      <Logorokys/>
    </div>

      <section className="marco7">
        <div className="retro">
          <Link to="/Personas" className="retroseso"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg></Link>
        </div>

        <h8>Datos de tu reserva</h8>

        <div className="info-reserva">
          <p><strong>Nombre:</strong> {reserva.nombre || "No especificado"}</p>
          <p><strong>Teléfono:</strong> {reserva.telefono || "No especificado"}</p>
          <p><strong>Correo:</strong> {reserva.correo || "No especificado"}</p>
          <p><strong>Ocasión:</strong> {reserva.ocasion || "No especificado"}</p>
          <p><strong>Fecha:</strong> {reserva.fecha || "No seleccionada"}</p>
          <p><strong>Hora:</strong> {reserva.hora || "No seleccionada"}</p>
          <p><strong>Cantidad de personas:</strong> {reserva.cantidad || "No especificada"}</p>
        </div>
        <Link 
          to="/Gracias" 
          className="siguiente8"
          onClick={() => localStorage.setItem("Reserva", JSON.stringify(reserva))}
        >
          Siguiente
        </Link>
      </section>
    </>
  );
};
