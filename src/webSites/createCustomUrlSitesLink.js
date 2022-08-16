import { structure } from "../structure.js";
import { suttas } from "../suttas.js";

export default function createCustomUrlSitesLink(props) {
  let { site, book, firstNumber, secondNumber, chapterFlag, error } = props;
  const books = Object.keys(structure);
  let url = ""; // this is the only thing that will be returned
  let website;

  switch (site) {
    case "ABT":
      website = require("./ancientBuddhistTexts.js").ancientBuddhistTexts;
      break;
    case "DPR":
      website = require("./digitalPaliReader.js").digitalPaliReader;
      break;
    case "ATI":
      website = require("./accessToInsight.js").accessToInsight;
      break;
    case "PA":
      website = require("./paliAudio.js").paliAudio;
      break;
    default:
      console.log("error getting site file");
  }

  const { rootUrl, suffixUrl } = website.constants;
  const bookObject = website[book];

  // this is used for books that are sutta based
  function createSuttaLink() {
    if (
      //test for the chapter flag
      chapterFlag === true
    ) {
      if (bookObject.links.chapter_links && firstNumber <= Object.keys(structure[book].chapters).length) {
        url = rootUrl + bookObject.links.chapter_links[firstNumber];
      }
    } else if (bookObject) {
      if (bookObject.links.main_page && firstNumber === 0) {
        url = rootUrl + bookObject.links.main_page;
      }
      const available = bookObject.available;

      if (bookObject.range_suttas) {
        const rangeArray = bookObject.range_suttas;
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

  // this is used for books that are chapter based
  function createChapterLink() {
    // for chapter books, `available` is going to be an OBJECT with the keys being the chapter number and the values being an ARRAY of ARRAYS in the format of
    // sutta NUMBER and STRING with the final part of the url
    // unless there is a range, in which case it is in the format of
    // first sutta NUMBER in range, second NUMBER in range, final part of the url
    const available = bookObject.available;
    if (
      //test for the chapter flag
      chapterFlag === true &&
      bookObject.links.chapter_links &&
      firstNumber <= Object.keys(structure[book].chapters).length &&
      bookObject.links.chapter_links[firstNumber]
    ) {
      url = rootUrl + bookObject.links.chapter_links[firstNumber];
    } else if (
      // test to see if first number is zero and there is a link in the book object to a main page
      bookObject &&
      bookObject.links.main_page &&
      firstNumber === 0
    ) {
      url = bookObject.links.main_page;
    } else if (
      // this is a complete book and there is a second number
      bookObject.complete &&
      secondNumber > 0
    ) {
      url = rootUrl + available[firstNumber][secondNumber - 1][1] + suffixUrl;
    } else if (
      //not complete book but there is something in `available`
      Object.keys(available).length > 0
    ) {
      Object.keys(available).forEach(chapterKey => {
        if (parseInt(chapterKey, 10) === firstNumber) {
          // found the right chapter
          available[chapterKey].forEach(sutta => {
            // loop through suttas available
            if (
              // this book requires a test for range suttas
              bookObject.range_suttas_required &&
              bookObject.range_suttas_required === true
            ) {
              if (
                // there is no range
                sutta.length === 2
              ) {
                if (secondNumber === sutta[0]) {
                  url = rootUrl + sutta[1];
                }
              } else if (
                //there is a range
                sutta.length === 3
              ) {
                if (secondNumber >= sutta[0] && secondNumber <= sutta[1]) {
                  // TODO see if secondNumber is between sutta[0] and sutta[1]
                  // if it is,
                  url = rootUrl + sutta[2];
                }
              }
            }
          });
        }
      });
    }
  }

  // this is the main function
  if (bookObject) {
    if (book === "ja" && error === "") {
      // FIX This is exclusively for ABT. If jataka is added to DPR, then this will need to be changed.
      if (firstNumber > 0) {
        const paddedCitation = ("00" + firstNumber).slice(-3);
        url = rootUrl + "/English-Texts/Jataka/" + paddedCitation + ".htm";
      } else {
        url = bookObject.links.main_page;
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
