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
        .catch(error => {
          console.log(error);
        });
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
        <img height="25px" src={plusicon} alt="" />
      </a>
    );
  } else {
    return null;
  }
}

// for (let i = 0; i < actualData.suttaplex.translations.length; i++) {
//   if (actualData.suttaplex.translations[i].lang_name === "English") {
//     console.log(actualData.suttaplex.translations[i].author);
//     setAuthorList(authorList + actualData.suttaplex.translations[i].author);
//     console.log(authorList);
//   }
// }

// THIS WORKS
// useEffect(() => {
//   // console.log("inside use effect, citation: " + citation);
//   setCitation(buildGoodCitationFromParts(book, firstNumber, secondNumber));
//   if (citation) {
//     fetch(`https://suttacentral.net/api/suttas/${citation}`)
//       .then(response => response.json())
//       .then(actualData => {
//         // setData(actualData);
//         if (actualData.candidate_authors.length > 1) {
//           setAltTransLink(`https://suttacentral.net/${citation}`);
//           for (let i = 0; i < actualData.suttaplex.translations.length; i++) {
//             if (actualData.suttaplex.translations[i].lang_name === "English") {
//               // console.log(actualData.suttaplex.translations[i].author);
//               authorList += actualData.suttaplex.translations[i].author;
//               console.log(i, actualData.suttaplex.translations.length - 1);
//               if (i === actualData.suttaplex.translations.length - 1) {
//                 authorList += ".";
//               }
//               console.log(authorList);
//             }
//           }
//           setAuthorListTooltip(authorList);
//         } else {
//           setAltTransLink("");
//           authorList = "";
//         }
//         // console.log(actualData);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
// }, [citation, props]);
