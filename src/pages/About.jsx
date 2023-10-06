import profile from "../assets/img/profile-photo.jpg";

export const About = () => {
    return (
        <section id="about" className="text-center py-5">
            <h2 className="fw-bold text-warning">Sobre mí</h2>
            <div className="line border w-25 mx-auto border-warning mb-5"></div>
            <div className="row g-5 g-lg-0 mx-auto align-items-center col-11 col-lg-12 col-xl-11">
                <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-4 d-flex justify-content-center align-items-center mx-auto">
                    <div className="home-photo">
                        <img src={profile} className="img-fluid rounded-circle" />
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-7">
                    <div className="about-text text-center text-lg-start mx-2 mx-sm-0 me-lg-4">
                        <p>
                            Soy un apasionado por la programación, la tecnológica y la música. La disciplina, dedicación y compromiso son tres factores claves que me definen.💯
                        </p>
                        <p>
                            Mi formación académica en Ingeniería de Sistemas e Informática me ha proporcionado una sólida base para ser aplicado en tareas desafiantes y proyectos retadores que generen un alto impacto en la sociedad.🧑‍💻
                        </p>
                        <p>
                            Estoy emocionado por lo que depara el futuro y ansío enfrentar nuevos desafíos y oportunidades para seguir creciendo como profesional y como persona.💪
                        </p>
                        <div className="d-flex flex-column align-items-center gap-2 mt-4 align-items-lg-start">
                            <a href="https://www.linkedin.com/in/jesuspiscoya" target="_blank">
                                <i className="fa-brands fa-linkedin fa-xl me-3"></i>
                                linkedin.com/in/jesuspiscoya
                            </a>
                            <a href="https://github.com/jesuspiscoya" target="_blank">
                                <i className="fa-brands fa-github fa-lg me-3"></i>
                                @jesuspiscoya
                            </a>
                            <a href="https://wa.me/51921104614" target="_blank">
                                <i className="fa-brands fa-whatsapp fa-xl me-3"></i>
                                +51 921104614
                            </a>
                            <a href="mailto:jesuspiscoya0351@gmail.com">
                                <i className="fa-solid fa-envelope fa-lg me-3"></i>
                                jesuspiscoya0351@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
