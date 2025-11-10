import { Logorokys } from "../components/Logorokys";
import { Link } from "react-router";
import { useState } from "react";
import "../styles/Reserva.css";

export const Reserva = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    ocasion: "",
  });

  const [error, setError] = useState("");
  const [puedeIr, setPuedeIr] = useState(false); // controla si se puede ir a Horarios

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleValidar = (e) => {
    e.preventDefault();
    const { nombre, telefono, correo, ocasion } = form;

    if (!nombre || !telefono || !correo || !ocasion) {
      setError("Por favor, complete todos los campos antes de continuar.");
      setPuedeIr(false);
    } else {
      setError("");
      setPuedeIr(true);
      localStorage.setItem("reserva", JSON.stringify(form)); // guarda los datos
    }
  };

  return (
    <>
      <div className='logo1'>
      <Logorokys/>
    </div>
      <section className="marco1">
        <div className="retro">
          <Link to="/" className="retroseso"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg></Link>
        </div>
        <h2>Rellene los campos para su reserva:</h2>
        <form className="register-form" onSubmit={handleValidar}>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="telefono"
            id="telefono"
            placeholder="Número de teléfono"
            value={form.telefono}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="correo"
            id="correo"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="ocasion"
            id="ocasion"
            placeholder="Ocasión"
            value={form.ocasion}
            onChange={handleChange}
            required
          />

          {/* 🔹 Si puede ir, se muestra el Link */}
          {puedeIr ? (
            <Link to="/Horarios" className="siguiente">
              Siguiente
            </Link>
          ) : (
            <button type="submit" className="siguiente">
              Siguiente
            </button>
          )}

          {error && <p className="error">{error}</p>}
        </form>
      </section>
    </>
  );
};
