import "../styles/Contacto.css"

export default function TarjetaContacto({ logo, texto }) {
    return (
        <div className="container tarjeta-contacto">
            <div className="row">
                <div className="col-2">
                    <img src={logo} className="img-contacto" alt="logo del contacto" />
                </div>
                <div className="col-10">
                    <p>{texto}</p>
                </div>

            </div>

        </div>
    )
}