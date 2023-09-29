import profile from "../assets/img/profile-photo.jpg";
import "../styles/card.css"

export const About = () => {
    return (
        <section id="about" className="text-center p-5">
            <h4 className="fw-bold text-warning">Sobre mí</h4>
            <div className="line border w-25 mx-auto border-warning mb-5"></div>
            <div className="cardContainer position-relative">
                <div className="cards d-flex flex-row align-items-center border-warning">
                    <div className="home-photo w-50 my-auto">
                        <img src={profile} className="img-fluid rounded-circle" />
                    </div>
                    <div className="ms-5 ps-4 text-start fw-bolder">
                        <span>
                            Soy un apasionado por la programación web y móvil, la tendencia tecnológica y la música. La disciplina, dedicación y compromiso son tres factores claves que me definen.💯
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
        </section>
    )
}
