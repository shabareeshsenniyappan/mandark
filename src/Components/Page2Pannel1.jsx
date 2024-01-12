import React from "react";
import ButtonComponent from "./ButtonComponent";
import ButtonComponent2 from "./ButtonComponent2";

function Page2Pannel1() {
  return (
    <div className="pannel21-container">
      <div className="pannel-1-left-cont">
        <div className="pannel21-head">
          Simplify your online shipping for free this month!
        </div>
        <div className="pannel1-txt2">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te.
        </div>
        <div>
          <ButtonComponent name={"Start free trial "} />
          <ButtonComponent2 name={"Learn more"} />
        </div>
      </div>
    </div>
  );
}

export default Page2Pannel1;
