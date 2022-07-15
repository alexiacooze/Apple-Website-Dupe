import React from "react";
import "./WatchTableOne.scss";

export default function WatchTableOne() {
  return (
    <section className="table">
      <div className="table__table-one">
        <p className="table__table-size">45mm or 41mm</p>
        <p className="table__swim">Swimproof</p>
        <p className="table__crack">Most crack-resistant front crystal</p>
        <p className="table__dust">Certified IP6X dust resistant</p>
      </div>
      <div className="table__table-two">
        <p className="table__table-size">44mm or 40mm</p>
        <p className="table__swim">Swimproof</p>
        <p className="table__crack">–</p>
        <p className="table__dust">–</p>
      </div>
      <div className="table__table-three">
        <p className="table__table-size">42mm or 38mm</p>
        <p className="table__swim">Swimproof</p>
        <p className="table__crack">–</p>
        <p className="table__dust">–</p>
      </div>
    </section>
  );
}
