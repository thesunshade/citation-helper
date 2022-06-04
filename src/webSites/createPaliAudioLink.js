import { structure } from "../structure.js";
import { paliAudio as website } from "./paliAudio.js";

export default function createPaliAudioLink(props) {
  let { book, firstNumber, secondNumber, chapterFlag, error } = props;
  const books = Object.keys(structure);
  let url = "";
  const { rootUrl, suffixUrl } = website.constants;

  function createSuttaLink() {
    if (
      //test for the chapter flag
      chapterFlag === true
    ) {
      if (website[book].links.chapter_links && firstNumber <= Object.keys(structure[book].chapters).length) {
        url = website[book].links.chapter_links[firstNumber];
      }
    } else if (website[book]) {
      if (website[book].links.main_page && firstNumber === 0) {
        url = website[book].links.main_page;
      }
      const available = website[book].available;
      if (website[book].range_suttas) {
        const rangeArray = website[book].range_suttas;
        for (let i = 0; i < rangeArray.length; i++) {
          const [lower, upper] = rangeArray[i];
          if ((firstNumber >= lower) & (firstNumber <= upper)) {
            // the below code only works because the book is complete and the array is in exact order so that i is one less than the chapter number
            firstNumber = i + 1;
          }
        }
      }

      if (available.length > 0) {
        for (let i = 0; i < available.length; i++) {
          if (firstNumber === available[i][0]) {
            url = rootUrl + available[i][1] + suffixUrl;
          }
        }
      }
    }
  }

  function createChapterLink() {
    const available = website[book].available;
    if (
      //test for the chapter flag
      chapterFlag === true &&
      website[book].links.chapter_links &&
      firstNumber <= Object.keys(structure[book].chapters).length
    ) {
      url = website[book].links.chapter_links[firstNumber];
    } else if (website[book].links.main_page && firstNumber === 0) {
      url = website[book].links.main_page;
    } else if (website[book].complete && secondNumber > 0) {
      // this is a complete book
      url = rootUrl + available[firstNumber][secondNumber - 1][1] + suffixUrl;
    } else if (Object.keys(available).length > 0) {
      //not complete book
      Object.keys(available).forEach(chapterKey => {
        if (parseInt(chapterKey, 10) === firstNumber) {
          available[chapterKey].forEach(sutta => {
            if (secondNumber === sutta[0]) {
              url = rootUrl + sutta[1];
            }
          });
        }
      });
    }
  }

  // this is the main function
  if (website[book]) {
    if (book === "ja" && error === "") {
      if (firstNumber > 0) {
        const paddedCitation = ("00" + firstNumber).slice(-3);
        url = rootUrl + "/English-Texts/Jataka/" + paddedCitation + ".htm";
      } else {
        url = website[book].links.main_page;
      }
    } else if (error === "") {
      //&& firstNumber > 0
      books.forEach(bookKey => {
        const format = structure[bookKey].format[0];
        if (book === bookKey) {
          if (format === "sutta") {
            createSuttaLink();
          } else if (format === "chapter") {
            //&& secondNumber > 0
            createChapterLink();
          }
        }
      });
    }
  }
  return url;
}
