import React, { useState } from "react";
import "../WatchToggle/WatchToggle.scss";

export default function WatchToggle() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    active ? setActive(false) : setActive(true);
  };

  // const [toggleChange, setToggleChange] = useState(false);

  // const toggled = () => {
  //   toggleChange ? setToggleChange(false) : setToggleChange(true);
  // };

  return (
    <section className="toggle">
      <div className="toggle__card-container">
        <div className="toggle__image-container">
          <img
            alt="watch"
            src="https://www.apple.com/v/watch/ax/images/overview/display/display_s7__fj2bqp6brfiy_large_2x.jpg"
            className="toggle__image-black"
          ></img>
          {/* <img
            alt="watch"
            src="https://www.apple.com/v/watch/ax/images/overview/display/display_s3__f9n138ohv7e6_large_2x.jpg"
            className="toggle__image-white"
          ></img> */}
        </div>
        <div className="toggle__description-container">
          <p className="toggle__comment">Our largest display yet.</p>
          <p className="toggle__header">
            Over 50% more screen area than Series 3.
          </p>
          <div className="toggle__grey">
            <p className="toggle__grey-text">div</p>
          </div>
          <div className="toggle__series-container">
            <p className="toggle__series-7">Series 7</p>
            <p className="toggle__series-3">Series 3</p>
          </div>
          <div className="toggle__black-container">
            <p onClick={toggle} className="toggle__black">
              {active ? <span>Series 3</span> : <span>Series 7</span>}
            </p>
          </div>
          <div className="toggle__container">
            {/* {toggle ? (
              <button
                onClick={toggle}
                className={`"toggle__btn" ${
                  active ? "toggle__btn" : "toggle__seven"
                }`}
              >
                {" "}
                {active ? <span>Series 7</span> : <span>Series 7</span>}
              </button>
            ) : (
              ""
            )}

            {toggle ? (
              <button
                onClick={toggled}
                className={`"toggle__btns" ${
                  toggleChange ? "toggle__btns" : "toggle__three"
                }`}
              >
                {" "}
                {toggleChange ? <span>Series 3</span> : <span>Series 3</span>}
              </button>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
}
