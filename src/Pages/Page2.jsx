import React from "react";
import Header from "../Components/Header";
import Page2Pannel1 from "../Components/Page2Pannel1";
import Page2Pannel2 from "../Components/Page2Pannel2";

function Page2() {
  return (
    <div>
      <Header ispage2={true} />
      <Page2Pannel1 />
      <Page2Pannel2 />
    </div>
  );
}

export default Page2;
