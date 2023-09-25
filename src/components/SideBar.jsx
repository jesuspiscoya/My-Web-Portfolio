import profile from "../assets/img/profile-photo.jpg"

export const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src={profile} alt="Profile Photo" className="img-fluid rounded-circle" />
                <h4 className="name-title">Jesus Piscoya</h4>
                <div className="social-links mt-3 text-center">
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
                <ul className="ps-3 text-center">
                    <li>
                        <a href="#" className="align-items-center ps-3 active">
                            <i className="fa-solid fa-house fa-lg"></i>
                            <span className="title">Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="align-items-center ps-3">
                            <i className="fa-solid fa-id-badge fa-lg"></i>
                            <span className="title">Sobre mi</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="align-items-center ps-3">
                            <i className="fa-solid fa-bolt fa-lg"></i>
                            <span className="title">Skills</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="align-items-center ps-3">
                            <i className="fa-solid fa-graduation-cap fa-lg"></i>
                            <span className="title">Educación</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="align-items-center ps-3">
                            <i className="fa-solid fa-cubes fa-lg"></i>
                            <span className="title">Portfolio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="align-items-center ps-3">
                            <i className="fa-solid fa-paper-plane fa-lg"></i>
                            <span className="title">Contacto</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
