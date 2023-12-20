import { SocialBtn } from "./SocialBtn";

export const Footer = ({ constant }) => {
  return (
    <div className="footer text-center d-flex flex-column justify-content-center py-3 px-2">
      <h1 className="name-aurora fs-2">Jesus Piscoya</h1>
      <SocialBtn />
      <h6 className="mt-3 mb-2 fw-bolder">Este sitio fué desarrollado con:</h6>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {constant.map(({ icon, name, height }) => (
          <div
            className="bg-none border border-primary px-2 py-1 rounded-2"
            key={crypto.randomUUID()}
          >
            <img src={icon} height={height} className="me-1" />
            <span>{name}</span>
          </div>
        ))}
      </div>
      <span className="mt-4">
        © {new Date().getFullYear()} Jesus Piscoya | Todos los derechos
        reservados.
      </span>
    </div>
  );
};
