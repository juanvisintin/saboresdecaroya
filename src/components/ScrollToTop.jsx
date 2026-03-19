import { useState, useEffect, useRef } from 'react'
import "../styles/scrollToTop.css"

export default function ScrollToTop() {
    const [mostrar, setMostrar] = useState(false)
    const throttleRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            // Throttle: ejecutar máximo cada 100ms
            if (throttleRef.current) return

            throttleRef.current = true
            setMostrar(window.scrollY > 300)

            setTimeout(() => {
                throttleRef.current = false
            }, 100)
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
            <img src="/flecha-scroll-to-top.png" alt="Subir" loading="lazy" />
        </div>
    )
}
