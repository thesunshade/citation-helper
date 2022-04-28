import { structure } from "../structure.js";
import React from "react";

export default function LinksArea() {
  const linksArray = [];
  for (var key in structure) {
    if (structure.hasOwnProperty(key)) {
      linksArray.push(
        <>
          <a
            className="card-link"
            href={"https://suttacentral.net/pitaka/sutta" + structure[key].links.card}
            target="_blank"
            rel="noreferrer"
          >
            {structure[key].book_abbreviation[0]}
          </a>
          <a
            className="all-link"
            rel="noreferrer"
            href={"https://suttacentral.net" + structure[key].links.all}
            target="_blank"
          >
            All
          </a>
        </>
      );
    }
  }
  return (
    <>
      <div id="links-area">
        {linksArray.map((link, index) => (
          <div key={index} className="book-link-area">
            {link}
          </div>
        ))}
      </div>
      <div id="websites-links">
        <a href="https://suttacentral.net" target="_blank" rel="noreferrer">
          SuttaCentral.net
        </a>
        <a href="https://suttafriends.org" target="_blank" rel="noreferrer">
          SuttaFriends.org
        </a>
        <a href="https://www.dhammatalks.org/suttas/index.html" target="_blank" rel="noreferrer">
          DhammaTalks.org
        </a>
        <a
          href="https://www.ancient-buddhist-texts.net/Texts-and-Translations//index.htm"
          target="_blank"
          rel="noreferrer"
        >
          ancient-buddhist-texts.net
        </a>
      </div>
    </>
  );
}
