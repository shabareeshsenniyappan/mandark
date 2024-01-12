import React from "react";
import ButtonComponent from "./ButtonComponent";
import BoxComponent from "./BoxComponent";

function Pannel1() {
  return (
    <div className="pannel1-hero-container">
      <div className="pannel-1-left-cont">
        {" "}
        <div className="pannel1-txt1">We help you find the best solution </div>
        <div className="pannel1-txt2">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum.
        </div>
        <div>
          <ButtonComponent name={"Start free trial"} />
        </div>
      </div>
      <div>
        <BoxComponent />
      </div>
    </div>
  );
}

export default Pannel1;
