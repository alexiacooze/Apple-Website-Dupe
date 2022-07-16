import React from "react";
import "../WatchSelect/WatchSelect.scss";
import arrow from "../../assets/arrow-white.png";

export default function WatchSelect() {
  return (
    <section className="select">
      <div className="select__header-container">
        <p className="select__header">Which Apple Watch is right for you?</p>
      </div>
      <div className="select__watches">
        <div className="select__seven-container">
          <img
            src="https://www.apple.com/v/watch/ax/images/compare/compare_s7__dqi9jnwa4sq6_large_2x.jpg"
            alt=""
            className="select__image"
          ></img>
          <p className="select__header-watch">Apple Watch Series 7</p>
          <p className="select__price">From $529</p>
          <button className="select__buy">Buy</button>
          <div className="select__learn-container">
            <p className="select__learn-more">Learn more</p>
            <span>
              {" "}
              <img className="select__play" alt="play" src={arrow} />
            </span>
          </div>
        </div>
        <div className="select__se-container">
          <img
            src="https://www.apple.com/ca/watch/images/compare/compare_se__fjdos6x4rmmy_large_2x.jpg"
            alt=""
            className="select__image"
          ></img>
          <p className="select__header-watch">Apple Watch SE</p>
          <p className="select__price">From $369</p>
          <button className="select__buy">Buy</button>
          <div className="select__learn-container">
            <p className="select__learn-more">Learn more</p>
            <span>
              {" "}
              <img className="select__play" alt="play" src={arrow} />
            </span>
          </div>
        </div>
        <div className="select__three-container">
          <img
            src="https://www.apple.com/v/watch/ax/images/compare/compare_s3__f6gqpfe5rdea_large_2x.jpg"
            alt=""
            className="select__image"
          ></img>
          <p className="select__header-watch">Apple Watch Series 3</p>
          <p className="select__price">From $249</p>
          <button className="select__buy">Buy</button>
          <div className="select__learn-container">
            <p className="select__learn-more">Learn more</p>
            <span>
              {" "}
              <img className="select__play" alt="play" src={arrow} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
