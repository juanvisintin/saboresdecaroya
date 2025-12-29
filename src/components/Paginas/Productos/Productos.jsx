import { Link } from "react-router-dom"
import "../../../styles/PaginaProductos.css"

export default function Productos() {
  return (
    <>
      <div style={{ padding: "2rem 1.5rem", backgroundColor: "rgb(38, 36, 35)", borderBottom: "1px solid rgb(191, 184, 150)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link to="/" className="btn-volver-inicio">
            ← Volver al inicio
          </Link>
        </div>
      </div>
      
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>Página en desarrollo</h1>
      </div>
    </>
  )
}
