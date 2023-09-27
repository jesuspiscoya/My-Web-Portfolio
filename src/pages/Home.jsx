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
    const textRef = useRef(null)

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

    const clickToggle = () => {
        const sideBar = document.querySelector(".sidebar")
        const main = document.querySelector(".main")
        sideBar.classList.toggle("active")
        main.classList.toggle("active")
    }

    useEffect(() => {
        new Typed(textRef.current, {
            strings: ['Estudiante', 'Movil Developer', 'Web Developer', 'Fullstack Developer'],
            typeSpeed: 150,
            backDelay: 150,
            smartBackspace: true,
            loop: true
        })
    }, [])

    return (
        <>
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
            <section className="main active">
                <div className="toggle m-4" onClick={clickToggle}>
                    <i className="fa-solid fa-bars-staggered fa-xl"></i>
                </div>
                <div className="text-center d-flex justify-content-center align-items-center h-100">
                    <div>
                        <p>Hola👋, Soy</p>
                        <h1 className="name-aurora">Jesus<br />Piscoya</h1>
                        <h4 className="my-3 pb-4">
                            <span ref={textRef}></span>
                        </h4>
                        <a id="button-cv" href={cv} download="CV-JESUS-PISCOYA-BANCES.pdf" onClick={clickConffeti}>
                            <i className="fa-solid fa-circle-down fa-lg"></i>Descargar CV
                        </a>
                        {/* <ConfettiButton /> */}
                    </div>
                    <div className="mx-5 px-3" />
                    <div className="home-photo w-25">
                        <img src={profile} className="img-fluid rounded-circle" />
                    </div>
                </div>
            </section>
        </>
    )
}
