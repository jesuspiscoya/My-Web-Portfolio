import profile from "../assets/img/profile-photo.jpg";
import "../styles/card.css"

export const About = () => {
    return (
        <section id="about" className="text-center py-5">
            <h2 className="fw-bold text-warning">Sobre mí</h2>
            <div className="line border w-25 mx-auto border-warning mb-5"></div>
            <div className="cardContainer position-relative mx-2">
                <div className="card row g-4 flex-row mx-auto col-12 col-sm-9 col-md-12 col-xl-11 col-xxl-12 pb-4 px-2">
                    <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                        <div className="home-photo">
                            <img src={profile} className="img-fluid rounded-circle" />
                        </div>
                    </div>
                    <div className="col-12 col-md-8 mb-2 d-flex align-items-center">
                        <div className="fw-bolder text-start">
                            <span>
                                Soy un apasionado por la programación, la tecnológica y la música. La disciplina, dedicación y compromiso son tres factores claves que me definen.💯
                            </span>
                            <br /><br />
                            <span>
                                Mi formación académica en Ingeniería de Sistemas e Informática me ha proporcionado una sólida base para ser aplicado en tareas desafiantes y proyectos retadores que generen un alto impacto en la sociedad.🧑‍💻
                            </span>
                            <br /><br />
                            <span>
                                Estoy emocionado por lo que depara el futuro y ansío enfrentar nuevos desafíos y oportunidades para seguir creciendo como profesional y como persona.💪
                            </span>
                            <br /><br />
                            <span>
                                No dude en <a href="#contacto">CONTACTARSE</a> conmigo. ¡Juntos podemos crear algo asombroso!🤝
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
