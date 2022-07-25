// The area at the bottom of the app

import { useState } from "react";
import InfoSection from "./InfoSection.js";
import ABTSection from "./ABTSection.js";
import DTSection from "./DTSection.js";
import SCSection from "./SCSection.js";
import SFSection from "./SFSection.js";
import SC from "../images/SC.png";
import SF from "../images/SF.png";
import DT from "../images/DT.png";
import ABT from "../images/ABT.png";
import info from "../images/info.png";

export default function TabbedLinkArea() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <div id="tabbed-links-area">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs SC-tabs active-tabs" : "tabs SC-tabs"}
          onClick={() => toggleTab(1)}
        >
          <img width="20px" className="logoImage" src={SC} alt="logo"></img>
          <div className="tab-titles">SuttaCentral</div>
        </button>
        <button
          className={toggleState === 2 ? "tabs SF-tabs active-tabs" : "tabs SF-tabs"}
          onClick={() => toggleTab(2)}
        >
          <img width="20px" className="logoImage" src={SF} alt="logo"></img>
          <div className="tab-titles"> SuttaFriends</div>
        </button>
        <button
          className={toggleState === 3 ? "tabs DT-tabs active-tabs" : "tabs DT-tabs"}
          onClick={() => toggleTab(3)}
        >
          <img width="20px" className="logoImage" src={DT} alt="logo"></img>
          <div className="tab-titles">DhammaTalks</div>
        </button>
        <button
          className={toggleState === 4 ? "tabs ABT-tabs active-tabs" : "tabs ABT-tabs"}
          onClick={() => toggleTab(4)}
        >
          <img width="20px" className="logoImage" src={ABT} alt="logo"></img>
          <div className="tab-titles">AncientBuddhistTexts</div>
        </button>
        <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>
          <img width="20px" className="logoImage" src={info} alt="logo"></img>
          <div className="tab-titles">Info</div>
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content SC-content  active-content" : "content SC-content"}>
          <SCSection />
        </div>
        <div className={toggleState === 2 ? "content SF-content  active-content" : "content SF-content"}>
          <SFSection />
        </div>
        <div className={toggleState === 3 ? "content DT-content  active-content" : "content DT-content"}>
          <DTSection />
        </div>
        <div className={toggleState === 4 ? "content ABT-content active-content" : "content ABT-content"}>
          <ABTSection />
        </div>
        <div className={toggleState === 5 ? "content  active-content" : "content"}>
          <InfoSection />
        </div>
      </div>
    </div>
  );
}
