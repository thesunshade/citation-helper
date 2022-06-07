export default function SCSection() {
  function IndexArea() {
    return (
      <div id="SC-index" className="index-button-sections">
        <a className="card-link index" href="https://suttacentral.net/" target="_blank" rel="noreferrer">
          Home
        </a>
        <a className="card-link index" href="https://suttacentral.net/subjects" target="_blank" rel="noreferrer">
          Subject
        </a>
        <a className="card-link index" href="https://suttacentral.net/similes" target="_blank" rel="noreferrer">
          Similes
        </a>
        <a className="card-link index" href="https://suttacentral.net/names" target="_blank" rel="noreferrer">
          Names
        </a>
        <a className="card-link index" href="https://suttacentral.net/terminology" target="_blank" rel="noreferrer">
          Terms
        </a>
      </div>
    );
  }

  function TocSuttasLinkArea() {
    return (
      <>
        <div id="SC-toc-suttas-links-area">
          <div className="nikaya-group">
            <a
              className="card-link DN"
              title="Dīgha Nikāya"
              href="https://suttacentral.net/pitaka/sutta/long/dn"
              target="_blank"
              rel="noreferrer"
            >
              DN
            </a>
            <a
              className="card-link MN"
              title="Majjhima Nikāya"
              href="https://suttacentral.net/pitaka/sutta/middle/mn"
              target="_blank"
              rel="noreferrer"
            >
              MN
            </a>
            <a
              className="card-link SN"
              title="Saṁyutta Nikāya"
              href="https://suttacentral.net/pitaka/sutta/linked/sn"
              target="_blank"
              rel="noreferrer"
            >
              SN
            </a>

            <a
              className="card-link AN"
              title="Aṅgutara Nikāya"
              href="https://suttacentral.net/pitaka/sutta/numbered/an"
              target="_blank"
              rel="noreferrer"
            >
              AN
            </a>

            <a
              className="card-link KN"
              title="Khuddaka Nikāya"
              href="https://suttacentral.net/pitaka/sutta/minor/kn"
              target="_blank"
              rel="noreferrer"
            >
              KN
            </a>
          </div>
          <div className="nikaya-group">
            <a
              className="card-link Khp"
              title="Khuddakapāṭha"
              href="https://suttacentral.net/pitaka/sutta/minor/kn/kp"
              target="_blank"
              rel="noreferrer"
            >
              Khp
            </a>

            <a
              className="card-link Dhp"
              title="Dhammapada"
              href="https://suttacentral.net/pitaka/sutta/minor/kn/dhp"
              target="_blank"
              rel="noreferrer"
            >
              Dhp
            </a>

            <a
              className="card-link Ud"
              title="Udāna"
              href="https://suttacentral.net/pitaka/sutta/minor/kn/ud"
              target="_blank"
              rel="noreferrer"
            >
              Ud
            </a>
            <a
              className="card-link Itv"
              title="Itivuttaka"
              href="https://suttacentral.net/pitaka/sutta/minor/kn/iti"
              target="_blank"
              rel="noreferrer"
            >
              Itv
            </a>
            <a
              className="card-link Snp"
              title="Sutta Nipāta"
              href="https://suttacentral.net/pitaka/sutta/minor/kn/snp"
              target="_blank"
              rel="noreferrer"
            >
              Snp
            </a>
            <a
              className="card-link Vv"
              title="Vimāna Vatthu"
              href="https://suttacentral.net/pitaka/sutta/minor/kn/vv"
              target="_blank"
              rel="noreferrer"
            >
              Vv
            </a>
            <a
              className="card-link Pv"
              title="Peta Vatthu"
              href="https://suttacentral.net/pitaka/sutta/minor/kn/pv"
              target="_blank"
              rel="noreferrer"
            >
              Pv
            </a>
            <a
              className="card-link Thag"
              title="Theragāthā"
              href="https://suttacentral.net/pitaka/sutta/minor/kn/thag"
              target="_blank"
              rel="noreferrer"
            >
              Thag
            </a>
            <a
              className="card-link Thig"
              title="Therīgāthā"
              href="https://suttacentral.net/pitaka/sutta/minor/kn/thig"
              target="_blank"
              rel="noreferrer"
            >
              Thig
            </a>
            <a
              className="card-link Ja"
              title="Jātaka"
              href="https://suttacentral.net/pitaka/suttaminor/kn/ja"
              target="_blank"
              rel="noreferrer"
            >
              Ja
            </a>
          </div>
        </div>
      </>
    );
  }

  function AllSuttasLinkArea() {
    return (
      <div id="SC-all-suttas-links-area">
        <div className="nikaya-group">
          <a
            className="all-link DN"
            title="Dīgha Nikāya"
            href="https://suttacentral.net/dn"
            target="_blank"
            rel="noreferrer"
          >
            DN
          </a>

          <a
            className="all-link MN"
            title="Majjhima Nikāya"
            href="https://suttacentral.net/mn"
            target="_blank"
            rel="noreferrer"
          >
            MN
          </a>

          <a
            className="all-link SN"
            title="Saṁyutta Nikāya"
            href="https://suttacentral.net/sn"
            target="_blank"
            rel="noreferrer"
          >
            SN
          </a>

          <a
            className="all-link AN"
            title="Aṅgutara Nikāya"
            href="https://suttacentral.net/an"
            target="_blank"
            rel="noreferrer"
          >
            AN
          </a>
        </div>
        <div className="nikaya-group">
          <a
            className="all-link Khp"
            title="Khuddakapāṭha"
            href="https://suttacentral.net/kp"
            target="_blank"
            rel="noreferrer"
          >
            Khp
          </a>

          <a
            className="all-link Dhp"
            title="Dhammapada"
            href="https://suttacentral.net/dhp"
            target="_blank"
            rel="noreferrer"
          >
            Dhp
          </a>

          <a className="all-link Ud" title="Udāna" href="https://suttacentral.net/ud" target="_blank" rel="noreferrer">
            Ud
          </a>

          <a
            className="all-link Itv"
            title="Itivuttaka"
            href="https://suttacentral.net/itv"
            target="_blank"
            rel="noreferrer"
          >
            Itv
          </a>

          <a
            className="all-link Snp"
            title="Sutta Nipāta"
            href="https://suttacentral.net/snp"
            target="_blank"
            rel="noreferrer"
          >
            Snp
          </a>

          <a
            className="all-link Vv"
            title="Vimāna Vatthu"
            href="https://suttacentral.net/vv"
            target="_blank"
            rel="noreferrer"
          >
            Vv
          </a>

          <a
            className="all-link Pv"
            title="Peta Vatthu"
            href="https://suttacentral.net/pv"
            target="_blank"
            rel="noreferrer"
          >
            Pv
          </a>

          <a
            className="all-link Thag"
            title="Theragāthā"
            href="https://suttacentral.net/thag"
            target="_blank"
            rel="noreferrer"
          >
            Thag
          </a>

          <a
            className="all-link Thig"
            title="Therīgāthā"
            href="https://suttacentral.net/thig"
            target="_blank"
            rel="noreferrer"
          >
            Thig
          </a>

          <a className="all-link Ja" title="Jātaka" href="https://suttacentral.net/ja" target="_blank" rel="noreferrer">
            Ja
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="SC-section">
      <h3>SuttaCentral.net</h3>
      <h4>Homepage & Indexes</h4>
      <IndexArea />
      <h4>Links to Main Page</h4>
      <TocSuttasLinkArea />
      <h4>Links to All suttas in book. May be long.</h4>
      <AllSuttasLinkArea />
    </div>
  );
}
