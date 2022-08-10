export default function AltScTransButton(props) {
  const { book, firstNumber, secondNumber, error } = props.citation;

  // console.log(props);

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
    return citation;
  }

  if (error) {
    return null;
  }
  const citation = buildGoodCitationFromParts(book, firstNumber, secondNumber);
  if (citation === "") {
    return null;
  }
  console.log(citation);
  // if complete send to api
  fetch(`https://suttacentral.net/api/suttas/${citation}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.candidate_authors);
      return <div>{data.candidate_authors[0]}</div>;
    })
    .catch(error => {
      console.log(error);
    });
  // if not complete return null
}
