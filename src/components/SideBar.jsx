import { useEffect, useRef } from "react";
import profile from "../assets/img/profile-photo.jpg"

export const SideBar = () => {
    const navRef = useRef(null)
    var list = []

    useEffect(() => {
        list = Array.from(navRef.current.children)
        list.forEach((element, index) => {
            element.addEventListener("click", () => activeNav(element, index))
        })
    }, [])

    const activeNav = (element, index) => {
        const profile = document.querySelector(".profile")

        list.forEach((item) => {
            item.classList.remove("active")
        })
        element.classList.add('active')

        index > 0
            ? profile.classList.add('active')
            : profile.classList.remove('active')
    }

    return (
        <div className="sidebar position-fixed h-100">
            <div className="profile py-4">
                <img src={profile} alt="Profile Photo" className="img-fluid rounded-circle mx-auto" />
                <h4 className="name-title mt-3 text-center">Jesus Piscoya</h4>
                <div className="social-links text-center mt-2">
                    <a href="https://www.linkedin.com/in/jesuspiscoya/" target="_blank">
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                    </a>
                    <a href="https://github.com/jesuspiscoya" target="_blank">
                        <i className="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="https://wa.me/51921104614" target="_blank">
                        <i className="fa-brands fa-whatsapp fa-lg"></i>
                    </a>
                    <a href="mailto:correo@ejemplo.com">
                        <i className="fa-solid fa-envelope fa-lg"></i>
                    </a>
                </div>
            </div>
            <div className="navigation my-auto">
                <ul className="ps-3 text-center mb-0" ref={navRef}>
                    <li className="active">
                        <a href="#" className="ps-3">
                            <i className="fa-solid fa-house fa-lg my-auto"></i>
                            <span className="title my-auto">Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="ps-3">
                            <i className="fa-solid fa-id-badge fa-lg my-auto"></i>
                            <span className="title my-auto">Sobre mi</span>
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="ps-3">
                            <i className="fa-solid fa-bolt fa-lg my-auto"></i>
                            <span className="title my-auto">Skills</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="ps-3">
                            <i className="fa-solid fa-graduation-cap fa-lg my-auto"></i>
                            <span className="title my-auto">Educación</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="ps-3">
                            <i className="fa-solid fa-cubes fa-lg my-auto"></i>
                            <span className="title my-auto">Portfolio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="ps-3">
                            <i className="fa-solid fa-paper-plane fa-lg my-auto"></i>
                            <span className="title my-auto">Contacto</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
