import { structure } from "../structure.js";

export default function createCustomUrlSitesLink(props) {
  let { site, book, firstNumber, secondNumber, chapterFlag, error } = props;
  if (error) {
    return "";
  }

  // const books = Object.keys(structure);
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
      console.warn("error getting site file");
  }

  const { rootUrl, suffixUrl } = website.constants;
  const bookObject = website[book];

  if (!bookObject) {
    //the book in question does not exist in the website in question

    return url;
  }

  const chapter_links = bookObject.links.chapter_links;

  // this is used for books that are sutta based
  function createSuttaLink() {
    if (chapterFlag === true) {
      // this is probably only going to be used for Dhp.
      if (chapter_links && firstNumber <= Object.keys(structure[book].chapters).length) {
        console.log("what's this crazy thing for " + site);
        return rootUrl + chapter_links[firstNumber];
      }
      return ""; // because they wanted a chapter page but there wasn't one
    }
    if (bookObject.links.main_page && firstNumber === 0) {
      return rootUrl + bookObject.links.main_page;
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
          return rootUrl + available[i][1] + suffixUrl;
        }
      }
    }
    return "";
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
      chapter_links &&
      firstNumber <= Object.keys(structure[book].chapters).length &&
      chapter_links[firstNumber]
    ) {
      url = rootUrl + chapter_links[firstNumber];
    } else if (bookObject && bookObject.links.main_page && firstNumber === 0) {
      // test to see if first number is zero and there is a link in the book object to a main page
      url = bookObject.links.main_page;
    } else if (bookObject.complete && secondNumber > 0) {
      // this is a complete book and there is a second number
      url = rootUrl + available[firstNumber][secondNumber - 1][1] + suffixUrl;
    } else if (Object.keys(available).length > 0) {
      //not complete book but there is something in `available`
      Object.keys(available).forEach(chapterKey => {
        if (parseInt(chapterKey, 10) === firstNumber) {
          // found the right chapter
          available[chapterKey].forEach(sutta => {
            // loop through suttas available
            if (bookObject.range_suttas_required && bookObject.range_suttas_required === true) {
              // this book requires a test for range suttas
              if (sutta.length === 2) {
                // there is no range
                if (secondNumber === sutta[0]) {
                  url = rootUrl + sutta[1];
                }
              } else if (sutta.length === 3) {
                //there is a range
                if (secondNumber >= sutta[0] && secondNumber <= sutta[1]) {
                  url = rootUrl + sutta[2];
                }
              }
            } else {
              if (secondNumber === sutta[0]) {
                url = rootUrl + sutta[1];
              }
            }
          });
        }
      });
    }
  }

  // this is the main function

  if (site === "ABT" && book === "ja") {
    if (firstNumber > 0) {
      const paddedCitation = ("00" + firstNumber).slice(-3);
      url = rootUrl + "/English-Texts/Jataka/" + paddedCitation + ".htm";
    } else {
      url = bookObject.links.main_page;
    }
  } else {
    const format = structure[book].format[0];
    if (format === "sutta") {
      url = createSuttaLink();
    } else if (format === "chapter") {
      createChapterLink();
    }
  }

  return url;
}
