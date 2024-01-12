import React from "react";
import InfoCard2 from "./InfoCard2";
import BoxComponent from "./BoxComponent";

function Pannel4() {
  return (
    <div className="pannel4-hero-container">
      <div className="pannel4-container">
        <div>
          <BoxComponent />
        </div>
        <div className="pannel4-infocard">
          <InfoCard2
            txt={"A"}
            cont={
              "Eos tota dicunt democritum no. Has natumgubergren ne. Est viris soleat sadipscing cu. Legereepicuri insolens eu nec, dicit virtute urbanitas idnam, qui in habeo semper eligendi."
            }
          />
          <InfoCard2
            txt={"B"}
            cont={
              "Eos tota dicunt democritum no. Has natumgubergren ne. Est viris soleat sadipscing cu. Legereepicuri insolens eu nec, dicit virtute urbanitas idnam, qui in habeo semper eligendi."
            }
          />
          <InfoCard2
            txt={"C"}
            cont={
              "Eos tota dicunt democritum no. Has natumgubergren ne. Est viris soleat sadipscing cu. Legereepicuri insolens eu nec, dicit virtute urbanitas idnam, qui in habeo semper eligendi."
            }
          />
          <InfoCard2
            txt={"D"}
            cont={
              "Eos tota dicunt democritum no. Has natumgubergren ne. Est viris soleat sadipscing cu. Legereepicuri insolens eu nec, dicit virtute urbanitas idnam, qui in habeo semper eligendi."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Pannel4;
