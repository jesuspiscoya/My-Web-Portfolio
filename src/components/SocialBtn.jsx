import React from "react";

export const SocialBtn = ({ margin }) => {
  return (
    <div className={`social-links text-center ${margin}`}>
      <a href="https://www.linkedin.com/in/jesuspiscoya/" target="_blank">
        <i className="fa-brands fa-linkedin fa-lg"></i>
      </a>
      <a href="https://github.com/jesuspiscoya" target="_blank">
        <i className="fa-brands fa-github fa-lg"></i>
      </a>
      <a href="https://wa.me/51921104614" target="_blank">
        <i className="fa-brands fa-whatsapp fa-lg"></i>
      </a>
      <a href="mailto:jesuspiscoya0351@gmail.com">
        <i className="fa-solid fa-envelope fa-lg"></i>
      </a>
    </div>
  );
};
