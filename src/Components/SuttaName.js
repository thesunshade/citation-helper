//This puts the sutta name for a citation at the top of the app

import { suttas } from "../suttas.js";

export default function SuttaName(props) {
  const bookName = props.bookName;
  const firstNumber = props.suttaNumber.firstNumber;
  const secondNumber = props.suttaNumber.secondNumber;
  let suttaName = "";

  if (firstNumber === 0) {
    return null;
  }
  const completeCitation = `${bookName} ${firstNumber}${secondNumber ? ":" + secondNumber : ""}`;

  for (let i = 0; i < suttas.length; i++) {
    // console.log(completeCitation, suttas[i][0]);
    if (completeCitation === suttas[i][0].toLowerCase()) {
      suttaName = "~ " + suttas[i][1] + " ~";
      document.title = `${decodeURI(document.location.search).replace("?q=", "")} ${suttas[i][1]}`;
      i = suttas.length + 1;
    }
  }

  return <p className="sutta-name">{suttaName}</p>;
}
