import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import clsx from "clsx";
import settingsIcon from "./images/settings.png";
import parseBookName from "./functions/parseBookName.js";
import parseNumbers from "./functions/parseNumbers.js";
import validateCitation from "./functions/validateCitation.js";
import createAncientBuddhistTextsLink from "./webSites/createAncientBuddhistTextsLink.js";
import createPaliAudioLink from "./webSites/createPaliAudioLink.js";
import createWebsiteLink from "./webSites/createWebsiteLink.js";
import LinkButton from "./Components/LinkButton.js";
import OtherToolsIcons from "./Components/OtherToolsIcons.js";
import TabbedLinkArea from "./Components/TabbedLinkArea.js";
import SuttaName from "./Components/SuttaName.js";
//history// import addToHistory from "./functions/addToHistory.js";

function App() {
  window.onpopstate = function (e) {
    setInputUrl(urlToQuery(e.state.page));
  };
  function urlToQuery(url) {
    return url.replace("?q=", "").replace(/-/g, " ").replace(/\s/g, " ");
  }
  let [inputUrl, setInputUrl] = useState(urlToQuery(decodeURI(document.location.search)));
  window.history.replaceState({ page: decodeURI(document.location.search) }, "", document.location);
  let [errorMessage, setErrorMessage] = useState("");
  let [warningMessage, setWarningMessage] = useState("");

  // Settings
  const checkList = [
    "SuttaCentral.net",
    "SuttaFriends.org",
    "DhammaTalks.org",
    "Ancient-Buddhist-Texts.net",
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
    if (updatedList.length === 0) {
      updatedList = ["SuttaCentral.net"];
    }
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
  // function handleKeyPress(event) {
  //   if (event.key === "Enter" && addParamsToSuttaCentralUrl() !== "") {
  //     window.open(addParamsToSuttaCentralUrl(), "_blank");
  //   }
  // }

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

  function changeInputUrl(urlInput) {
    setInputUrl(urlInput);
    clearTimeout(window.prevTimer);
    window.prevTimer = setTimeout(() => {
      urlInput = "?q=" + urlInput.replace(/\s/g, "-");
      window.history.pushState({ page: urlInput }, "", `${urlInput}`);
    }, "500");
    console.log(window.prevTimer);
  }

  // ========================================== RETURN
  return (
    <div className="App">
      <div id="url-builder">
        <div className="sutta-name-container">
          <SuttaName bookName={parseBookName(inputUrl)} suttaNumber={parseNumbers(inputUrl)} />
        </div>
        <div id="imput-area-link-area">
          <div id="input-field-container">
            <label htmlFor="user-citation">Enter your citation</label>
            <input
              id="user-citation"
              autoFocus
              type="text"
              value={inputUrl}
              name="address"
              onChange={event => changeInputUrl(event.target.value)}
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
            <LinkButton
              site={"PA"}
              url={createPaliAudioLink({
                ...validateCitation(parseBookName(inputUrl), parseNumbers(inputUrl)),
              })}
            />
            <LinkButton
              site={"SCV"}
              url={createWebsiteLink({
                site: "SCV",
                ...validateCitation(parseBookName(inputUrl), parseNumbers(inputUrl)),
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
                    <input
                      value={item}
                      type="checkbox"
                      checked={checked.includes(item) ? "checked" : ""}
                      onChange={event => handleCheck(event)}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
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
                  <div className="option-descriptions">If it's not available you will get Bhikkhu Sujato's.</div>
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
    </div>
  );
}

export default App;
