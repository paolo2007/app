import { Logorokys } from '../components/Logorokys'
import { Link } from 'react-router';

import "../styles/Gracias.css";

export const Gracias = () => {
  return (
    <>
      <Logorokys/>
      <section className="marco5">
      <div className="icono-exito">✔</div>
      <h2>RESERVA EXITOSA</h2>
      <p>En la bandeja de tu correo te enviamos tu reserva</p>

      <div className="botones-exito">
        <Link to="/Cancelacion" className="cancelar">CANCELAR</Link>
        <Link to="/" className="inicio">VOLVER AL INICIO</Link>
      </div>
    </section>
    </>
  );
};