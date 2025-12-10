import { useState, useEffect } from 'react'

export default function ScrollToTop() {
    const [mostrar, setMostrar] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Mostrar el botón cuando se haya hecho scroll más de 300px
            setMostrar(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div
            className={`scroll-to-top ${mostrar ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <img src="/flecha-scroll-to-top.png" alt="Subir" />
        </div>
    )
}
