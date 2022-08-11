import { useState, useEffect } from "react";

export default function AltScTransButton(props) {
  console.log("AltSCTRansButton started");
  const { book, firstNumber, secondNumber, error } = props.citation;

  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [citation, setCitation] = useState(buildGoodCitationFromParts(book, firstNumber, secondNumber));
  const [altTransLink, setAltTransLink] = useState("");

  useEffect(() => {
    console.log("inside use effect, citation: " + citation);
    if (citation) {
      fetch(`https://suttacentral.net/api/suttas/${citation}`)
        .then(response => response.json())
        .then(actualData => {
          setData(actualData);
          if (actualData.candidate_authors.length > 1) setAltTransLink(`https://suttacentral.net/${citation}`);
          console.log(actualData);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    console.log("in the data useEffect");
    console.log(data);
  }, [data]);

  // console.log(book, firstNumber, secondNumber, error);
  function buildGoodCitationFromParts(book, firstNumber, secondNumber) {
    const suttaBooks = ["dn", "mn", "kp", "iti", "vv", "pv", "ja"];
    const chapterBooks = ["sn", "an", "ud", "snp", "thag", "thig"];
    let citation = "";
    // test for complete citation
    if (firstNumber > 0 && suttaBooks.includes(book)) {
      citation = `${book}${firstNumber}`;
    } else if (firstNumber > 0 && secondNumber > 0 && chapterBooks.includes(book)) {
      citation = `${book}${firstNumber}.${secondNumber}`;
    }
    console.log("in the build function, citaiton: " + citation);
    return citation;
  }

  if (altTransLink) {
    return (
      <a
        className="url-button-class alt-sc-trans"
        href={altTransLink}
        title="Multiple translations available on SuttaCentral.net"
      >
        <svg baseProfile="tiny" height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px">
          <path
            d="M18,10h-4V6c0-1.104-0.896-2-2-2s-2,0.896-2,2l0.071,4H6c-1.104,0-2,0.896-2,2s0.896,2,2,2l4.071-0.071L10,18  c0,1.104,0.896,2,2,2s2-0.896,2-2v-4.071L18,14c1.104,0,2-0.896,2-2S19.104,10,18,10z"
            fill="white"
          />
        </svg>
      </a>
    );
  } else {
    return null;
  }
}
