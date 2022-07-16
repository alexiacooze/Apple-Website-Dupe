import React from "react";
import "../Footer/Footer.scss";
import arrow from "../../assets/arrow-white.png";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__delivery">
        <img
          className="footer__delivery-image"
          src="https://www.apple.com/v/watch/ax/built/assets/ac-buystrip/shipping/icon__d0y57vpw2meu_large.svg"
          alt=""
        ></img>
        <p className="footer__statement">Free delivery on everything</p>
        <p className="footer__comment">
          Or pick up available items at an Apple Store.
        </p>
        <div className="footer__learn-more-container">
          <p className="footer__learn-more">Learn more</p>
          <span>
            {" "}
            <img className="footer__play" alt="play" src={arrow} />
          </span>
        </div>
      </div>
      <div className="footer__help">
        <img
          className="footer__help-image"
          src="https://www.apple.com/v/watch/ax/built/assets/ac-buystrip/help/icon__d0y57vpw2meu_large.svg"
          alt=""
        ></img>
        <p className="footer__statement">Get help buying</p>
        <p className="footer__comment">
          Have a question? Call a Specialist or chat online. Call
          1‑800‑MY‑APPLE.
        </p>
        <div className="footer__contact-container">
          <p className="footer__contact">Contact us</p>
          <span>
            {" "}
            <img className="footer__play" alt="play" src={arrow} />
          </span>
        </div>
      </div>
    </section>
  );
}
