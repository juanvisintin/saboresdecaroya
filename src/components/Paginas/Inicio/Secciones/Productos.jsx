import Producto from "../../../Producto"
import "../../../../styles/Productos.css"

export default function Productos() {
    return (
        <>
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
                                nombre="Salame Tradicional"
                                descripcion="Salame típico de Colonia Caroya. Elaborado con carne de vaca y de cerdo y tocino de cerdo. Embutido en tripa natural y estacionado en sótanos. Condimentado con sal, pimienta blanca y ajo macerado en vino blanco. No contiene conservantes ni aditivos."
                                imagen="producto-salame.JPG"
                            />
                            <Producto
                                nombre="Jamón Crudo"
                                descripcion="Jamón de cerdo deshuesado. Condimentado con sal y pimienta blanca, estacionado en sótanos entre tres y seis meses"
                                imagen="producto-jamon.JPG"
                            />
                            <Producto
                                nombre="Bondiola"
                                descripcion="Bondiola de cerdo. Condimentada con sal y pimienta blanca, estacionada en sótanos entre tres y seis meses."
                                imagen="producto-bondiola.JPG"
                            />
                            <Producto
                                nombre="Vacío Arrollado"
                                descripcion="Vacío arrollado de cerdo. Condimentado con sal y pimienta blanca, estacionado en sótanos entre cuatro y ocho meses."
                                imagen="producto-vacio.JPG"
                            />
                            <Producto
                                nombre="Lomito"
                                descripcion="Lomito de cerdo. Condimentado con sal y pimienta blanca, estacionado en sótanos entre tres y seis meses."
                                imagen="producto-lomito.JPG"
                            />
                            <Producto
                                nombre="Panceta"
                                descripcion="Panceta de cerdo arrollada con el lomito adentro. Fiambre condimentado con sal y pimienta blanca, estacionado en sótanos entre cuatro y ocho meses."
                                imagen="producto-panceta.JPG"
                            />
                            <Producto
                                nombre="Quesos"
                                descripcion="Quesos de vaca artesanales. Experiencia sensorial similar a la de un sardo fresco o un holanda. Naturales y saborizados con especias: pimienta en grano, orégano, ají, albahaca, provenzal."
                                imagen="producto-quesos.JPG"
                            />
                            <Producto
                                nombre="Vinos"
                                descripcion="Bebamos de las copas lindas. Vinos de las mejores bodegas caroyenses. Muchos de ellos premiados nacional e internacionalmente. El mejor acompañamiento para una picada."
                                imagen="producto-vino.JPG"
                            />
                            <Producto
                                nombre="Conservas"
                                descripcion="Conservas dulces y saladas. Mermeladas y frutas en almibar, escabeches de carne y verdura, antipastos, verduras en vinagre y en aceite en módicas presentaciones de 1/4, 1/2 o 1kg. Consultar disponibilidad"
                                imagen="producto-conservasDulces.JPG"
                            />
                            <Producto
                                nombre="Tablas"
                                descripcion="Tablas de algarrobo curadas con cera de abeja. Artesanales, añorables y perpetuas."
                                imagen="producto-tablas.JPG"
                            />
                            <Producto
                                nombre="Licores"
                                descripcion="Licores y grapas. Bebidas alcohólicas de graduación considerable. Auyentan el frío y a Mandinga (o lo llaman, dependiendo de la hora y cantidad)."
                                imagen="producto-licores.JPG"
                            />
                            <Producto
                                nombre="Picadas"
                                descripcion="Infinitas combinaciones de fiambres, embutidos, quesos, conservas, vinos, risas, amistades, reuniones y encuentros."
                                imagen="producto-picada.JPG"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-5 text-center">
                            <button 
                                className="btn-todos-los-productos"
                                onClick={() => window.open('https://drive.google.com/file/d/16bT5rfunjpYWqm3uNwqjks5RLhnMDTGz/view?usp=sharing', '_blank')}
                            >
                                Todos los productos y lista de precios
                                <div className="arrow-wrapper">
                                    <div className="arrow"></div>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}