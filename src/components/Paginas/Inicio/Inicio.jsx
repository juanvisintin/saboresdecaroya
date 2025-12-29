import Hero from "./Secciones/Hero"
import Nosotros from "./Secciones/Nosotros"
import Productos from "./Secciones/Productos"
import Contacto from "./Secciones/Contacto"
import Navbar from "../../Navbar"

export default function Inicio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Nosotros />
      <Productos />
      <Contacto />
    </>
  )
}