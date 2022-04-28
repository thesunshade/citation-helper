export default function DTSection() {
  function IndexArea() {
    return (
      <div id="DT-index" className="index-button-sections">
        <a
          className="card-link index"
          href="https://www.dhammatalks.org/suttas/index.html"
          target="_blank"
          rel="noreferrer"
        >
          Suttas Home
        </a>
        <a className="card-link index" href="https://www.dhammatalks.org/search.html" target="_blank" rel="noreferrer">
          Search
        </a>
        <a
          className="card-link index"
          href="https://www.dhammatalks.org/suttas/glossary.html"
          target="_blank"
          rel="noreferrer"
        >
          Glossary
        </a>
        <a
          className="card-link index"
          href="https://www.dhammatalks.org/random_sutta.php"
          target="_blank"
          rel="noreferrer"
        >
          Random Sutta
        </a>
      </div>
    );
  }

  return (
    <div id="DT-section" className="links-area">
      <h4>Homepage & Misc</h4>
      <IndexArea />
      <div className="nikaya-group">
        <a
          className="all-link DN"
          title="Dīgha Nikāya"
          rel="noreferrer"
          href="https://www.dhammatalks.org/suttas/DN/index_DN.html"
          target="_blank"
        >
          DN
        </a>
        <a
          className="all-link MN"
          title="Majjhima Nikāya"
          rel="noreferrer"
          href="https://www.dhammatalks.org/suttas/MN/index_MN.html"
          target="_blank"
        >
          MN
        </a>
        <a
          className="all-link SN"
          title="Saṁyutta Nikāya"
          rel="noreferrer"
          href="https://www.dhammatalks.org/suttas/SN/index_SN.html"
          target="_blank"
        >
          SN
        </a>
        <a
          className="all-link AN"
          title="Aṅgutara Nikāya"
          rel="noreferrer"
          href="https://www.dhammatalks.org/suttas/AN/index_AN.html"
          target="_blank"
        >
          AN
        </a>
      </div>
      <div className="nikaya-group">
        <a
          className="all-link Khp"
          title="Khuddakapāṭha"
          rel="noreferrer"
          href="https://www.dhammatalks.org/suttas/KN/Khp/index_Khp.html"
          target="_blank"
        >
          Khp
        </a>
        <a
          className="all-link Dhp"
          title="Dhammapada"
          rel="noreferrer"
          href="https://www.dhammatalks.org/suttas/KN/Dhp/index_Dhp.html"
          target="_blank"
        >
          Dhp
        </a>

        <a
          className="all-link Ud"
          title="Udāna"
          rel="noreferrer"
          href="https://www.dhammatalks.org/suttas/KN/Ud/index_Ud.html"
          target="_blank"
        >
          Ud
        </a>

        <a
          className="all-link Itv"
          title="Itivuttaka"
          rel="noreferrer"
          href="https://www.dhammatalks.org/suttas/KN/Iti/index_Iti.html"
          target="_blank"
        >
          Itv
        </a>

        <a
          className="all-link Snp"
          title="Sutta Nipāta"
          rel="noreferrer"
          href="https://www.dhammatalks.org/suttas/KN/StNp/index_StNp.html"
          target="_blank"
        >
          Snp
        </a>

        <a
          className="all-link Thag"
          title="Theragāthā"
          rel="noreferrer"
          href="https://www.dhammatalks.org/suttas/KN/Thag/index_Thag.html"
          target="_blank"
        >
          Thag
        </a>

        <a
          className="all-link Thig"
          title="Therīgāthā"
          rel="noreferrer"
          href="https://www.dhammatalks.org/suttas/KN/Thig/index_Thig.html"
          target="_blank"
        >
          Thig
        </a>
      </div>
    </div>
  );
}
