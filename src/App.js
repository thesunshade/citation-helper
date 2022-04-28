import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import clsx from "clsx";
// import favicon from "./images/favicon.png";
// import faviconTitle from "./functions/faviconTitle.js";

import parseBookName from "./functions/parseBookName.js";
import parseNumbers from "./functions/parseNumbers.js";
import validateCitation from "./functions/validateCitation.js";
import createAncientBuddhistTextsLink from "./webSites/createAncientBuddhistTextsLink.js";
import createWebsiteLink from "./webSites/createWebsiteLink.js";
import LinkButton from "./Components/LinkButton.js";
import OtherToolsIcons from "./Components/OtherToolsIcons.js";
import TabbedLinkArea from "./Components/TabbedLinkArea.js";

function App() {
  // faviconTitle(favicon, "Citation Helper");
  let [inputUrl, setInputUrl] = useState("");
  let [translator, setTranslator] = useState("/en/sujato");
  let [layout, setLayout] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [warningMessage, setWarningMessage] = useState("");

  //allows enter press to open link in new tab
  function handleKeyPress(event) {
    if (event.key === "Enter" && addParamsToSuttaCentralUrl() !== "") {
      window.open(addParamsToSuttaCentralUrl(), "_blank");
    }
  }

  // displays the error message when one exists
  useEffect(() => {
    let { error, warning } = validateCitation(parseBookName(inputUrl), parseNumbers(inputUrl));
    setErrorMessage(error);

    if (error) {
      setErrorMessage(error);
      setWarningMessage("");
    } else {
      setWarningMessage(warning);
    }
  }, [inputUrl]);

  // TODO this needs to be untangled.
  // add translator and layout to SuttaCentral url
  function addParamsToSuttaCentralUrl() {
    let parseNumbersResult = parseNumbers(inputUrl);
    let url = createWebsiteLink({
      site: "SC",
      ...validateCitation(parseBookName(inputUrl), parseNumbersResult),
    });

    if (parseNumbersResult.chapterFlag === true) {
      return url;
    } else if (/#.*$/.test(url)) {
      let verseId = url.match(/#.*$/);
      let firstPartOfUrl = url.slice(0, url.match(/#.*$/).index);
      if (translator === "/en/sujato") {
        return firstPartOfUrl + translator + verseId;
      } else {
        return firstPartOfUrl + translator + layout;
      }
    } else if (/pitaka/.test(url)) {
      return url;
    } else if (translator === "/en/sujato") {
      return url + translator + layout;
    } else {
      return url + translator;
    }
  }

  // ========================================== RETURN
  return (
    <div className="App">
      <div id="url-builder">
        <div id="imput-area-link-area">
          <div id="input-field-container">
            <label htmlFor="user-citation">Enter your citation</label>
            <input
              id="user-citation"
              autoFocus
              type="text"
              value={inputUrl}
              name="address"
              onChange={event => setInputUrl(event.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="for example: mn140"
            />
          </div>
          <div id="message-area">
            <span id="warning-message">{warningMessage}</span>
            <span id="error-message">{errorMessage}</span>
          </div>
          {/*       LINK BUTTON AREA        */}
          <div id="link-button-area">
            <LinkButton site={"SC"} url={addParamsToSuttaCentralUrl()} />
            <LinkButton
              site={"SF"}
              url={createWebsiteLink({
                site: "SF",
                ...validateCitation(parseBookName(inputUrl), parseNumbers(inputUrl)),
              })}
            />
            <LinkButton
              site={"DT"}
              url={createWebsiteLink({
                site: "DT",
                ...validateCitation(parseBookName(inputUrl), parseNumbers(inputUrl)),
              })}
            />
            <LinkButton
              site={"ABT"}
              url={createAncientBuddhistTextsLink({
                ...validateCitation(parseBookName(inputUrl), parseNumbers(inputUrl)),
              })}
            />
          </div>
        </div>
        <div id="options-area">
          <div id="radiobutton-area-box-label">SuttaCentral Options</div>
          <div id="radiobutton-area-box" className="radiobutton-area-box-container">
            <div
              id="translator-button-area"
              className="radiobuttonarea"
              value={translator}
              onChange={e => setTranslator(e.target.value)}
            >
              <label>
                <input type="radio" value="" name="translator" /> All Translators
              </label>

              <label>
                <input type="radio" value="/en/sujato" name="translator" defaultChecked /> Bhante Sujato
              </label>
              <label>
                <input type="radio" value="/en/bodhi" name="translator" /> Bhante Bodhi
              </label>

              <label>
                <input type="radio" value="/pli/ms" name="translator" /> Pāli
              </label>
            </div>
            <div
              id="layout-button-area"
              className={clsx({ disabled: translator !== "/en/sujato", radiobuttonarea: true })}
              value={layout}
              onChange={e => setLayout(e.target.value)}
            >
              <label disabled={translator !== "/en/sujato"}>
                <input disabled={translator !== "/en/sujato"} type="radio" value="?layout=plain" name="layout" />{" "}
                English Only
              </label>
              <label disabled={translator !== "/en/sujato"}>
                <input disabled={translator !== "/en/sujato"} type="radio" value="?layout=linebyline" name="layout" />{" "}
                Line by Line
              </label>
              <label disabled={translator !== "/en/sujato"}>
                <input disabled={translator !== "/en/sujato"} type="radio" value="?layout=sidebyside" name="layout" />{" "}
                Side by Side
              </label>
              <label disabled={translator !== "/en/sujato"}>
                <input disabled={translator !== "/en/sujato"} type="radio" value="" name="layout" /> Unspecified
              </label>
            </div>
          </div>
        </div>
        <OtherToolsIcons />
      </div>
      {/* end of url-builder */}
      <TabbedLinkArea />
      {/* <LinksArea site={"SC"} /> */}
      {/* <h3>SuttaCentral</h3>
      <LinksArea site={"SC"} />
      <hr />
      <h3>SuttaFriends</h3>
      <LinksArea site={"SF"} />
      <hr />
      <h3>DhammaTalks</h3>
      <LinksArea site={"DT"} /> */}
    </div>
  );
}

export default App;
