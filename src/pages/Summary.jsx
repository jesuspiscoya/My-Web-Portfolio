export const Summary = ({ education, experiences }) => {
  return (
    <section id="summary" className="text-center py-5">
      <h2 className="fw-bold text-warning">Resumen</h2>
      <div className="line border w-25 mx-auto border-warning mb-5"></div>
      <div className="row mx-auto g-5 g-md-4 g-xxl-5 col-sm-10 col-md-12 col-xl-10 col-xxl-9">
        <div className="col-12 col-md-6">
          <h3 className="fw-bolder text-info mb-3">Educación</h3>
          {education.map(({ degree, school, date, description }) => (
            <div className="d-flex" key={crypto.randomUUID()}>
              <span className="line-summary me-3">
                <span></span>
              </span>
              <div className="card-summary d-flex flex-column text-start p-4 w-100 mt-1 mb-3">
                <h5 className="fw-bolder">{degree}</h5>
                <span className="casa fw-bolder text-info">{school}</span>
                <span className="fecha text-info">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  {date}
                </span>
                <span className="mt-3">{description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 col-md-6">
          <h3 className="fw-bolder text-info mb-3">Experiencia</h3>
          {experiences.map(({ role, company, date, description }) => (
            <div className="d-flex" key={crypto.randomUUID()}>
              <span className="line-summary me-3">
                <span></span>
              </span>
              <div className="card-summary d-flex flex-column text-start p-4 w-100 mt-1 mb-3">
                <h5 className="fw-bolder">{role}</h5>
                <span className="casa fw-bolder text-info">{company}</span>
                <span className="fecha text-info">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  {date}
                </span>
                <ul className="ps-3 mt-3">
                  {description.map((element) => (
                    <li key={crypto.randomUUID()}>{element}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
