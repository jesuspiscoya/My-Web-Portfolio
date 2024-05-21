import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Confetti from "https://esm.run/canvas-confetti@1";
import "../styles/btn-conffeti.css";
import { SocialBtn } from "../components/SocialBtn";

export const Home = () => {
  const textRef = useRef(null);

  const clickConffeti = () => {
    Confetti({
      particleCount: 35,
      spread: 150,
      scalar: 0.9,
      decay: 0.7,
      ticks: 60,
      origin: {
        x: 0.5,
        y: 0.7,
      },
    });
  };

  useEffect(() => {
    new Typed(textRef.current, {
      strings: [
        "Ing. de Sistemas e Informática.",
        "Android Developer.",
        "Web Developer.",
        "Fullstack Developer.",
      ],
      typeSpeed: 130,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
    });
  }, []);

  return (
    <section
      id="home"
      className="hero d-flex flex-column justify-content-center align-items-center text-center vh-100 px-5"
    >
      <h5>Hola👋, mi nombre es</h5>
      <h1 className="name-aurora m-0">Jesus Piscoya</h1>
      <h4 className="my-3 pb-4">
        Soy <span ref={textRef} className="fw-bold" />
      </h4>
      <a
        href="http://bit.ly/4bIdmJs"
        target="_blank"
        download="CV-JESUS-PISCOYA-BANCES.pdf"
        className="button-cv mb-2"
        onClick={clickConffeti}
      >
        <i className="fa-solid fa-circle-down fa-lg"></i>Descargar CV
      </a>
      <SocialBtn margin="mt-4" />
    </section>
  );
};
