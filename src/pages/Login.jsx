import { Logorokys } from '../components/Logorokys'
import { Link } from 'react-router';


export const Login = () => {
  return (
    <>
      <Logorokys/>
      <section className="accion-login">
        <h1>!BIENVENIDO
 A ROKYS!</h1>
        <Link to="/Reserva" className="btn btn-login">Reservar</Link>

      </section>
    </>
  );
};
