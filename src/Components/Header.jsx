import React from "react";
import ButtonComponent from "./ButtonComponent";

function Header({ ispage2 = false }) {
  const page1 = ["Home", "Features", "Process", "Discover", "Feedback"];
  const page2 = ["Features", "Pricing", "Contact"];
  return (
    <div className={"header-hero-container"}>
      <div className="logo-header">LOGO</div>
      <div className="options-header">
        {ispage2
          ? page2.map((e, i) => (
              <span className="opt-head" key={i}>
                {e}
              </span>
            ))
          : page1.map((e, i) => (
              <span className="opt-head" key={i}>
                {e}
              </span>
            ))}
      </div>
      <div>
        {" "}
        {ispage2 ? (
          <>
            <span className="head-alt-txt">Log In</span>
            <ButtonComponent name={"Start Now"} stle={2} />
          </>
        ) : (
          <ButtonComponent name={"Log In"} />
        )}
      </div>
    </div>
  );
}

export default Header;
