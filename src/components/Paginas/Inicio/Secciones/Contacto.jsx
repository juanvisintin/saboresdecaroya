import "../../../../styles/Contacto.css"

export default function Contacto() {
    return (
        <>
            <section id="seccion-contacto">
                <img src="picada.webp" className="contacto-background" loading="lazy" alt="Fondo de pantalla de picada" />
                <div className="container">
                    <div className="row pt-5">
                        <h1 className="mt-4">Contacto</h1>
                    </div>

                    <div className="botones-contacto-container">
                        <button
                            className="btn-contacto"
                            onClick={() => window.open('https://wa.link/uxpdv2', '_blank')}
                        >
                            <img src="contacto-wpp.webp" alt="WhatsApp" className="btn-contacto-icon" loading="lazy" />
                            WhatsApp
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>

                        <button
                            className="btn-contacto"
                            onClick={() => window.open('https://instagram.com/saboresdecaroya', '_blank')}
                        >
                            <img src="contacto-instagram.webp" alt="Instagram" className="btn-contacto-icon" loading="lazy" />
                            Instagram
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>

                        <button
                            className="btn-contacto"
                            onClick={() => window.open('https://facebook.com/saboresdecaroya', '_blank')}
                        >
                            <img src="contacto-facebook.webp" alt="Facebook" className="btn-contacto-icon" loading="lazy" />
                            Facebook
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>
                    </div>




                    <div className="row">
                        <div className="col-12">
                            <div className="contenedor-mapa mt-5 mb-5 text-center">
                                <h2 className="mt-2 mb-2 pasa-a-visitarnos">¡Pasá a visitarnos!</h2>
                                <p className="dias-horarios">Te esperamos en <b>Pedro Patat (S) 105</b>,</p>
                                <p>en la esquina de la plaza</p>
                                <iframe
                                    title="Mapa de la ubicación del local"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.112978758603!2d-64.06434402451416!3d-31.023101774445436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943262648b67f569%3A0x769417cfbe265970!2sSabores%20de%20Caroya!5e0!3m2!1ses!2sar!4v1744626418366!5m2!1ses!2sar"
                                    width="800" height="400"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                <h3 className="pt-4 pb-2">Horario de atención</h3>
                                <p className="dias-horarios"><b>Lunes a Sábados</b></p>
                                <p>De 8:00 a 13:00 y de 15:30 a 20:30</p>
                                <p className="dias-horarios"><b>Domingos</b></p>
                                <p>De 9:00 a 14:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}