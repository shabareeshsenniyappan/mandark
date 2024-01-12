import React from "react";
import InfoCard from "./InfoCard";

function Pannel2() {
  return (
    <div className="pannel2-container">
      <div className="pannel2-hero-container">
        <div className="pannel2-head">
          We offer a complete range of features
        </div>
        <div className="pannel2-info">
          <InfoCard
            txt={"A"}
            heading={"Store Integration"}
            cont={
              "Eos tota dicunt democritum no. Has natumgubergren ne. Est viris soleat sadipscing cu. Legereepicuri insolens eu nec, dicit virtute urbanitas idnam, qui in habeo semper eligendi."
            }
          />
          <InfoCard
            txt={"B"}
            heading={"Data Protection"}
            cont={
              "Ne nam phaedrum consequat, adhuc aliquid ea pri,eum eligendi incorrupte referrentur in. Vix ad senserit salutandi argumentum. Ei eam definiebas reformidans, exerci persecuti no ius."
            }
          />
          <InfoCard
            txt={"C"}
            heading={"Invoice Generator"}
            cont={
              "Eos tota dicunt democritum no. Has natumgubergren ne. Est viris soleat sadipscing cu. Legereepicuri insolens eu nec, dicit virtute urbanitas idnam, qui in habeo semper eligendi."
            }
          />
          <InfoCard
            txt={"D"}
            heading={"Auto Responder"}
            cont={
              "Eos tota dicunt democritum no. Has natumgubergren ne. Est viris soleat sadipscing cu. Legereepicuri insolens eu nec, dicit virtute urbanitas idnam, qui in habeo semper eligendi."
            }
          />
          <InfoCard
            txt={"E"}
            heading={"Social Plugins"}
            cont={
              "Eos tota dicunt democritum no. Has natumgubergren ne. Est viris soleat sadipscing cu. Legereepicuri insolens eu nec, dicit virtute urbanitas idnam, qui in habeo semper eligendi."
            }
          />
          <InfoCard
            txt={"F"}
            heading={"Data Backup"}
            cont={
              "Eos tota dicunt democritum no. Has natumgubergren ne. Est viris soleat sadipscing cu. Legereepicuri insolens eu nec, dicit virtute urbanitas idnam, qui in habeo semper eligendi."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Pannel2;
