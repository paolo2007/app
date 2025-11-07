import { Logorokys } from '../components/Logorokys'
import { Link } from 'react-router';

import "../styles/Cancelacion.css";

export const Cancelacion = () => {
  return (
    <>
      <Logorokys/>
      <section className="marco6">
        <div className="icono-exito cancelado">✖</div>
        <h2>RESERVA CANCELADA</h2>
        <p>La reserva ha sido cancelada correctamente</p>

        <div className="botones-exito">
          <Link to="/" className="inicio">VOLVER AL INICIO</Link>
        </div>
      </section>
    </>
  );
};
