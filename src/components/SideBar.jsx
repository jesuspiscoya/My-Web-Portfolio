import { useEffect, useRef } from "react"
import profile from "../assets/img/profile-photo.jpg"

export const SideBar = () => {
    useEffect(() => {
        onScrolling()
    }, [])

    const clickToggle = () => {
        const sideBar = document.querySelector('.sidebar')
        const main = document.querySelector('.main')
        const footer = document.querySelector('.footer')
        sideBar.classList.toggle('active')
        main.classList.toggle('active')
        footer.classList.toggle('active')
    }

    const onScrolling = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navigation li');

        window.onscroll = () => {
            sections.forEach(item => {
                let top = window.scrollY;
                let offset = item.offsetTop - 100;
                let height = item.offsetHeight;
                let id = item.getAttribute('id');

                if (top >= offset && top <= (offset + height)) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        document.querySelector('.navigation a[href*=' + id + ']').offsetParent.classList.add('active');
                    });
                }
            });
        };
    }

    const clickTitle = () => {
        const sideBar = document.querySelector('.sidebar')

        if (window.innerWidth <= 992) {
            sideBar.classList.remove('active')
        }
    }

    return (
        <nav>
            <div className="toggle position-fixed" onClick={clickToggle}>
                <i className="fa-solid fa-bars-staggered fa-xl"></i>
            </div>
            <div className="sidebar pt-5 d-flex flex-column position-fixed h-100">
                <div className="profile h-0 opacity-0 mx-auto pt-3">
                    <img src={profile} alt="Profile Photo" className="d-block img-fluid rounded-circle mx-auto" />
                    <h4 className="name-title fw-bold mt-3 text-center">Jesus Piscoya</h4>
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
                        <a href="mailto:jesuspiscoya0351@gmail.com">
                            <i className="fa-solid fa-envelope fa-lg"></i>
                        </a>
                    </div>
                </div>
                <div className="navigation my-auto">
                    <ul className="ps-3 text-center mb-0">
                        <li className="active">
                            <a href="#home" className="ps-3" onClick={clickTitle}>
                                <i className="fa-solid fa-house fa-lg my-auto"></i>
                                <span className="title my-auto">Inicio</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="ps-3" onClick={clickTitle}>
                                <i className="fa-solid fa-id-badge fa-lg my-auto"></i>
                                <span className="title my-auto">Sobre mi</span>
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="ps-3" onClick={clickTitle}>
                                <i className="fa-solid fa-bolt fa-lg my-auto"></i>
                                <span className="title my-auto">Skills</span>
                            </a>
                        </li>
                        <li>
                            <a href="#summary" className="ps-3" onClick={clickTitle}>
                                <i className="fa-solid fa-graduation-cap fa-lg my-auto"></i>
                                <span className="title my-auto">Resumen</span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="ps-3" onClick={clickTitle}>
                                <i className="fa-solid fa-cubes fa-lg my-auto"></i>
                                <span className="title my-auto">Proyectos</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
