export default function LinkButtonAlt(props) {
  const url = props.url;
  const site = props.site;
  if (url === "") {
    return null;
  } else {
    return (
      <a target="_blank" rel="noreferrer" href={url}>
        <div className={"url-button-class " + site}>
          <img width="20px" className="logoImage" src={require(`../images/${site}.png`).default} alt="logo"></img>

          {url.slice(8)}
        </div>
      </a>
    );
  }
}
