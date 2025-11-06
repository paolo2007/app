import { Logorokys} from "../components/Logorokys";
import { Link } from "react-router";
import { useState } from "react";

import "../styles/TablaReservas.css";

export const TablaReservas = () => {
  // Datos de ejemplo (puedes reemplazarlos por datos reales)
  const [reservas, setReservas] = useState([
     {
    codigo: "A1B2C3",
    nombre: "Carlos Ramírez",
    telefono: "987654321",
    correo: "carlos@gmail.com",
    ocasion: "Cumpleaños",
    fecha: "2025-11-06",
    hora: "19:00",
    personas: 4,
  },
  {
    codigo: "D4E5F6",
    nombre: "María Torres",
    telefono: "965432187",
    correo: "maria@gmail.com",
    ocasion: "Cena Familiar",
    fecha: "2025-11-08",
    hora: "20:30",
    personas: 6,
  },
  {
    codigo: "G7H8I9",
    nombre: "Luis Fernández",
    telefono: "912345678",
    correo: "luisf@gmail.com",
    ocasion: "Aniversario",
    fecha: "2025-11-10",
    hora: "18:45",
    personas: 2,
  },
  {
    codigo: "J1K2L3",
    nombre: "Sofía Paredes",
    telefono: "954321789",
    correo: "sofiap@gmail.com",
    ocasion: "Reunión de amigos",
    fecha: "2025-11-09",
    hora: "21:00",
    personas: 5,
  },
  {
    codigo: "M4N5O6",
    nombre: "Andrés López",
    telefono: "998877665",
    correo: "andresl@gmail.com",
    ocasion: "Cena romántica",
    fecha: "2025-11-07",
    hora: "20:00",
    personas: 2,
  },
  {
    codigo: "P7Q8R9",
    nombre: "Valeria Rojas",
    telefono: "933221144",
    correo: "valeriar@gmail.com",
    ocasion: "Cumpleaños infantil",
    fecha: "2025-11-12",
    hora: "17:30",
    personas: 8,
  },
  {
    codigo: "S1T2U3",
    nombre: "Miguel Castillo",
    telefono: "977665544",
    correo: "miguelc@gmail.com",
    ocasion: "Cena de trabajo",
    fecha: "2025-11-11",
    hora: "19:45",
    personas: 3,
  },
  {
    codigo: "V4W5X6",
    nombre: "Ana Gutiérrez",
    telefono: "911223344",
    correo: "anag@gmail.com",
    ocasion: "Almuerzo familiar",
    fecha: "2025-11-13",
    hora: "13:00",
    personas: 7,
  },
  {
    codigo: "Y7Z8A9",
    nombre: "José Morales",
    telefono: "944556677",
    correo: "josem@gmail.com",
    ocasion: "Graduación",
    fecha: "2025-11-15",
    hora: "18:00",
    personas: 10,
  },
  {
    codigo: "B1C2D3",
    nombre: "Camila Navarro",
    telefono: "955667788",
    correo: "camilan@gmail.com",
    ocasion: "Cena con amigos",
    fecha: "2025-11-14",
    hora: "21:15",
    personas: 5,
  },
  ]);

  // Funciones básicas (ejemplo)
  const eliminarReserva = (codigo) => {
    const nuevas = reservas.filter((r) => r.codigo !== codigo);
    setReservas(nuevas);
  };

  const editarReserva = (codigo) => {
    alert(`Editar reserva con código: ${codigo}`);
  };

  return (
    <section className="tabla-reservas">
      <Link to="/Login" className="Regreso ">ATRÁS</Link>
      <h1 className="titulo-tabla">LISTA DE RESERVAS</h1>

      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre completo</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Ocasión</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Personas</th>
            <th>Editor</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva, index) => (
            <tr key={index}>
              <td>{reserva.codigo}</td>
              <td>{reserva.nombre}</td>
              <td>{reserva.telefono}</td>
              <td>{reserva.correo}</td>
              <td>{reserva.ocasion}</td>
              <td>{reserva.fecha}</td>
              <td>{reserva.hora}</td>
              <td>{reserva.personas}</td>
              <td>
                <button className="btn-editar">Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

