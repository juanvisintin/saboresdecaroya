import { memo } from 'react'
import Hero from "./Secciones/Hero"
import Nosotros from "./Secciones/Nosotros"
import Productos from "./Secciones/Productos"
import Contacto from "./Secciones/Contacto"
import Navbar from "../../Navbar"

// Memoizar componentes para evitar re-renders innecesarios
const MemoHero = memo(Hero)
const MemoNosotros = memo(Nosotros)
const MemoProductos = memo(Productos)
const MemoContacto = memo(Contacto)
const MemoNavbar = memo(Navbar)

export default function Inicio() {
  return (
    <>
      <MemoNavbar />
      <main>
        <MemoHero />
        <MemoNosotros />
        <MemoProductos />
        <MemoContacto />
      </main>
    </>
  )
}