export default function DTSection() {
  function IndexArea() {
    return (
      <div id="SF-index" className="index-button-sections">
        <a className="card-link index" href="https://suttafriends.org/" target="_blank" rel="noreferrer">
          Home
        </a>
        <a
          className="card-link index"
          href="https://suttafriends.org/sutta-topics-index/"
          target="_blank"
          rel="noreferrer"
        >
          Subject
        </a>
        <a className="card-link index" href="https://suttafriends.org/simile-index/" target="_blank" rel="noreferrer">
          Similes
        </a>
        <a className="card-link index" href="https://suttafriends.org/people-index/" target="_blank" rel="noreferrer">
          Names
        </a>
        <a className="card-link index" href="https://suttafriends.org/words" target="_blank" rel="noreferrer">
          Terms
        </a>
      </div>
    );
  }

  return (
    <div id="SF-section" className="links-area">
      <h3>SuttaFriends.org</h3>
      <h4>Homepage & Indexes</h4>
      <IndexArea />
      <div className="nikaya-group">
        <a
          className="all-link DN"
          title="Dīgha Nikāya"
          rel="noreferrer"
          href="https://suttafriends.org/DN"
          target="_blank"
        >
          DN
        </a>

        <a
          className="all-link MN"
          title="Majjhima Nikāya"
          rel="noreferrer"
          href="https://suttafriends.org/MN"
          target="_blank"
        >
          MN
        </a>

        <a
          className="all-link SN"
          title="Saṁyutta Nikāya"
          rel="noreferrer"
          href="https://suttafriends.org/SN"
          target="_blank"
        >
          SN
        </a>

        <a
          className="all-link AN"
          title="Aṅgutara Nikāya"
          rel="noreferrer"
          href="https://suttafriends.org/AN"
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
          href="https://suttafriends.org/khp"
          target="_blank"
        >
          Khp
        </a>

        <a
          className="all-link Dhp"
          title="Dhammapada"
          rel="noreferrer"
          href="https://suttafriends.org/Dhp"
          target="_blank"
        >
          Dhp
        </a>

        <a className="all-link Ud" title="Udāna" rel="noreferrer" href="https://suttafriends.org/ud" target="_blank">
          Ud
        </a>

        <a
          className="all-link Itv"
          title="Itivuttaka"
          rel="noreferrer"
          href="https://suttafriends.org/itv"
          target="_blank"
        >
          Itv
        </a>

        <a
          className="all-link Snp"
          title="Sutta Nipāta"
          rel="noreferrer"
          href="https://suttafriends.org/snp"
          target="_blank"
        >
          Snp
        </a>

        <a
          className="all-link Vv"
          title="Vimāna Vatthu"
          rel="noreferrer"
          href="https://suttafriends.org/vv"
          target="_blank"
        >
          Vv
        </a>

        <a
          className="all-link Pv"
          title="Peta Vatthu"
          rel="noreferrer"
          href="https://suttafriends.org/pv"
          target="_blank"
        >
          Pv
        </a>

        <a
          className="all-link Thag"
          title="Theragāthā"
          rel="noreferrer"
          href="https://suttafriends.org/thag"
          target="_blank"
        >
          Thag
        </a>

        <a
          className="all-link Thig"
          title="Therīgāthā"
          rel="noreferrer"
          href="https://suttafriends.org/thig"
          target="_blank"
        >
          Thig
        </a>
      </div>
    </div>
  );
}
