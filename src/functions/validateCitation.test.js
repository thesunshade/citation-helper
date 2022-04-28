import validateCitation from "./validateCitation";

test("test Udana sutta format ciation, ud 11 -> ud2.1", () => {
  expect(validateCitation("ud", { firstNumber: 11, secondNumber: 0, error: "" })).toStrictEqual({
    book: "ud",
    firstNumber: 2,
    secondNumber: 1,
    verseFlag: undefined,
    chapterFlag: undefined,
    error: "",
    warning: "Get chapter page if it exisits by adding ‘ch’, e.g. udch1",
  });
});
test("test Udana format ciation, ud 1.99 -> sutta number too high", () => {
  expect(validateCitation("ud", { firstNumber: 1, secondNumber: 99, error: "" })).toStrictEqual({
    book: "ud",
    firstNumber: 1,
    secondNumber: 99,
    verseFlag: undefined,
    chapterFlag: undefined,
    error: "Sutta number too high. Not in Udāna.",
    warning: "Get chapter page if it exisits by adding ‘ch’, e.g. udch1",
  });
});

test("test Udana format ciation, ud 7 -> 1.7", () => {
  // if book is both chapters and sutta,
  // then if a single number is <= chapter number
  // then the suttas of the first book should be returned
  // !!! unless it is the Dhammapada!!!
  expect(validateCitation("ud", { firstNumber: 7, secondNumber: 0, error: "" })).toStrictEqual({
    book: "ud",
    firstNumber: 1,
    secondNumber: 7,
    verseFlag: undefined,
    chapterFlag: undefined,
    error: "",
    warning: "Get chapter page if it exisits by adding ‘ch’, e.g. udch1",
  });
});

test("test  thag123 citation", () => {
  expect(validateCitation("thag", { firstNumber: 123, secondNumber: 0, error: "" })).toStrictEqual({
    book: "thag",
    firstNumber: 2,
    secondNumber: 2,
    verseFlag: false,
    chapterFlag: undefined,
    error: "",
    warning: "",
  });
});

test("test itivuttaka chapter format ciation, itv2.2", () => {
  // If a book is both "sutta" and "chapter", then a second number should hijack the whole thing and turn it into a chapter-sutta citation
  // applies to Itivuttaka
  expect(validateCitation("iti", { firstNumber: 2, secondNumber: 2, error: "" })).toStrictEqual({
    book: "iti",
    firstNumber: 29,
    secondNumber: 0,
    verseFlag: undefined,
    chapterFlag: undefined,
    error: "",
    warning: "Get chapter page if it exisits by adding ‘ch’, e.g. itich1",
  });
});
