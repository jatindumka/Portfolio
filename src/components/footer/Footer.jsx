import React from "react";
import {
  UilInstagram,
  UilLinkedinAlt
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title"><a href="#home" className="footer__title">
            Jatin
            </a>
            </h1>
            <span className="footer__subtitle">Developer, Consultant and Traveller</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/jatin-dumka-94411612b/"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <UilLinkedinAlt className="" />
            </a>
            <a
              href="https://www.instagram.com/jatin_dumka/"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <UilInstagram className="" />
            </a>
          </div>
        </div>

        <a href="mailto:juanpablorubio94@gmail.com" >
        <p className="footer__copy">
        Made by Jatin&#174; All right reserved
        </p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
