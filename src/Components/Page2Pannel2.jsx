import React from "react";
import InfoCard from "./InfoCard";

function Page2Pannel2() {
  return (
    <div className="pannel2-container">
      <div className="pannel22-hero-container">
        <div className="pannel-1-left-cont">
          <div className="pannel22-head">
            Grow your business with better Shipping
          </div>
          <div className="pannel1-txt2">
            We help the world’s leading organizations follow their shipping
          </div>
          <div className="pannel2-info">
            <InfoCard
              discover={true}
              txt={"A"}
              heading={"Shipping communication"}
              cont={
                "At eripuit signiferumque sea, vel ad mucius molestie,cu labitur iuvaret vulputate sed."
              }
            />
            <InfoCard
              discover={true}
              txt={"B"}
              heading={"Marketing"}
              cont={
                "At eripuit signiferumque sea, vel ad mucius molestie,cu labitur iuvaret vulputate sed."
              }
            />
            <InfoCard
              discover={true}
              txt={"C"}
              heading={"Logistic performance"}
              cont={
                "At eripuit signiferumque sea, vel ad mucius molestie,cu labitur iuvaret vulputate sed."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2Pannel2;
