import { useState, useEffect } from "react"
import Producto from "../../Producto"
import Carrusel from "../../Carrusel"

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
    }, 300)
  }

  return (
    <>
      <section id="seccion-hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Carrusel />
            </div>
          </div>
        </div>
      </section>


      <section id="seccion-nosotros">
        <div className="container">
          <div className="row pt-5 pb-5" id='nosotros'>
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

      <section id='seccion-productos'>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-12">
              <h1 className="productos-titulo">Productos</h1>
              <hr className="mb-5" />
              <div className="productos-content mb-4">
                <p>Toda la linea de productos son elaborados íntegramente en Colonia Caroya cuidando la calidad de los mismos respetando las disposiciones higiénico-sanitarias para ofrecerles productos inocuos y de alta calidad.</p>

                <p>Los embutidos (salame, bondiola, jamón, lomito, etc), dulces y conservas son elaborados por Sabores de Caroya.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 productos-grid">
              <Producto
                nombre="Salame Típico"
                descripcion="Salame típico de Colonia Caroya. Elaborado con carne de vaca y de cerdo y tocino de cerdo. Embutido en tripa natural y estacionado en sótanos. Condimentado con sal, pimienta blanca y ajo macerado en vino blanco. No contiene conservantes ni aditivos."
                imagen="salame1.JPG"
              />
              <Producto
                nombre="Jamón Crudo"
                descripcion="Jamón de cerdo deshuesado. Condimentado con sal y pimienta blanca, estacionado en sótanos entre tres y seis meses"
                imagen="jamon1.JPG"
              />
              <Producto
                nombre="Bondiola"
                descripcion="Bondiola de cerdo. Condimentada con sal y pimienta blanca, estacionada en sótanos entre tres y seis meses."
                imagen="bondiola1.JPG"
              />
              <Producto
                nombre="Vacío arrollado"
                descripcion="Vacío arrollado de cerdo. Condimentado con sal y pimienta blanca, estacionado en sótanos entre cuatro y ocho meses."
                imagen="vacio1.JPG"
              />
            </div>
          </div>
        </div>
      </section >

      <section id="seccion-contacto">
        <img src="picada.JPG" className="contacto-background" alt="Contacto" />
        <div className="container">
          <div className="row pt-5">
            <h1 className="mt-4">Contacto</h1>
            <hr className="mb-5" />

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

            <div className="col-12 mt-5 mb-5 text-center">
              <div className="row contenedor-mapa">
                <h1 className="mb-2 pasa-a-visitarnos">¡Pasá a visitarnos!</h1>
                <p className="dias-horarios">Te esperamos en <b>Pedro Patat (S) 105</b>,</p>
                <p>en la esquina de la plaza</p>
                <iframe
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