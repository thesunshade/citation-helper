import { structure } from "../structure.js";

export default function createCustomUrlSitesLink(props) {
  let { site, book, firstNumber, secondNumber, chapterFlag, error } = props;
  if (error) {
    return "";
  }

  // const books = Object.keys(structure);
  let url = ""; // this is the only thing that will be returned
  let website;

  if (site === "BMC" && localStorage.bmc === "false") {
    return "";
  }

  switch (site) {
    case "ABT":
      website = require("./ancientBuddhistTexts.js").ancientBuddhistTexts;
      break;
    case "TO":
      website = require("./tripitakaOnline.js").tripitakaOnline;
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
    case "BMC":
      website = require("./buddhistMonasticCode.js").buddhistMonasticCode;
      break;
    case "DT":
      website = require("./dhammaTalksCustom.js").dhammaTalksCustom;
      break;
    default:
      console.warn("error getting site file");
  }

  const { rootUrl, suffixUrl } = website.constants;
  const bookObject = website[book];

  if (!bookObject) {
    //the book in question does not exist in the website in question
    return "";
  }

  const chapter_links = bookObject.links.chapter_links;

  // -----------------  this is used for books that are sutta based
  function createSuttaLink() {
    if (chapterFlag === true) {
      // this is probably only going to be used for Dhp.
      if (chapter_links && firstNumber <= Object.keys(structure[book].chapters).length) {
        return chapter_links[firstNumber];
      }
      return ""; // because they wanted a chapter page but there wasn't one
    }
    if (bookObject.links.main_page && firstNumber === 0) {
      return bookObject.links.main_page;
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

    if (available && available.length > 0) {
      for (let i = 0; i < available.length; i++) {
        if (available[i].length === 2) {
          if (firstNumber === available[i][0]) {
            return rootUrl + available[i][1] + suffixUrl;
          }
        } else if (available[i].length === 3) {
          const lower = available[i][0];
          const upper = available[i][1];
          if (firstNumber >= lower && firstNumber <= upper) {
            return rootUrl + available[i][2] + suffixUrl;
          }
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
    url = "";
    if (chapterFlag === true && chapter_links && firstNumber <= Object.keys(structure[book].chapters).length && chapter_links[firstNumber]) {
      //chapter flag true
      return chapter_links[firstNumber];
    } else if (bookObject && bookObject.links.main_page && firstNumber === 0) {
      // first number is zero and there is a link in the book object to a main page
      return bookObject.links.main_page;
    } else if (secondNumber === 0) {
      // only first number given and chapter links exist
      if (bookObject.links.chapter_links) {
        url = bookObject.links.chapter_links[firstNumber];
      }
    } else if (bookObject.complete && secondNumber > 0) {
      // this is a complete book and there is a second number
      return rootUrl + available[firstNumber][secondNumber - 1][1] + suffixUrl;
    } else if (Object.keys(available).length > 0) {
      //not complete book but there is something in `available`

      Object.keys(available).forEach(chapterKey => {
        if (parseInt(chapterKey, 10) === firstNumber) {
          // found the right chapter
          available[chapterKey].forEach(sutta => {
            // loop through suttas available
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
          });
        }
      });
    }
    return url;
  }

  // this is the main function

  if (site === "ABT" && book === "ja") {
    if (firstNumber > 0) {
      const paddedCitation = ("00" + firstNumber).slice(-3);
      return rootUrl + "/English-Texts/Jataka/" + paddedCitation + ".htm";
    }
    return bookObject.links.main_page;
  }

  const format = structure[book].format[0];
  if (format === "sutta") {
    return createSuttaLink();
  } else if (format === "chapter") {
    return createChapterLink();
  }

  // return url;
}
