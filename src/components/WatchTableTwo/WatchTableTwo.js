import React from "react";
import "./WatchTableTwo.scss";

export default function WatchTableTwo() {
  return (
    <section className="table-two">
      <div className="table-two__on">
        <img
          className="table-two__image"
          src="https://www.apple.com/v/watch/ax/images/compare/quicklook_retina_display_s7__euol4grkrx8i_large_2x.png"
          alt=""
        ></img>
        <p className="table-two__on-header">Always-On Retina Display</p>
        <p className="table-two__on-sub-header">
          Nearly 20% larger than Apple Watch SE
        </p>
        <p className="table-two__on-size">Over 50% larger than Series 3</p>
      </div>
      <div className="table-two__retina">
        <img
          className="table-two__image"
          src="https://www.apple.com/v/watch/ax/images/compare/quicklook_retina_display_se__bkqpyec086ya_large_2x.png"
          alt=""
        ></img>
        <p className="table-two__on-header">Retina display</p>
        <p className="table-two__retina-sub-header">
          Over 30% larger than Series 3
        </p>
      </div>
      <div className="table-two__retina-display">
        <img
          className="table-two__image"
          src="https://www.apple.com/v/watch/ax/images/compare/quicklook_retina_display_s3__c28bwxqba1w2_large_2x.png"
          alt=""
        ></img>
        <p className="table-two__on-header">Retina display</p>
      </div>
    </section>
  );
}
