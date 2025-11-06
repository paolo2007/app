import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

// pages
import { Login } from "./pages/Login";
import { Reserva } from "./pages/Reserva";
import { Horarios } from "./pages/Horarios";
import { Personas } from "./pages/Personas";
import { Gracias } from "./pages/Gracias";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="Reserva" element={<Reserva />} />
        <Route path="Horarios" element={<Horarios />} />
        <Route path="Personas" element={<Personas />} />
        <Route path="Gracias" element={<Gracias />} />
      </Routes>
    </>
  );
}

export default App;
