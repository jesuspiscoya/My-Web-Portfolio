import { useEffect, useRef } from "react"

import "../styles/btn.css";

export const ConfettiButton = () => {
    const buttonRef = useRef(null)

    useEffect(() => {
        textButton(buttonRef.current)
    }, [])

    const textButton = (button) => {
        const textElements = button.querySelectorAll('.button-text')
        textElements.forEach((element) => {
            const characters = element.innerText.split('')
            var characterHTML = ''
            characters.forEach((letter, index) => {
                letter === ' '
                    ? characterHTML += `
                        <span class="char${index} me-1" style="--d: ${index * 30}ms; --dr: ${(characters.length - index - 1) * 30}ms;">${letter}</span>`
                    : characterHTML += `
                        <span class="char${index}" style="--d: ${index * 30}ms; --dr: ${(characters.length - index - 1) * 30}ms;">${letter}</span>`
            })
            element.innerHTML = characterHTML
        })
    }

    const clickButton = (disabled, button) => {
        if (!disabled) {
            disabled = true
            button.classList.add("loading")
            button.classList.remove("ready")
            setTimeout(() => {
                button.classList.add("complete")
                button.classList.remove("loading")
                setTimeout(() => {
                    setTimeout(() => {
                        disabled = false
                        button.classList.add("ready")
                        button.classList.remove("complete")
                    }, 2000)
                }, 320)
                Confetti({
                    particleCount: 35,
                    spread: 150,
                    scalar: 0.9,
                    decay: 0.7,
                    ticks: 60,
                    origin: {
                        x: 0.5,
                        y: 0.7
                    }
                })
            }, 1500)
        }
    }

    return (
        <>
            <a href={cv} download="CV-JESUS-PISCOYA-BANCES.pdf" id="button" className="ready" ref={buttonRef} onClick={() => clickButton(false, buttonRef.current)}>
                <div className="message submitMessage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12.2">
                        <polyline stroke="currentColor" points="2,7.1 6.5,11.1 11,7.1 " />
                        <line stroke="currentColor" x1="6.5" y1="1.2" x2="6.5" y2="10.3" />
                    </svg> <span className="button-text">Descargar CV</span>
                </div>

                <div className="message loadingMessage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17">
                        <circle className="loadingCircle" cx="2.2" cy="10" r="1.6" />
                        <circle className="loadingCircle" cx="9.5" cy="10" r="1.6" />
                        <circle className="loadingCircle" cx="16.8" cy="10" r="1.6" />
                    </svg>
                </div>

                <div className="message successMessage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11">
                        <polyline stroke="currentColor" points="1.4,5.8 5.1,9.5 11.6,2.1 " />
                    </svg> <span className="button-text">Success</span>
                </div>
            </a>
        </>
    )
}
