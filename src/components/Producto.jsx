import { useState, useEffect } from 'react'

export default function Producto({ nombre, descripcion, imagen }) {
    const [modalAbierto, setModalAbierto] = useState(false)
    const [cerrando, setCerrando] = useState(false)
    const [hover, setHover] = useState(false)
    const [isSmall, setIsSmall] = useState(window.innerWidth < 576)

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 576)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && modalAbierto) {
                cerrarModal()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [modalAbierto])

    const abrirModal = () => {
        setModalAbierto(true)
    }

    const cerrarModal = () => {
        setCerrando(true)
        setTimeout(() => {
            setModalAbierto(false)
            setCerrando(false)
        }, 300)
    }

    return (
        <>
            <div
                className="producto-card"
                onClick={abrirModal}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                data-hover={hover}
            >
                <img src={imagen} className="producto-imagen" />
                <div className="producto-overlay">
                    <p className="producto-ver-mas">Ver más...</p>
                </div>
                <h3 className="producto-nombre">{nombre}</h3>
            </div>

            <div className={`modal-overlay ${modalAbierto ? 'activo' : ''} ${cerrando ? 'cerrando' : ''}`} onClick={cerrarModal}>
                <div className={`modal-contenedor-producto ${isSmall ? 'vertical' : 'horizontal'}`} onClick={(e) => e.stopPropagation()}>
                    <button className="modal-cerrar" onClick={cerrarModal}>×</button>
                    <img src={imagen} className="modal-imagen-producto" />
                    <div className="modal-info-producto">
                        <h2>{nombre}</h2>
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
