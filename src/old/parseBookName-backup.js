import { structure } from "../structure.js";

export default function parseBookName(userInput) {
  const books = Object.keys(structure);
  let sanitizedBookName = "";

  for (let x = 0; x < books.length; x++) {
    let bookKey = books[x];
    for (let i = 0; i < structure[bookKey].book_abbreviation.length; i++) {
      const regex = new RegExp("^" + structure[bookKey].book_abbreviation[i], "i");
      if (regex.test(userInput)) {
        sanitizedBookName = bookKey;
        x = books.length;
      }
    }
  }

  return sanitizedBookName;
}
