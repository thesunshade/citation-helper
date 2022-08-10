// information section in the tabbed area

import makePrettyName from "../functions/makePrettyName.js";
import nameLookup from "../images/favicon-name-black.png";

export default function InfoSection() {
  function copyCurrentCitationsList() {
    const currentCitations = document.getElementsByClassName("url-button-link");
    let output = `<ul>\n`;
    for (let i = 0; i < currentCitations.length; i++) {
      let prettySiteUrl = makePrettyName(currentCitations[i].attributes.site.value);
      if (prettySiteUrl !== "") {
        output += `<li><a href="${currentCitations[i].href}" rel="noreferrer" target="_blank">${prettySiteUrl} </a></li>\n`;
      }
    }
    output += `</ul>`;
    navigator.clipboard.writeText(output);
  }

  function copyCurrentCitationsSentence() {
    const currentCitations = document.getElementsByClassName("url-button-link");
    let output = "";
    for (let i = 0; i < currentCitations.length; i++) {
      console.log(i);
      let prettySiteUrl = makePrettyName(currentCitations[i].attributes.site.value);
      console.log(prettySiteUrl);
      if (prettySiteUrl !== "") {
        output += `<a href="${currentCitations[i].href}" rel="noreferrer" target="_blank">${prettySiteUrl}</a>`;
        if (i === currentCitations.length - 1) {
          output += ".";
        } else if (i === currentCitations.length - 2 && i !== 0) {
          output += ", and ";
        } else {
          output += ", ";
        }
      }
    }
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
        <li>Abbreviations can be upper or lower case.</li>
        <li>To force a chapter number or verse, try adding “ch” or “v” before the number.</li>
        <li>
          Translators options only apply to SuttaCentral links. If translator is not available, one that <i>is</i> will
          be shown.
        </li>
        <li>Saṁyutta Nikaya = SN; Sutta&nbsp;Nipāta&nbsp;=&nbsp;Snp.</li>
        <li>Some translations in SN and AN on DhammaTalks.org have different numbers than on other sites.</li>
        <li>
          Coverage of <a href="https://accesstoinsight.org/">AccessToInsight.org</a> is partial.
        </li>
        <li>
          Does the citation have roman numerals, e.g D ii 123? Try the{" "}
          <a href="https://benmneb.github.io/pts-converter/" rel="noreferrer" target="_blank">
            PTS Converter
          </a>
        </li>
        <li>
          Copy to the clipboard current citations as:
          <ul className="copy-buttons">
            <li>
              <button onClick={copyCurrentCitationsList}>HTML list</button>
            </li>
            <li>
              <button onClick={copyCurrentCitationsSentence}>HTML sentence</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
