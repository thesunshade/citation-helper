import { blurbs } from "../data/blurbs.js";

export default function findSuttaBlurb(bookName, suttaNumber) {
  const firstNumber = suttaNumber.firstNumber;
  const secondNumber = suttaNumber.secondNumber;

  const completeCitation = `${bookName}${firstNumber ? firstNumber : ""}${secondNumber ? "." + secondNumber : ""}`;
  // console.log(completeCitation);
  // console.log(blurbs[completeCitation]);
  return blurbs[completeCitation];
}
