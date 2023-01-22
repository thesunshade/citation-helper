import { suttas } from "../data/suttas.js";

export default function findSuttaName(bookName, suttaNumber) {
  const firstNumber = suttaNumber.firstNumber;
  const secondNumber = suttaNumber.secondNumber;

  const completeCitation = `${bookName}${firstNumber ? " " + firstNumber : ""}${
    secondNumber ? "." + secondNumber : ""
  }`;
  let suttaName = "";

  for (let i = 0; i < suttas.length; i++) {
    if (completeCitation === suttas[i][0].toLowerCase()) {
      suttaName = suttas[i][1];
      i = suttas.length + 1;
    }
  }

  return suttaName;
}
