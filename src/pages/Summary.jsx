import Confetti from "https://esm.run/canvas-confetti@1"
import "../styles/btn-conffeti.css"

export const Summary = () => {
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

    return (
        <section id="summary" className="text-center py-5">
            <h2 className="fw-bold text-warning">Resumen</h2>
            <div className="line border w-25 mx-auto border-warning mb-5"></div>
            <div className="row mx-auto g-5 g-md-4 g-xxl-5 col-sm-10 col-md-12 col-xl-10 col-xxl-9">
                <div className="col-12 col-md-6">
                    <h3 className="fw-bolder text-info">Educación</h3>
                    <div className="d-flex mt-3">
                        <span className="line-summary me-3">
                            <span></span>
                        </span>
                        <div className="card-summary d-flex flex-column text-start p-4 w-100 mt-1 mb-3">
                            <h5 className="fw-bolder">Ingeniería de Sistemas e Informática</h5>
                            <span className="casa fw-bolder text-info">Universidad Tecnológica del Perú</span>
                            <span className="fecha text-info">
                                <i className="fa-solid fa-calendar-days me-2"></i>
                                2018 - Actual
                            </span>
                            <span className="mt-3">Estudiante cursando el 10mo ciclo.</span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <span className="line-summary me-3">
                            <span></span>
                        </span>
                        <div className="card-summary d-flex flex-column text-start p-4 w-100 mt-1 mb-3">
                            <h5 className="fw-bolder">Scrum Fundamentals Certified</h5>
                            <span className="casa fw-bolder text-info">Scrum Study</span>
                            <span className="fecha text-info">
                                <i className="fa-solid fa-calendar-days me-2"></i>
                                Jun 2023
                            </span>
                            <span className="mt-3">Certificado de curso Scrum Fundamentals de xx horas.</span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <span className="line-summary me-3">
                            <span></span>
                        </span>
                        <div className="card-summary d-flex flex-column text-start p-4 w-100 mt-1 mb-3">
                            <h5 className="fw-bolder">Introducción a la programación con Kotlin</h5>
                            <span className="casa fw-bolder text-info">Udemy</span>
                            <span className="fecha text-info">
                                <i className="fa-solid fa-calendar-days me-2"></i>
                                Nov 2022
                            </span>
                            <span className="mt-3">Curso de Kotlin de 10 horas.</span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <span className="line-summary me-3">
                            <span></span>
                        </span>
                        <div className="card-summary d-flex flex-column text-start p-4 w-100">
                            <h5 className="fw-bolder">CCNAv7: Introducción a Redes</h5>
                            <span className="casa fw-bolder text-info">Cisco Networking Academy</span>
                            <span className="fecha text-info">
                                <i className="fa-solid fa-calendar-days me-2"></i>
                                Jul 2021
                            </span>
                            <span className="mt-3">Curso de CCNAv7 de xx horas.</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h3 className="fw-bolder text-info">Experiencia</h3>
                    <div className="d-flex mt-3">
                        <span className="line-summary me-3">
                            <span></span>
                        </span>
                        <div className="card-summary d-flex flex-column text-start p-4 w-100 mt-1 mb-3">
                            <h5 className="fw-bolder">Asesor de Ventas</h5>
                            <span className="casa fw-bolder text-info">TELEATENTO DEL PERU S.A.C. (ATENTO)</span>
                            <span className="fecha text-info">
                                <i className="fa-solid fa-calendar-days me-2"></i>
                                Mar 2022 - Abr 2022
                            </span>
                            <ul className="ps-3 mt-3">
                                <li>Contacté telefónicamente a clientes para ofrecerles planes de servicio móvil.
                                </li>
                                <li>Promocioné e informé al cliente acerca de características y beneficios de los servicios.</li>
                                <li>Registré la atención diaria mediante el sistema y aplicativos correspondientes.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex">
                        <span className="line-summary me-3">
                            <span></span>
                        </span>
                        <div className="card-summary d-flex flex-column text-start p-4 w-100 mt-1">
                            <h5 className="fw-bolder">Asistente de Cajas</h5>
                            <span className="casa fw-bolder text-info">HOMECENTERS PERUANOS S.A. (PROMART)</span>
                            <span className="fecha text-info">
                                <i className="fa-solid fa-calendar-days me-2"></i>
                                Ene 2021 - Feb 2022
                            </span>
                            <ul className="ps-3 mt-3">
                                <li>Cumplí con el protocolo de atención al cliente.
                                </li>
                                <li>Registré las transacciones en caja: ventas, abonos y disposición de efectivo.</li>
                                <li>Incentivé el pago de transacciones de venta con la tarjeta de crédito corporativa.</li>
                                <li>Realicé toda función o encargo que mi jefe inmediato me asignó.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
