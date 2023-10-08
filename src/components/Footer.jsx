export const Footer = () => {
    return (
        <div className="footer text-center d-flex flex-column justify-content-center py-3 px-2">
            <h1 className="name-aurora fs-2">Jesus Piscoya</h1>
            <div className="social-links mt-1">
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
            <h6 className="mt-4 mb-2 fw-bolder">Este sitio fué desarrollado con:</h6>
            <div className="d-flex flex-wrap justify-content-center gap-2">
                <div className="bg-none border border-primary px-2 py-1 rounded-2 ">
                    <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" height={"14px"} className="me-1" />
                    <span>HTML</span>
                </div>
                <div className="bg-none border border-primary px-2 py-1 rounded-2">
                    <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/370607/images/5195121/badge-css-3-512.png" height={"14px"} className="me-1" />
                    <span>CSS</span>
                </div>
                <div className="bg-none border border-primary px-2 py-1 rounded-2">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" height={"14px"} className="me-2" />
                    <span>JavaScript</span>
                </div>
                <div className="bg-none border border-primary px-2 py-1 rounded-2">
                    <img src="https://them.es/starter-bootstrap/wp-content/uploads/sites/7/2021/05/bootstrap-logo.png" height={"14px"} className="me-1" />
                    <span>Bootstrap</span>
                </div>
                <div className="bg-none border border-primary px-2 py-1 rounded-2">
                    <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem-700x626.png" height={"13px"} className="me-1" />
                    <span>React Js</span>
                </div>
                <div className="bg-none border border-primary px-2 py-1 rounded-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" height={"13px"} className="me-2" />
                    <span>Vite Js</span>
                </div>
            </div>
            <span className="mt-4">© {new Date().getFullYear()} Jesus Piscoya | Todos los derechos reservados.</span>
        </div>
    )
}
