export const Skills = ({ constant }) => {
  return (
    <section id="skills" className="text-center py-5">
      <h2 className="fw-bold text-warning">Skills</h2>
      <div className="line border w-25 mx-auto border-warning mb-5"></div>
      <div className="row g-4 mx-auto justify-content-center col-md-11 col-lg-10 col-xl-9 col-xxl-8">
        {constant.map(({ title, skills }) => (
          <div className="col-12 col-md-6" key={crypto.randomUUID()}>
            <div className="card py-4 px-3 h-100">
              <h5 className="fw-bolder mb-3">{title}</h5>
              <div className="d-flex flex-wrap gap-3 justify-content-center my-auto">
                {skills.map(({ icon, name, height }) => (
                  <div
                    className="skill border border-secondary px-3 py-2"
                    key={crypto.randomUUID()}
                  >
                    <img src={icon} height={height} className="me-2" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};