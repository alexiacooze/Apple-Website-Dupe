import React from "react";
import "../SeriesSeven/SeriesSeven.scss";
import play from "../../assets/play.png"
import arrow from "../../assets/arrow.png"

export default function SeriesSeven() {
  return (
    <section className="seven">
      <div className="seven__container">
        <img
          className="seven__logo"
          src="https://www.apple.com/v/watch/ax/images/overview/series-7/logo_watch_s7__dnxp9zoaom82_large_2x.png"
          alt="Series 7 logo"
        />
        <p className="seven__header">Full Screen ahead. </p>
        <p className="seven__price">From $529</p>
        <button className="seven__buy">Buy</button>
      </div>
      <div className="seven__learn-container">
        <p className="seven__learn-more">Learn more</p> <span> <img className="seven__play" alt="play" src={arrow}/></span>
        <p className="seven__watch"> Watch the film</p> <span> <img className="seven__play" alt="play" src={play}/></span>
      </div>
      <div className="seven__image-container">
        <img
          className="seven__image"
          src="https://www.apple.com/v/watch/ax/images/overview/series-7/hero_s7__ep2maoos292e_large_2x.jpg"
          alt="watches"
        ></img>
      </div>
    </section>
  );
}
