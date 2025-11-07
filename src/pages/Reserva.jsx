import { Logorokys } from "../components/Logorokys";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

import "../styles/Reserva.css";

export const Reserva = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    ocasion: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSiguiente = (e) => {
    e.preventDefault();

    const { nombre, telefono, correo, ocasion } = form;

    if (!nombre || !telefono || !correo || !ocasion) {
      setError("Por favor, complete todos los campos antes de continuar.");
    } else {
      setError("");
      navigate("/Horarios");
    }
  };

  return (
    <>
      <Logorokys descripcion />
      <section className="marco1">
        <div className="retro">
          <Link to="/" className="retroseso">ATRÁS</Link>
        </div>

        <h2>Rellene los campos para su reserva:</h2>

        <form className="register-form" onSubmit={handleSiguiente}>
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

          {/* Botón para continuar */}
          <button type="submit" className="siguiente">Siguiente</button>

          {/* Mensaje de error */}
          {error && <p className="error">{error}</p>}
        </form>
      </section>
    </>
  );
};
