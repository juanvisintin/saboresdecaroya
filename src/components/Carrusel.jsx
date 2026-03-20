import { useState, useEffect, useRef } from 'react'

export default function Carrusel() {
    const [indiceActual, setIndiceActual] = useState(0)
    const imagenes = ['hero1.webp', 'hero2.webp', 'hero3.webp', 'hero5.webp', 'hero6.webp']
    const intervaloRef = useRef(null)

    // Función para iniciar/reiniciar el intervalo
    const iniciarIntervalo = () => {
        if (intervaloRef.current) clearInterval(intervaloRef.current)
        intervaloRef.current = setInterval(() => {
            setIndiceActual((prev) => (prev + 1) % imagenes.length)
        }, 5000)
    }

    // Auto-cambio cada 5 segundos
    useEffect(() => {
        iniciarIntervalo()
        return () => {
            if (intervaloRef.current) clearInterval(intervaloRef.current)
        }
    }, [imagenes.length])

    const irAlAnterior = () => {
        setIndiceActual((prev) => (prev - 1 + imagenes.length) % imagenes.length)
        iniciarIntervalo()
    }

    const irAlSiguiente = () => {
        setIndiceActual((prev) => (prev + 1) % imagenes.length)
        iniciarIntervalo()
    }

    const irAImagen = (indice) => {
        setIndiceActual(indice)
        iniciarIntervalo()
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
                        fetchpriority="high"
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
