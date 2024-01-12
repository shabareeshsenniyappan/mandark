import React from "react";

function InfoCard2({ txt, heading, cont }) {
  return (
    <div className="info2-card-hero-container">
      <div className="info-card-img">{txt}</div>
      <div className="info-card-cont">{cont}</div>
    </div>
  );
}

export default InfoCard2;
