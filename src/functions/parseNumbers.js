// This function accepts the user input and looks for (in order) starting from the beginning:

// * verse or chapter flag
// * Optional separator (space, period, dash)
// * first number
// * separator (colon, space, period, dash)
// * second number

// it does no testing. Book names are not checked

export default function parseNumbers(userInput) {
  let verseFlag = false;
  let chapterFlag = false;
  let firstNumber = 0;
  let secondNumber = 0;
  let userInputArray;
  if (userInput) {
    userInputArray = userInput.match(/(verse|v|chapter|ch|c|)[ .-]*(\d+)[: .-]*(\d*)/i);
    if (userInputArray != null) {
      if (userInputArray[2] === "") {
        firstNumber = 0;
      } else {
        firstNumber = parseInt(userInputArray[2], 10);
      }
      if (userInputArray[3] === "") {
        secondNumber = 0;
      } else {
        secondNumber = parseInt(userInputArray[3], 10);
      }
      if (["verse", "v"].includes(userInputArray[1].toLowerCase())) {
        verseFlag = true;
      } else if (["chapter", "ch"].includes(userInputArray[1].toLowerCase())) {
        chapterFlag = true;
      }
    }
  }

  return {
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    verseFlag: verseFlag,
    chapterFlag: chapterFlag,
  };
}
