import React from "react";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__delivery">
        <img className="footer__delivery-image" alt=""></img>
        <p className="footer__statement">Free delivery on everything</p>
        <p className="footer__comment">
          Or pick up available items at an Apple Store.
        </p>
        <p className="footer__learn-more">Learn more {`>`}</p>
      </div>
      <div className="footer__help">
        <img className="footer__help-image" alt=""></img>
        <p className="footer__statement">Get help buying</p>
        <p className="footer__comment">
          Have a question? Call a Specialist or chat online. Call
          1‑800‑MY‑APPLE.
        </p>
        <p className="footer__learn-more">Contact us{`>`}</p>
      </div>
    </section>
  );
}
