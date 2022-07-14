import React from "react";
import "../Pride/Pride.scss"
import threeWatches from "../../assets/three-watches.png"

export default function Pride() {
  return (
    <section className="pride">
      <div className="pride__header-container">
        <p className="pride__header-text">Threads of</p>
        <img className="pride__header-image" src="https://www.apple.com/v/watch/ax/images/overview/pride/logo_pride_static__d6k5drslkiie_large_2x.jpg" alt=""></img>
        <p className="pride__sub-header-text">
          Celebrate all year long with new Pride Edition watch bands and faces.
        </p>
        <img src={threeWatches} alt=""></img>
      </div>
      <div className="pride__double-container">
        <div className="pride__card-one"></div>
        <div className="pride__card-two"></div>
      </div>
      <div className="pride__single-container">
        <div className="pride__card-three"></div>
      </div>
    </section>
  );
}
