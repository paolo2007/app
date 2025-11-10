import { Logorokys } from '../components/Logorokys'
import { Link } from 'react-router';

import "../styles/Cancelacion.css";

export const Cancelacion = () => {
  return (
    <>
      <div className='logo4'>
      <Logorokys/>
    </div>
      <section className="marco6">
        <div className="icono-exito cancelado"><svg xmlns="http://www.w3.org/2000/svg" width={90} height={90} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 10l4 4m0 -4l-4 4" /></svg></div>
        <h7>RESERVA CANCELADA</h7>
        <p>La reserva ha sido cancelada correctamente</p>

        <div className="botones-exito">
          <Link to="/" className="inicio">VOLVER AL INICIO</Link>
        </div>
      </section>
    </>
  );
};
