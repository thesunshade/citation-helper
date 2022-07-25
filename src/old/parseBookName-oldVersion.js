import { structure } from "../structure.js";

export default function parseBookName(userInput) {
  const books = Object.keys(structure);
  let sanitizedBookName = "";

  books.forEach(bookKey => {
    for (let i = 0; i < structure[bookKey].book_abbreviation.length; i++) {
      const regex = new RegExp(structure[bookKey].book_abbreviation[i], "i");
      if (regex.test(userInput)) {
        sanitizedBookName = bookKey;
      }
    }
  });
  return sanitizedBookName;
}
