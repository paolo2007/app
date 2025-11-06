import { Logorokys } from '../components/Logorokys'
import { Link } from 'react-router';


export const Login = () => {
  return (
    <>
      <Logorokys/>
      <section className="accion-login">
        <Link to="/Reserva" className="btn btn-login">Reservar</Link>
        <span>o</span>
        <Link to="/Admi" className="btn btn-create-account">Administrador</Link>
      </section>
    </>
  );
};
