import { useState, useCallback } from "react"
import "../styles/navbar.css"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = useCallback(() => {
        setMenuOpen(prev => !prev)
    }, [])

    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMenuOpen(false)
    }, [])

    return (
        <nav className="navbar1">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="/icon2.png" className="logo" alt="Logo" loading="lazy" />
                </div>

                {/* Hamburger menu para mobile */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                </div>

                {/* Menú lateral */}
                <div className={`nav-menu ${menuOpen ? 'activo' : ''}`}>
                    <button onClick={() => scrollToSection('seccion-nosotros')} className="nav-link1">
                        Nosotros
                    </button>
                    <button onClick={() => scrollToSection('seccion-productos')} className="nav-link1">
                        Productos
                    </button>
                    <button onClick={() => scrollToSection('seccion-contacto')} className="nav-link1">
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