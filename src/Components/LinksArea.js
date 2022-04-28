import { structure } from "../structure.js";
import React from "react";

export default function LinksArea(props) {
  const site = props.site;
  let website;

  if ((site === "DT") | (site === "SF") | (site === "SC")) {
    // this bit is clearly not the right way to do this
    if (site === "DT") {
      website = require("../webSites/dhammaTalks.js").dhammaTalks;
    } else if (site === "SC") {
      website = require("../webSites/suttaCentral.js").suttaCentral;
    } else {
      website = require("../webSites/suttaFriends.js").suttaFriends;
    }
  }

  const linksArray = [];
  const { rootUrl, rootCardUrl } = website.constants;

  for (var key in website) {
    if (website.hasOwnProperty(key)) {
      if (key !== "constants") {
        linksArray.push(
          <>
            {/* <a className="card-link" href={rootCardUrl + website[key].links.card} target="_blank" rel="noreferrer">
              {structure[key].book_abbreviation[0]}
            </a> */}
            <a className="all-link" rel="noreferrer" href={rootUrl + website[key].links.all} target="_blank">
              {structure[key].book_abbreviation[0]}
            </a>
          </>
        );
      }
    }
  }
  return (
    <>
      <div className="links-area">
        {linksArray.map((link, index) => (
          <div key={index} className="book-link-area">
            {link}
          </div>
        ))}
      </div>
    </>
  );
}
