import { Logorokys } from '../components/Logorokys'
import { Link } from 'react-router';


export const Login = () => {
  return (
    <>
    <div className='logo'>
      <Logorokys/>
    </div>
      <section className="accion-login">
        <h1>!BIENVENIDO
        A ROKYS!</h1>
        <Link to="/Reserva" className="btn btn-login">Reservar</Link>

      </section>
    </>
  );
};
