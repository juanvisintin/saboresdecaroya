import { useState, useEffect } from 'react'

export default function Carrusel() {
  const [indiceActual, setIndiceActual] = useState(0)
  const imagenes = ['hero1.png', 'hero2.JPG', 'hero3.JPG', 'hero4.JPG', 'hero5.JPG', 'hero6.JPG']

  // Auto-cambio cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % imagenes.length)
    }, 5000)

    return () => clearInterval(intervalo)
  }, [indiceActual, imagenes.length])

  const irAlAnterior = () => {
    setIndiceActual((prev) => (prev - 1 + imagenes.length) % imagenes.length)
  }

  const irAlSiguiente = () => {
    setIndiceActual((prev) => (prev + 1) % imagenes.length)
  }

  const irAImagen = (indice) => {
    setIndiceActual(indice)
  }

  return (
    <div className="carrusel-contenedor">
      <div className="carrusel-imagenes">
        {imagenes.map((imagen, indice) => (
          <img
            key={indice}
            src={imagen}
            alt={`Hero ${indice + 1}`}
            className={`carrusel-imagen ${indice === indiceActual ? 'activo' : ''}`}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <button className="carrusel-btn carrusel-btn-anterior" onClick={irAlAnterior}>
        &#10094;
      </button>
      <button className="carrusel-btn carrusel-btn-siguiente" onClick={irAlSiguiente}>
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="carrusel-indicadores">
        {imagenes.map((_, indice) => (
          <button
            key={indice}
            className={`carrusel-punto ${indice === indiceActual ? 'activo' : ''}`}
            onClick={() => irAImagen(indice)}
            aria-label={`Ir a imagen ${indice + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
