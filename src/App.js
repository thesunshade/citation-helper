import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import clsx from "clsx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import settingsIcon from "./images/settings.png";
import infoIcon from "./images/info-icon.png";
import parseBookName from "./functions/parseBookName.js";
import parseNumbers from "./functions/parseNumbers.js";
import validateCitation from "./functions/validateCitation.js";
import createCustomUrlSitesLink from "./webSites/createCustomUrlSitesLink.js";
import createWebsiteLink from "./webSites/createWebsiteLink.js";
import LinkButton from "./Components/LinkButton.js";
import AltScTransButton from "./Components/AltScTransButton.js";
import addParamsToSuttaCentralUrl from "./functions/addParamsToSuttaCentralUrl.js";
import OtherToolsIcons from "./Components/OtherToolsIcons.js";
import TabbedLinkArea from "./Components/TabbedLinkArea.js";
import findSuttaName from "./functions/findSuttaName.js";
import findSuttaBlurb from "./functions/findSuttaBlurb.js";
import LanguagesDropdown from "./Components/LanguagesDropdown.js";

function App() {
  window.onpopstate = function (e) {
    setUserInput(urlToUserInput(e.state.page).userInput);
  };

  function urlToUserInput(url) {
    // this function takes what is in the url search param and puts it into the user input format
    // as well as updating suttaName and the page title
    const userInput = url.replace("?q=", "").replace(/-/g, " ").replace(/\s/g, " ");
    const nowSuttaName = findSuttaName(parseBookName(userInput), parseNumbers(userInput));
    const nowSuttaBlurb = findSuttaBlurb(parseBookName(userInput), parseNumbers(userInput));
    document.title = `${userInput} ${nowSuttaName ? nowSuttaName : ""}`;
    // return userInput;
    return { userInput: userInput, suttaName: nowSuttaName, suttaBlurb: nowSuttaBlurb };
  }

  let [suttaName, setSuttaName] = useState(urlToUserInput(decodeURI(document.location.search)).suttaName);
  let [suttaBlurb, setSuttaBlurb] = useState(urlToUserInput(decodeURI(document.location.search)).suttaBlurb);
  let [userInput, setUserInput] = useState(urlToUserInput(decodeURI(document.location.search)).userInput);
  window.history.replaceState({ page: decodeURI(document.location.search) }, "", document.location);
  let [errorMessage, setErrorMessage] = useState("");
  let [warningMessage, setWarningMessage] = useState("");

  // Settings
  const checkList = [
    "SuttaCentral.net",
    "SuttaFriends.org",
    "DhammaTalks.org",
    "Ancient-Buddhist-Texts.net",
    "AccessToInsight.org",
    "DigitalPaliReader.online",
    "PaliAudio.com",
    "Voice.SuttaCentral.net",
  ];
  const [checked, setChecked] = useState(localStorage.checked ? JSON.parse(localStorage.checked) : checkList);
  const [translator, setTranslator] = useState(localStorage.translator ? localStorage.translator : "/en/sujato");
  const [layout, setLayout] = useState(localStorage.layout ? localStorage.layout : " ");

  const handleCheck = event => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    // if (updatedList.length === 0) {
    //   updatedList = ["SuttaCentral.net"];
    // }
    localStorage.checked = JSON.stringify(updatedList);
    setChecked(updatedList);
  };

  //allows enter press to open link in new tab
  function handleKeyPress(event) {
    const firstCreatedLink = document.querySelector(".url-button-link");
    if (event.key === "Enter" && firstCreatedLink) {
      window.open(firstCreatedLink, "_blank");
    }
  }

  // displays the error message when one exists
  useEffect(() => {
    let { error, warning } = validateCitation(parseBookName(userInput), parseNumbers(userInput));
    setErrorMessage(error);
    if (error) {
      setErrorMessage(error);
      setWarningMessage("");
    } else {
      setWarningMessage(warning);
    }
  }, [userInput]);

  function changeUserInput(userInput) {
    setUserInput(userInput);
    const nowSuttaName = findSuttaName(parseBookName(userInput), parseNumbers(userInput));
    setSuttaName(nowSuttaName);
    setSuttaBlurb(findSuttaBlurb(parseBookName(userInput), parseNumbers(userInput)));
    clearTimeout(window.prevTimer);
    const forHistory = "?q=" + userInput.replace(/\s/g, "-");
    window.prevTimer = setTimeout(() => {
      if (document.location.search.replace("?q=", "")) {
        document.title = `${userInput} ${nowSuttaName ? nowSuttaName : ""}`;
      } else {
        document.title = "Citation Helper | ReadingFaithfully.org";
      }
      window.history.pushState({ page: forHistory }, "", `${forHistory}`);
    }, 500);
  }

  // ========================================== RETURN
  return (
    <div className="App">
      <div id="url-builder">
        <div className="sutta-name-container">
          <div>
            <Tippy content={suttaBlurb} hideOnClick="true" interactive="true" theme="tip" trigger="mouseenter click">
              <p className="sutta-name" tabindex="0">
                {suttaName}
                {suttaBlurb ? <img height="18px" src={infoIcon} /> : ""}
              </p>
            </Tippy>
          </div>
        </div>
        <div id="input-area-link-area">
          <div id="input-field-container">
            <label htmlFor="user-citation">Enter your citation</label>
            <input
              id="user-citation"
              autoFocus
              type="text"
              value={userInput}
              name="address"
              onChange={event => changeUserInput(event.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="for example: mn140"
              autoComplete="off"
            />
          </div>
          <div id="message-area">
            <span id="warning-message">{warningMessage}</span>
            <span id="error-message">{errorMessage}</span>
          </div>

          {/*       LINK BUTTON AREA        */}
          <div id="link-button-area">
            <div className="sc-button-area">
              <LinkButton site={"SC"} url={addParamsToSuttaCentralUrl(userInput, translator, layout)} />
              <AltScTransButton citation={validateCitation(parseBookName(userInput), parseNumbers(userInput))} />
              <LinkButton
                site={"SCL"}
                url={createWebsiteLink({
                  site: "SCL",
                  ...validateCitation(parseBookName(userInput), parseNumbers(userInput)),
                })}
              />
            </div>

            <LinkButton
              site={"SF"}
              url={createWebsiteLink({
                site: "SF",
                ...validateCitation(parseBookName(userInput), parseNumbers(userInput)),
              })}
            />
            <LinkButton
              site={"DT"}
              url={createCustomUrlSitesLink({
                site: "DT",
                ...validateCitation(parseBookName(userInput), parseNumbers(userInput)),
              })}
            />
            <LinkButton
              site={"DT"}
              url={createWebsiteLink({
                site: "DT",
                ...validateCitation(parseBookName(userInput), parseNumbers(userInput)),
              })}
            />
            <LinkButton
              site={"ABT"}
              url={createCustomUrlSitesLink({
                site: "ABT",
                ...validateCitation(parseBookName(userInput), parseNumbers(userInput)),
              })}
            />
            <LinkButton
              site={"ATI"}
              url={createCustomUrlSitesLink({
                site: "ATI",
                ...validateCitation(parseBookName(userInput), parseNumbers(userInput)),
              })}
            />
            <LinkButton
              site={"DPR"}
              url={createCustomUrlSitesLink({
                site: "DPR",
                ...validateCitation(parseBookName(userInput), parseNumbers(userInput)),
              })}
            />
            <LinkButton
              site={"PA"}
              url={createCustomUrlSitesLink({
                site: "PA",
                ...validateCitation(parseBookName(userInput), parseNumbers(userInput)),
              })}
            />
            <LinkButton
              site={"BMC"}
              url={createCustomUrlSitesLink({
                site: "BMC",
                ...validateCitation(parseBookName(userInput), parseNumbers(userInput)),
              })}
            />
            <LinkButton
              site={"SCV"}
              url={createWebsiteLink({
                site: "SCV",
                ...validateCitation(parseBookName(userInput), parseNumbers(userInput)),
              })}
            />
          </div>
        </div>

        <div className="button-row">
          <div className="settings-button">
            <img
              width="15px"
              src={settingsIcon}
              alt="Settings Toggle"
              onClick={() => {
                document.getElementById("options-area").classList.toggle("hidden");
              }}
            ></img>
          </div>
          <OtherToolsIcons />
        </div>

        <div id="options-area" className="options-area hidden">
          <div>
            <div id="checkbox-area-box-label">Sites to include:</div>
            <div id="checkbox-area-box" className="checkbox-area-box-container">
              <div className="checkbox-list-container">
                {checkList.map((item, index) => (
                  <div key={index}>
                    <label disabled={item === "SuttaCentral.net" ? true : false}>
                      <input
                        value={item}
                        type="checkbox"
                        checked={item === "SuttaCentral.net" || checked.includes(item) ? "checked" : ""}
                        disabled={item === "SuttaCentral.net" ? true : false}
                        onChange={event => handleCheck(event)}
                      />
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div id="language-area-box">
              <LanguagesDropdown />
            </div>
          </div>
          <div>
            <div id="radiobutton-area-box-label">SuttaCentral Options</div>
            <div id="radiobutton-area-box" className="radiobutton-area-box-container">
              <div
                id="translator-button-area"
                className="radiobuttonarea"
                value={translator}
                onChange={e => {
                  setTranslator(e.target.value);
                  localStorage.translator = e.target.value;
                }}
              >
                <div>Translators:</div>
                <div className="option-descriptions dropdown-description">
                  This is for the main SuttaCentral link button.
                </div>
                <label>
                  <input
                    type="radio"
                    value="/"
                    name="translator"
                    defaultChecked={translator === "/" ? "checked" : ""}
                  />{" "}
                  All Translators
                  <div className="option-descriptions">A card with all translations, including other languages.</div>
                </label>
                <label>
                  <input
                    type="radio"
                    value="/en/sujato"
                    name="translator"
                    defaultChecked={translator === "/en/sujato" ? "checked" : ""}
                  />{" "}
                  Bhante Sujato
                  <div className="option-descriptions"></div>
                </label>
                <label>
                  <input
                    type="radio"
                    value="/en/bodhi"
                    name="translator"
                    defaultChecked={translator === "/en/bodhi" ? "checked" : ""}
                  />{" "}
                  Bhante Bodhi
                  <div className="option-descriptions">If it’s not available you will get Bhikkhu Sujato’s.</div>
                </label>
                <label>
                  <input
                    type="radio"
                    value="/pli/ms"
                    name="translator"
                    defaultChecked={translator === "/pli/ms" ? "checked" : ""}
                  />{" "}
                  Pāli
                  <div className="option-descriptions">Link to only the Pāli.</div>
                </label>
              </div>
              <div>
                <div>Layout:</div>
                <div
                  id="layout-button-area"
                  className={clsx({ disabled: translator !== "/en/sujato", radiobuttonarea: true })}
                  value={layout}
                  onChange={e => {
                    setLayout(e.target.value);
                    localStorage.layout = e.target.value;
                  }}
                >
                  <label disabled={translator !== "/en/sujato"}>
                    <input
                      disabled={translator !== "/en/sujato"}
                      type="radio"
                      value="?layout=plain"
                      name="layout"
                      defaultChecked={layout === "?layout=plain" ? "checked" : ""}
                    />{" "}
                    English Only
                  </label>
                  <label disabled={translator !== "/en/sujato"}>
                    <input
                      disabled={translator !== "/en/sujato"}
                      type="radio"
                      value="?layout=linebyline"
                      name="layout"
                      defaultChecked={layout === "?layout=linebyline" ? "checked" : ""}
                    />{" "}
                    Line by Line
                    <div className="option-descriptions">Only some translators.</div>
                  </label>
                  <label disabled={translator !== "/en/sujato"}>
                    <input
                      disabled={translator !== "/en/sujato"}
                      type="radio"
                      value="?layout=sidebyside"
                      name="layout"
                      defaultChecked={layout === "?layout=sidebyside" ? "checked" : ""}
                    />{" "}
                    Side by Side
                    <div className="option-descriptions">Only some translators.</div>
                  </label>
                  <label disabled={translator !== "/en/sujato"}>
                    <input
                      disabled={translator !== "/en/sujato"}
                      type="radio"
                      value=" "
                      name="layout"
                      defaultChecked={layout === " " ? "checked" : ""}
                    />{" "}
                    Unspecified
                    <div className="option-descriptions">Browser default.</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of url-builder */}
      <TabbedLinkArea />
      <a rel="me" href="https://mastodon.social/@ReadingFaithfully_org">
        Visit ReadingFaithfully on Mastodon
      </a>
    </div>
  );
}

export default App;
