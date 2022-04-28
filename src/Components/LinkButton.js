export default function LinkButton(props) {
  const url = props.url;
  const site = props.site;
  if (!/http/.test(url)) {
    // this test is necessary because it's easier to send a blank link pluss the sutta central author and layout strings already attached. Otherwise we could just test for an empty string
    return null;
  } else {
    return (
      <a className="url-button-link" target="_blank" rel="noreferrer" href={url}>
        <div className={"url-button-class " + site}>
          <div className="image-container">
            <img width="20px" className="logoImage" src={require(`../images/${site}.png`).default} alt="logo"></img>
          </div>

          {url.slice(8)}
        </div>
      </a>
    );
  }
}
