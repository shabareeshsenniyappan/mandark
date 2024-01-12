import React from "react";

function InfoCard({ txt, heading, cont, discover = false }) {
  return (
    <div className="info-card-hero-container">
      <div className="info-card-img">{txt}</div>
      <div className="info-card-head">{heading}</div>
      <div className="info-card-cont">{cont}</div>
      {discover && <div className="discover">Discover</div>}
    </div>
  );
}

export default InfoCard;
