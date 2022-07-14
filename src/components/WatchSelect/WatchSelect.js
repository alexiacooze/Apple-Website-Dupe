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
      <table className="select__table-container">
        <tr className="select__table">
          <td className="select__table-size">45mm or 41mm</td>
          <td className="select__swim">Swimproof</td>
          <td className="select__crack">Most crack-resistant front crystal</td>
          <td className="select__dust">Certified IP6X dust resistant</td>
        </tr>
        <tr className="select__table">
          <td className="select__table-size">44mm or 40mm</td>
          <td className="select__swim">Swimproof</td>
          <td className="select__crack">–</td>
          <td className="select__dust">–</td>
        </tr>
        <tr className="select__table">
          <td className="select__table-size">42mm or 38mm</td>
          <td className="select__swim">Swimproof</td>
          <td className="select__crack">–</td>
          <td className="select__dust">–</td>
        </tr>
      </table>
      <div className="select__display-container">
        <div className="select__on">
          <img alt=""></img>
          <p className="select__on-header">Always-On Retina Display</p>
          <p className="select__on-sub-header">
            Nearly 20% larger than Apple Watch SE
          </p>
          <p className="select__on-size"></p>
        </div>
        <div className="select__retina">
          <img alt=""></img>
          <p className="select__retina-header">Retina display</p>
          <p className="select__retina-sub-header">
            Over 30% larger than Series 3
          </p>
        </div>
        <div className="select__retina-display">
          <img alt=""></img>
          <p className="select__retina-display-header">Retina display</p>
        </div>
      </div>
      <div className="select__oxygen-container">
        <div className="select__oxygen-on">
          <img alt=""></img>
          <p className="select__on-display-header">Blood Oxygen app</p>
        </div>
        <div className="select__retina">
          <p className="select__retina-option">–</p>
        </div>
        <div className="select__retina-display">
          <p className="select__retina-display-option">–</p>
        </div>
      </div>
      <div className="select__ecg-container">
        <div className="select__ecg-on">
          <img alt=""></img>
          <p className="select__on-display-header">ECG app</p>
        </div>
        <div className="select__retina">
          <p className="select__retina-option">–</p>
        </div>
        <div className="select__retina-display">
          <p className="select__retina-display-option">–</p>
        </div>
      </div>
      <div className="select__compare-models">
        <p className="select__compare">Compare all models</p>
        <p className="select__compare-shop">Shop Apple Watch</p>
      </div>
    </section>
  );
}
