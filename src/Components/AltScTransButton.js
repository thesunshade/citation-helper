import { useState, useEffect } from "react";
import plusicon from "../images/plus-icon.png";

export default function AltScTransButton(props) {
  const { book, firstNumber, secondNumber, error } = props.citation;
  const [citation, setCitation] = useState(buildGoodCitationFromParts(book, firstNumber, secondNumber));
  const [altTransLink, setAltTransLink] = useState("");
  const [authorListTooltip, setAuthorListTooltip] = useState("");

  let authorList = [];

  useEffect(() => {
    setCitation(buildGoodCitationFromParts(book, firstNumber, secondNumber));
    let language = localStorage.language ? localStorage.language : "en";
    let minimumAlternativeTranslations = language === "en" ? 2 : 1;
    if (citation) {
      fetch(`https://suttacentral.net/api/suttas/${citation}?lang=${language}&siteLanguage=${language}`)
        .then(response => response.json())
        .then(actualData => {
          if (actualData.candidate_authors.length >= minimumAlternativeTranslations) {
            setAltTransLink(`https://suttacentral.net/${citation}`);
            for (let i = 0; i < actualData.suttaplex.translations.length; i++) {
              if (actualData.suttaplex.translations[i].lang === language) {
                authorList.push(actualData.suttaplex.translations[i].author);
              }
            }
            setAuthorListTooltip("Translations: " + authorList.join(", "));
          } else {
            setAltTransLink("");
          }
        })
        .catch(error => {});
    }
  }, [citation, props]);

  function buildGoodCitationFromParts(book, firstNumber, secondNumber) {
    if (error) {
      return;
    }
    const suttaBooks = ["dn", "mn", "kp", "iti", "vv", "pv", "ja"];
    const chapterBooks = ["sn", "an", "ud", "snp", "thag", "thig"];
    let citation = "";
    // test for complete citation
    if (firstNumber > 0 && suttaBooks.includes(book)) {
      citation = `${book}${firstNumber}`;
    } else if (firstNumber > 0 && secondNumber > 0 && chapterBooks.includes(book)) {
      citation = `${book}${firstNumber}.${secondNumber}`;
    }
    return citation;
  }

  if (altTransLink && citation) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        className="url-button-class alt-sc-trans"
        href={altTransLink}
        data-citaion={citation}
        title={authorListTooltip}
      >
        <img height="25px" src={plusicon} alt="Additional translations on SuttaCentral.net" />
      </a>
    );
  } else {
    return null;
  }
}
