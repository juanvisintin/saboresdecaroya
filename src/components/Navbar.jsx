import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        // Navega a la página de inicio
        navigate('/')
        // Después de navegar, espera a que se renderice y hace scroll
        setTimeout(() => {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
        // Cierra el menú después de hacer click
        setMenuOpen(false)
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="navbar1">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src="/icon.png" className="logo" alt="Logo" />
                    </Link>
                </div>

                {/* Hamburger menu para mobile */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                </div>

                {/* Menú lateral */}
                <div className={`nav-menu ${menuOpen ? 'activo' : ''}`}>
                    <button onClick={() => scrollToSection('nosotros')} className="nav-link">
                        Nosotros
                    </button>
                    <button onClick={() => scrollToSection('productos')} className="nav-link">
                        Productos
                    </button>
                    <button onClick={() => scrollToSection('contacto')} className="nav-link">
                        Contacto
                    </button>
                </div>

                {/* Overlay para cerrar menú al hacer click fuera */}
                {menuOpen && (
                    <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>
                )}
            </div>
        </nav>
    )
};