import { useState, useEffect } from "react"

export default function Inicio() {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [cerrando, setCerrando] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const abrirModal = () => {
    if (!isMobile) {
      setModalAbierto(true)
    }
  }

  const cerrarModal = () => {
    setCerrando(true)
    setTimeout(() => {
      setModalAbierto(false)
      setCerrando(false)
    }, 400)
  }

  return (
    <>
      <div className="contenedor-foto">
        <img src="inicio2.png" className="foto-inicio" />
      </div>

      <section id='nosotros-section'>
        <div className="container-fluid">
          <div className="row mt-5" id='nosotros'>
            <div className="col-12">
              <h1>Sobre nosotros</h1>
              <hr />
            </div>
            <div className="col-12 col-md-9">
              <p>Sabores de Caroya es un emprendimiento familiar dedicado a la elaboración artesanal de alimentos tradicionales caroyenses, especializándose en el <b>Salame Típico de Colonia Caroya</b> y complementando este producto emblemático con exquisitos jamones, bondiolas, lomitos, dulces y conservas.</p>

              <p>La calidad de las materias primas utilizadas, el cuidado en la elaboración y maduración y el tiempo de estacionamiento en sótanos de los mismos, garantizan una calidad y sabor inigualables.</p>

              <p>No se utiliza ningún tipo de químicos ni aditivos artificiales durante la elaboración y conservación lo cual garantiza un producto natural y artesanal por excelencia.</p>
            </div>

            <div className="col-12 col-md-3">
              {isMobile ? (
                <img
                  src="exterior-negocio.jpg"
                  className="foto"
                />
              ) : (
                <img
                  src="exterior-negocio.jpg"
                  className="foto"
                  onClick={abrirModal}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section id='productos'>
        <div className="productos-container">
          <img src="picada.JPG" className="productos-background" alt="Productos" />
          <h1 className="productos-titulo">Productos</h1>
          <hr className="productos-hr" />
          <div className="productos-content">
            <p>Nos buscaste por los salames, pero te vamos a demostrar que somos más que una receta bonita...</p>

            <p>Contamos con más de 5 mil millones de productos. Todos los fiambres son de elaboración propia, y te proponemos que los acompañes con los mejores productos regionales que vas a conseguir.</p>

            <p>Quesos, vinos, panes, aceitunas, escabeches... ¿hace falta seguir? Pasá, te invitamos a conocerlos</p>
          </div>
        </div>
      </section>

      <section id='contacto-section'>
        <div className="container-fluid">
          <div className="row" id='contacto'>
            <div className="col-12 mt-5">
              <h1 className="text-center">Contacto</h1>
              <hr />
            </div>

            <div className="col-12 col-lg-4">
              <div className="tarjeta-contacto">
                <img src="contacto-wpp.png" className="foto" />
                <div className="texto">
                  <h2>WhatsApp</h2>
                  <hr />
                  <p>Escribinos al <a href="https://wa.link/grgzh9" target="_blank">3525 - 502962</a></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="tarjeta-contacto">
                <img src="contacto-instagram.png" className="foto" />
                <div className="texto">
                  <h2>Instagram</h2>
                  <hr />
                  <p>Encontranos como <a href="https://www.instagram.com/saboresdecaroya" target="_blank">@saboresdecaroya</a></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="tarjeta-contacto">
                <img src="contacto-telefono.png" className="foto" />
                <div className="texto">
                  <h2>Teléfono</h2>
                  <hr />
                  <p>Llamanos al <b>3525 - 464301</b></p>
                </div>
              </div>
            </div>

            <div className="col-12 mt-4 mb-5 text-center">
              <h1 className="mb-2">¡Pasá a visitarnos!</h1>
              <hr className="mb-4" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.112978758603!2d-64.06434402451416!3d-31.023101774445436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943262648b67f569%3A0x769417cfbe265970!2sSabores%20de%20Caroya!5e0!3m2!1ses!2sar!4v1744626418366!5m2!1ses!2sar"
                width="600" height="350"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mapa">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div className={`modal-overlay ${modalAbierto ? 'activo' : ''} ${cerrando ? 'cerrando' : ''}`} onClick={cerrarModal}>
        <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
          <button className="modal-cerrar" onClick={cerrarModal}>&times;</button>
          <img src="exterior-negocio.jpg" className="modal-imagen" />
        </div>
      </div>
    </>
  )
}