// This creates the link buttons for SC, SF, DT
// Possible because their links are all very regular
// takes two parameters:
// site, in the form of site abbreviation
// url, the final url for the suta

import makePrettyName from "../functions/makePrettyName.js";

export default function LinkButton(props) {
  if (!props.url) return null;

  const url = props.url.replace("www.", "");
  const site = props.site;

  if (!/http/.test(url)) {
    // this test is necessary because it's easier to send a blank link pluss the sutta central author and layout strings already attached. Otherwise we could just test for an empty string
    return null;
  } else if (localStorage.checked && !localStorage.checked.includes(makePrettyName(site))) {
    return null;
  } else {
    let displayUrl = url.slice(8);
    if (displayUrl.length > 52) {
      displayUrl = displayUrl.replace(/\/.+\//, "/…/").replace(/sutta\?search=/, "…");
    }
    if (displayUrl.length > 30 && /^suttacentral/.test(displayUrl)) {
      displayUrl = displayUrl.slice(0, 29) + "…";
    } else {
      if (displayUrl.length > 38) {
        displayUrl = displayUrl.slice(0, 39) + "…";
      }
    }
    displayUrl = displayUrl.replace(/suttas\/KN/, "…").replace("tipitaka/kn", "…");
    const icon = require(`../images/${site}.png`);
    return (
      <a
        className={`url-button-class url-button-link ${site}`}
        target="_blank"
        rel="noreferrer"
        href={url}
        site={site}
        title={site === "SCL" ? "Light version of Sutta Central" : `Open on ${makePrettyName(site)}`}
      >
        <span className="image-container">
          <img width="20px" className="logoImage" src={icon} alt="logo"></img>
        </span>

        <span className="display-url">{displayUrl}</span>
      </a>
    );
  }
}
