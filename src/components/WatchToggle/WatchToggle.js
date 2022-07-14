import React, { useState } from "react";
import "../WatchToggle/WatchToggle.scss";

export default function WatchToggle() {
  // will need to use state to toggle with an onlick that changes the color make the whole div the grey color and then make the onlick balck with rounded borders



  const [toggle, setToggle] = useState();

  console.log(toggle);
  const changeToggle = () => {
    setToggle("toggle__switch-seven")  
  };

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
          <div className="toggle__container">
            <button onClick={changeToggle}
              
              className="toggle__seven toggle__switch-seven"
            >
              Series 7
            </button>
            <button className="toggle__three toggle__switch-three">Series 3</button>
          </div>
        </div>
      </div>
    </section>
  );
}
