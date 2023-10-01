export const Contact = () => {
    return (
        <section id="contacto" className="text-center py-5">
            <h4 className="fw-bold text-warning">Contáctame</h4>
            <div className="line border w-25 mx-auto border-warning mb-5"></div>
            <div className="cards d-flex flex-column justify-content-center mx-auto px-4">
                <h1 className="name-aurora fs-1">Jesus Piscoya</h1>
                <a href="mailto:jesuspiscoya0351@gmail.com" className="fs-6 link-light">
                    <i class="fa-solid fa-envelope-circle-check fa-lg me-2 text-primary"></i>
                    jesuspiscoya0351@gmail.com
                </a>
                <a href="https://wa.me/51921104614" target="_blank" className="fs-6 link-light">
                    <i class="fa-brands fa-whatsapp fa-lg me-2 text-primary"></i>
                    +51 921104614
                </a>
                <a href="https://www.linkedin.com/in/jesuspiscoya/" target="_blank" className="fs-6 link-light">
                    <i class="fa-brands fa-linkedin fa-lg me-2 text-primary"></i>
                    Jesus Piscoya
                </a>
            </div>
        </section>
    )
}
