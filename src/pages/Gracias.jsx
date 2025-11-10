import { Logorokys } from '../components/Logorokys';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../styles/Gracias.css";

export const Gracias = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancelarClick = () => setModalVisible(true);
  const cerrarModal = () => setModalVisible(false);

  return (
    <>
      <div className='logo4'>
        <Logorokys />
      </div>

      <section className="marco5">
        <div className="icono-exito">
          <svg xmlns="http://www.w3.org/2000/svg" width={90} height={90} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M9 12l2 2l4 -4" />
          </svg>
        </div>

        <h2>RESERVA EXITOSA</h2>
        <p>Te enviaremos el código de tu reserva a tu número telefónico.</p>

        <div className="botones-exito">
          <button className="cancelar" onClick={handleCancelarClick}>CANCELAR</button>
          <Link to="/" className="inicio">VOLVER AL INICIO</Link>
        </div>
      </section>

      {modalVisible && (
        <div className="modal-fondo">
          <div className="modal-contenido">
            <h3>¿Estás seguro de cancelar la reserva?</h3>
            <div className="modal-botones">
              <Link to="/Cancelacion" className="modal-confirmar">
                cancelar
              </Link>
              <button className="modal-cancelar" onClick={cerrarModal}>
                volver
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
