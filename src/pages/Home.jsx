import { useEffect, useRef } from "react"
import { SideBar } from "../components/SideBar"
import { ConfettiButton } from "../components/ConfettiButton"
import Typed from "typed.js"
import Confetti from "https://esm.run/canvas-confetti@1";
import cv from "../assets/doc/CV-JESUS-PISCOYA-BANCES.pdf";
import profile from "../assets/img/profile-photo.jpg";
import "../styles/bg-stars.css"
import "../styles/btn-conffeti.css"

export const Home = () => {
    const element = useRef(null)

    const clickConffeti = () => {
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
    }

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ['Estudiante', 'Movil Developer', 'Web Developer', 'Fullstack Developer'],
            typeSpeed: 150,
            backDelay: 150,
            smartBackspace: true,
            loop: true
        })
    }, [])

    return (
        <section className="d-flex justify-content-center align-items-center vh-100">
            <div className="stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
            <SideBar />
            <div id="hero" className="text-center position-absolute d-flex justify-content-center">
                <div>
                    <p>Hola👋, Soy</p>
                    <h1 className="content">Jesus<br />Piscoya</h1>
                    <h4 className="my-3 pb-4"><span ref={element}></span></h4>
                    <a id="button-cv" href={cv} download="CV-JESUS-PISCOYA-BANCES.pdf" onClick={clickConffeti}>Descargar CV</a>
                    {/* <ConfettiButton /> */}
                </div>
                <div className="mx-5 px-3" />
                <div id="profile" className="w-25">
                    <img src={profile} className="img-fluid rounded-circle" />
                </div>
            </div>
            <div className="mx-5 px-4"></div>

        </section>
    )
}
