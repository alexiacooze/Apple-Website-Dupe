import React from "react";
import "./WatchTableThree.scss";

export default function WatchTableThree() {
  return (
    <section className="table-three">
      <div className="table-three__table-one">
        <img
          className="table-three__image"
          src="https://www.apple.com/v/watch/ax/images/compare/quicklook_bo_app__bn0uz5oly82u_large_2x.png"
          alt=""
        ></img>
        <p className="table-three__ox-display-header">Blood Oxygen app</p>
      </div>
      <div className="table-three__table-two">
        <p className="table-three__oxygen-option-1">–</p>
      </div>
      <div className="table-three__table-three">
        <p className="table-three__oxygen-option-2">–</p>
      </div>
    </section>
  );
}
