import React from "react";
import ButtonComponent from "./ButtonComponent";
import BoxComponent from "./BoxComponent";

function Pannel3() {
  return (
    <div className="pannel2-container">
      <div className="pannel3-hero-container">
        <div className="pannel-1-left-cont">
          {" "}
          <div className="pannel1-txt1">Product Statistic </div>
          <div className="pannel1-txt2">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </div>
          <div>
            <ButtonComponent name={"Learn more"} />
          </div>
        </div>
        <div>
          <BoxComponent />
        </div>
      </div>
    </div>
  );
}

export default Pannel3;
