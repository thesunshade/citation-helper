import { suttas } from "../suttas.js";

export default function findSuttaName(bookName, suttaNumber) {
  const firstNumber = suttaNumber.firstNumber;
  const secondNumber = suttaNumber.secondNumber;
  let suttaName = "";

  // if (firstNumber === 0) {
  //   return null;
  // }
  const completeCitation = `${bookName}${firstNumber ? " " + firstNumber : ""}${
    secondNumber ? "." + secondNumber : ""
  }`;

  for (let i = 0; i < suttas.length; i++) {
    if (completeCitation === suttas[i][0].toLowerCase()) {
      suttaName = suttas[i][1];
      // document.title = `${decodeURI(document.location.search).replace("?q=", "")} ${suttas[i][1]}`;
      i = suttas.length + 1;
    }
  }

  // if the sutta name doesn't end with "Sutta$", "gāthā$", "vatthu$"
  // then add Sutta to the end

  // if (
  //   suttaName &&
  //   !suttaName.match(/Sutta$/) &&
  //   !suttaName.match(/vatthu$/) &&
  //   !suttaName.match(/gāthā$/) &&
  //   !suttaName.match(/khandhaka$/) &&
  //   !suttaName.match(/Saṁyutta$/) &&
  //   !suttaName.match(/Nikāya$/) &&
  //   !suttaName.match(/Khuddakapāṭha$/) &&
  //   !suttaName.match(/Dhammapada$/) &&
  //   !suttaName.match(/Udāna$/) &&
  //   !suttaName.match(/Itivuttaka$/) &&
  //   !suttaName.match(/Sutta Nipāta$/) &&
  //   !suttaName.match(/Vimānavatthu$/) &&
  //   !suttaName.match(/Petavatthu$/) &&
  //   !suttaName.match(/Theragātha$/) &&
  //   !suttaName.match(/Therīgāthā$/) &&
  //   !suttaName.match(/Jātaka$/) &&
  //   !suttaName.match(/sikkhāpada$/)
  // ) {
  //   suttaName += " Sutta";
  // }

  return suttaName;
}
