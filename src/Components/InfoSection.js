// information section in the tabbed area

import makePrettyName from "../functions/makePrettyName.js";
import nameLookup from "../images/favicon-name-black.png";

export default function InfoSection() {
  function copyCurrentCitations() {
    const currentCitations = document.getElementsByClassName("url-button-link");
    let output = `<h4>Read on:</h4>
<ul>\n`;
    for (let i = 0; i < currentCitations.length; i++) {
      let prettySiteUrl = makePrettyName(currentCitations[i].attributes.site.value);

      output += `<li><a href="${currentCitations[i].href}" rel="noreferrer" target="_blank">${prettySiteUrl} </a></li>\n`;
    }
    output += `</ul>`;
    navigator.clipboard.writeText(output);
  }

  function copyCurrentCitationsSentnce() {
    const currentCitations = document.getElementsByClassName("url-button-link");
    let output = `<p>`;
    for (let i = 0; i < currentCitations.length; i++) {
      let prettySiteUrl;
      switch (currentCitations[i].attributes.site.value) {
        case "SC":
          prettySiteUrl = "SuttaCentral.net";
          break;
        case "SF":
          prettySiteUrl = "SuttaFriends.org";
          break;
        case "DT":
          prettySiteUrl = "DhammaTalks.org";
          break;
        case "ABT":
          prettySiteUrl = "Ancient-Buddhist-Texts.net";
          break;
        default:
          prettySiteUrl = "Website";
      }
      output += `<a href="${currentCitations[i].href}" rel="noreferrer" target="_blank">${prettySiteUrl}</a> ,`;
    }
    output += `</p>`;
    navigator.clipboard.writeText(output);
  }

  return (
    <div id="info-section">
      <h4>Other Lookup Tools</h4>
      <div id="INFO-index" className="index-button-sections">
        <a className="card-link index" href="https://benmneb.github.io/pts-converter/" target="_blank" rel="noreferrer">
          Pali Text Society Lookup (e.g. M ii 234)
        </a>
        <a className="card-link index" href="https://name.readingfaithfully.org" target="_blank" rel="noreferrer">
          <img width="13px" src={nameLookup}></img> Pali Sutta Name Lookup
        </a>
      </div>
      <h4>Instructions and tips</h4>
      <ul>
        <li>Citations can be separated by spaces, periods, colons or dashes.</li>
        <li>Book abbreviations can be in upper or lower case.</li>
        <li>To force a chapter number or verse, try adding "ch" or "v" before the number.</li>
        <li>
          Translators only apply to SuttaCentral links. If provided translator is not available, one that is will be
          shown.
        </li>
        <li>Saṁyutta Nikaya = SN; Sutta&nbsp;Nipāta&nbsp;=&nbsp;Snp.</li>
        <li>Some translations in SN and AN on DhammaTalks.org have different numbers than on other sites.</li>
        <li>
          Coverage of <a href="https://accesstoinsight.org/">AccessToInsight.org</a> is partial.
        </li>
        <li>
          Does your citation have roman numerals, e.g D ii 123, M v 234? Then try this{" "}
          <a href="https://benmneb.github.io/pts-converter/" rel="noreferrer" target="_blank">
            PTS Converter
          </a>
        </li>
        <li>
          Copy to the clipboard current citations as:
          <ul>
            <li>
              <button onClick={copyCurrentCitations}>HTML list</button>
            </li>
            <li>
              <button onClick={copyCurrentCitationsSentnce}>HTML sentence</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
