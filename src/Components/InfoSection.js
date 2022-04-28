export default function InfoSection() {
  return (
    <div id="info-section">
      <h4>Other Lookup Tools</h4>
      <div id="INFO-index" className="index-button-sections">
        <a className="card-link index" href="https://benmneb.github.io/pts-converter/" target="_blank" rel="noreferrer">
          Pali Text Society Lookup (e.g. M ii 234)
        </a>
        <a
          className="card-link index"
          href="https://sutta.readingfaithfully.org/name/"
          target="_blank"
          rel="noreferrer"
        >
          Pali Sutta Name Lookup
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
          Does your citation have roman numerals, e.g D ii 123, M v 234? Then try this{" "}
          <a href="https://benmneb.github.io/pts-converter/" rel="noreferrer" target="_blank">
            PTS Converter
          </a>
        </li>
        <li>
          Know the name of the sutta? Try the{" "}
          <a rel="noreferrer" href="https://www.ancient-buddhist-texts.net/Reference/Sutta.htm" target="_blank">
            ABT lookup.
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}
