import { useState } from "react"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMenuOpen(false)
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="navbar1">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="/icon.png" className="logo" alt="Logo" />
                </div>

                {/* Hamburger menu para mobile */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                </div>

                {/* Menú lateral */}
                <div className={`nav-menu ${menuOpen ? 'activo' : ''}`}>
                    <button onClick={() => scrollToSection('seccion-nosotros')} className="nav-link">
                        Nosotros
                    </button>
                    <button onClick={() => scrollToSection('seccion-productos')} className="nav-link">
                        Productos
                    </button>
                    <button onClick={() => scrollToSection('seccion-contacto')} className="nav-link">
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