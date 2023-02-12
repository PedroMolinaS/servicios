import React, { useEffect, useState } from "react";
import '../styles/style.css'

const Principal = () => {

    const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.pageYOffset);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.pageYOffset);
      });
    };
  }, []);

  return <div>
    <header>
        <nav>
          <h1>kuon.space</h1>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="about" className="parallax-section">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          tellus eu metus rutrum, a blandit velit eleifend.
        </p>
      </section>
      <section id="services" className="parallax-section">
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          tellus eu metus rutrum, a blandit velit eleifend.
        </p>
      </section>
      <section id="contact" className="parallax-section">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          tellus eu metus rutrum, a blandit velit eleifend.
        </p>
      </section>
  </div>;
};

export default Principal;
