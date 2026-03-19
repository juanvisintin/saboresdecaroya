import { useState, useEffect, useCallback } from 'react'
import "../../../../styles/Nosotros.css"

export default function Nosotros() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [modalAbierto, setModalAbierto] = useState(false)
    const [cerrando, setCerrando] = useState(false)

    const abrirModal = useCallback(() => {
        setModalAbierto(true)
    }, [])

    const cerrarModal = useCallback(() => {
        setCerrando(true)
        setTimeout(() => {
            setModalAbierto(false)
            setCerrando(false)
        }, 300)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && modalAbierto) {
                cerrarModal()
            }
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [modalAbierto, cerrarModal])

    return (
        <>
            <section id="seccion-nosotros">
                <div className="container">
                    <div className="row pt-5 pb-5" id='nosotros'>
                        <div className="col-12">
                            <h1>Nosotros</h1>
                            <hr />
                        </div>
                        <div className="col-12 col-md-9">
                            <p>Sabores de Caroya es un emprendimiento familiar dedicado a la elaboración artesanal de alimentos tradicionales caroyenses, especializándose en el <b>Salame Típico de Colonia Caroya</b> y complementando este producto emblemático con exquisitos jamones, bondiolas, lomitos, dulces y conservas.</p>

                            <p>La calidad de las materias primas utilizadas, el cuidado en la elaboración y maduración y el tiempo de estacionamiento en sótanos de los mismos, garantizan una calidad y sabor inigualables.</p>

                            <p>No se utiliza ningún tipo de químicos ni aditivos artificiales durante la elaboración y conservación lo cual garantiza un producto natural y artesanal por excelencia.</p>
                            <button className="btn-conoce-mas mt-4">
                                Conocé más
                                <div className="arrow-wrapper">
                                    <div className="arrow"></div>
                                </div>
                            </button>
                        </div>


                        <div className="col-12 col-md-3">
                            {isMobile ? (
                                <img
                                    src="exterior-negocio.jpg"
                                    className="foto" loading="lazy"
                                />
                            ) : (
                                <img
                                    src="exterior-negocio.jpg"
                                    className="foto"
                                    onClick={abrirModal} loading="lazy"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <div className={`modal-overlay ${modalAbierto ? 'activo' : ''} ${cerrando ? 'cerrando' : ''}`} onClick={cerrarModal}>
                <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-cerrar" onClick={cerrarModal}>&times;</button>
                    <img src="exterior-negocio.jpg" className="modal-imagen" loading="lazy" />
                </div>
            </div>
        </>
    )
}