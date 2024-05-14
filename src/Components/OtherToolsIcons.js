// Just the row of buttons for other tools

import dppnIcon from "../images/favicon-dppn-black.png";
import nameLookup from "../images/favicon-name-black.png";
import pedIcon from "../images/favicon-ped-black.png";
import scLight from "../images/favicon-sc-light-black.png";
import rfIcon from "../images/favicon-rf-black.png";
import githubIcon from "../images/GitHub-Mark-64px-black.png";
import drfIcon from "../images/favicon-drf-black.png";
import randomIcon from "../images/favicon-random-black.png";
import labsIcon from "../images/labs.png";

export default function OtherToolsIcons() {
  return (
    <div className="icon-links-area">
      <a href="http://readingfaithfully.org" title="Support for your sutta reading practice" rel="noreferrer" target="_blank">
        <img width="20px" src={rfIcon} alt="ReadingFaithfully.org icon" />
      </a>
      <a href="http://daily.readingfaithfully.org" title="Daily Suttas" rel="noreferrer" target="_blank">
        <img width="20px" src={drfIcon} alt="Daily.ReadingFaithfully.org icon" />
      </a>
      <a href="http://r.readingfaithfully.org" title="Random Suttas" rel="noreferrer" target="_blank">
        <img width="20px" src={randomIcon} alt="R.ReadingFaithfully.org icon" />
      </a>
      <a href="https://name.readingfaithfully.org" title="Sutta Name Lookup Tool" rel="noreferrer" target="_blank">
        <img width="20px" src={nameLookup} alt="Sutta Name Lookup tool icon" />
      </a>
      <a href="https://ped.readingfaithfully.org" title="Lightweight interface for the Pali English Dictionary" rel="noreferrer" target="_blank">
        <img width="20px" src={pedIcon} alt="Lightweight PED lookup icon" />
      </a>
      <a href="https://sc.readingfaithfully.org" title="A lightweight interface for SuttaCentral.net" rel="noreferrer" target="_blank">
        <img width="20px" src={scLight} alt="SuttaCentral.org Lightweight interface icon" />
      </a>
      <a href="https://dppn.readingfaithfully.org" title="A lightweight interface the Dictionary of Pali Proper Names" rel="noreferrer" target="_blank">
        <img width="20px" src={dppnIcon} alt="DPPN search icon" />
      </a>
      <a href="https://readingfaithfully.org/lab/" title="Other tools under development" rel="noreferrer" target="_blank" className="labs">
        <img width="17px" src={labsIcon} style={{ position: "relative", top: "2px" }} alt="Labs icon" />
      </a>
      <a href="https://github.com/thesunshade/citation-helper#readme" title="The source code for this site" rel="noreferrer" target="_blank">
        <img width="20px" src={githubIcon} alt="GitHub icon" />
      </a>
    </div>
  );
}
