import React from "react";
import "../Pride/Pride.scss";
import threeWatches from "../../assets/three-watches.png";

export default function Pride() {
  return (
    <section className="pride">
      <div className="pride__header-container">
        <p className="pride__header-text">Threads of</p>
        <img
          className="pride__header-image"
          src="https://www.apple.com/v/watch/ax/images/overview/pride/logo_pride_static__d6k5drslkiie_large_2x.jpg"
          alt=""
        ></img>
        <p className="pride__sub-header-text">
          Celebrate all year long with new Pride Edition watch bands and faces.
        </p>
        <img src={threeWatches} alt=""></img>
      </div>
      <div className="pride__double-container">
        <div className="pride__card-one">
          <p className="pride__new">New</p>
          <p className="pride__title">Pride Edition Sport Loop</p>
          <p className="pride__cost">$59</p>
          <button className="pride__buy">Buy</button>
          <div>
            <img
              className="pride__image-1"
              src="https://www.apple.com/v/watch/ax/images/overview/pride/pride_band_sport_loop__gktby8cho2ai_large_2x.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="pride__card-two">
          <p className="pride__new">New</p>
          <p className="pride__title">Pride Edition Nike Sport Loop</p>
          <p className="pride__cost">$59</p>
          <button className="pride__buy">Buy</button>
          <div className="pride__image-container">
            <img
              className="pride__image-2"
              src="https://www.apple.com/v/watch/ax/images/overview/pride/pride_band_nike__cbx54pduap9e_large_2x.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pride__single-container">
        <div className="pride__card-three">
          <img
            className="pride__image-square"
            src="https://www.apple.com/v/watch/ax/images/overview/pride/pride_face__c5j6orev49ua_large_2x.jpg"
            alt=""
          />
          <p className="pride__description">
            Open this page on your iPhone to download the watch face.
          </p>
        </div>
      </div>
    </section>
  );
}
