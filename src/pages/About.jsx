export const About = ({ constant }) => {
    const { profile, description, social_links } = constant

    return (
        <section id="about" className="text-center py-5">
            <h2 className="fw-bold text-warning">Sobre mí</h2>
            <div className="line border w-25 mx-auto border-warning mb-5"></div>
            <div className="row g-5 g-lg-0 mx-auto align-items-center col-11 col-lg-12 col-xl-11">
                <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-4 d-flex justify-content-center align-items-center mx-auto">
                    <div className="home-photo rounded-circle">
                        <img src={profile} className="img-fluid rounded-circle" alt="Profile Photo" />
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-7">
                    <div className="about-text text-center text-lg-start mx-2 mx-sm-0 me-lg-4">
                        {description.map((text) => (
                            <p key={crypto.randomUUID()}>{text}</p>
                        ))}
                        <div className="d-flex flex-column align-items-center gap-2 mt-4 align-items-lg-start">
                            {social_links.map(({ url, icon, label }) => (
                                <a href={url} target="_blank" key={crypto.randomUUID()}>
                                    <i className={icon}></i>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
