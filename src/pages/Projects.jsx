import { useFetch } from "../hooks/useFetch";

export const Projects = () => {
    const { data, isLoading, error } = useFetch('https://api.github.com/users/jesuspiscoya/repos')

    return (
        <section id="projects" className="text-center py-5">
            <h2 className="fw-bold text-warning">Proyectos</h2>
            <div className="line border w-25 mx-auto border-warning mb-5"></div>
            <div className="row g-4 mx-auto justify-content-center px-5">
                {isLoading
                    ? <div>...Cargando</div>
                    : data.map(({ id, nombre, descripcion, url, topics }) => (
                        <div className="col-12 col-md-6 col-xl-4" key={id}>
                            <div className="card-project p-4 h-100">
                                <img src="https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png" className="img-fluid" />
                                <div className="tech d-flex flex-wrap gap-2 mt-3">
                                    {topics.map((element, index) => (
                                        <span key={id + element}>{element.replaceAll('-', ' ')}</span>
                                    ))}
                                </div>
                                <div className="d-flex flex-column text-start mt-1">
                                    <h5 className="mt-2 fw-bolder">{nombre}</h5>
                                    <span>{descripcion}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
