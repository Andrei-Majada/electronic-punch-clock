import React from "react";
import Logo from "../assets/imgs/logo.svg";
import Vector from "../assets/imgs/vector.svg";
import "./styles.css";
/**
 * Just a home page.
 */
function Home() {
  return (
    <div
      class="ui container"
      style={{ backgroundColor: "#424242", height: "102.2%" }}
    >
      <div class="ui column padded grid">
        <div class="center aligned column">
          <div class="ui small image">
            <img src={Logo} alt="logo" />
          </div>
          <div className="ui hidden divider"></div>
          <div class="ui large image">
            <img src={Vector} alt="base" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
