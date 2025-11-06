import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

// pages
import { Login } from "./pages/Login";
import { Admi } from "./pages/Admi";
import { Reserva } from "./pages/Reserva";
import { Reserva1 } from "./pages/Reserva1";
import { Gracias } from "./pages/Gracias";
import { TablaReservas } from "./pages/TablaReservas";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="Admi" element={<Admi />} />
        <Route path="Reserva" element={<Reserva />} />
        <Route path="Reserva1" element={<Reserva1 />} />
        <Route path="Gracias" element={<Gracias />} />
        <Route path="TablaReservas" element={<TablaReservas />} />
      </Routes>
    </>
  );
}

export default App;
