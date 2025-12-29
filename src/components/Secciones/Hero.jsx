import Carrusel from "../Carrusel"

export default function Hero() {
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
        </>
    )
}