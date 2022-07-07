import makePrettyName from "../functions/makePrettyName.js";

export default function LinkButton(props) {
  const url = props.url.replace("www.", "");

  const site = props.site;

  function addToHistory() {
    const currentUrl = new URL(window.location);
    window.history.pushState({ page: "1" }, "", currentUrl);
  }

  if (!/http/.test(url)) {
    // this test is necessary because it's easier to send a blank link pluss the sutta central author and layout strings already attached. Otherwise we could just test for an empty string
    return null;
  } else if (localStorage.checked && !localStorage.checked.includes(makePrettyName(site))) {
    return null;
  } else {
    let displayUrl = url.slice(8);
    if (displayUrl.length > 52) {
      displayUrl = displayUrl.replace(/\/.+\//, "/…/");
    }
    return (
      <a
        className="url-button-link"
        target="_blank"
        rel="noreferrer"
        href={url}
        site={site}
        onClick={() => {
          addToHistory();
        }}
      >
        <div className={"url-button-class " + site}>
          <div className="image-container">
            <img width="20px" className="logoImage" src={require(`../images/${site}.png`).default} alt="logo"></img>
          </div>

          {displayUrl}
        </div>
      </a>
    );
  }
}
