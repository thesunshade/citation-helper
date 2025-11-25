// This function returns a single piece of information: the final website URL
// It is only used for SC, SCV, SCE, SF, and DT because they are very regular

import { structure } from "../structure.js";
import { vinayaBooks } from "../functions/vinayBooks.js";

export default function createWebsiteLink(props) {
  const { site, book, firstNumber, secondNumber, chapterFlag, error } = props;

  if (error) {
    return "";
  }

  let url = "";
  let website;

  switch (site) {
    case "SC":
      website = require("./suttaCentral.js").suttaCentral;
      break;
    case "SF":
      website = require("./suttaFriends.js").suttaFriends;
      break;
    case "DT":
      website = require("./dhammaTalks.js").dhammaTalks;
      break;
    case "SCV":
      website = require("./suttaCentralVoice.js").suttaCentralVoice;
      break;
    case "SCE":
      website = require("./suttaCentralExpress.js").suttaCentralExpress;
      break;
    case "SCL":
      website = require("./suttaCentralLight.js").suttaCentralLight;
      break;
    default:
      console.warn("error getting site file");
      return url;
  }

  const bookObject = website[book];

  if (!bookObject) {
    //the book in question does not exist in the website in question so we are done here.
    return "";
  }

  const { rootUrl, suffixUrl, chapterConnector, rangeConnector } = website.constants;

  // -------------------------------- createSuttaLink
  function createSuttaLink() {
    if (
      //test for the chapter flag
      chapterFlag === true
    ) {
      if (bookObject.links.chapter_links && firstNumber <= Object.keys(structure[book].chapters).length) {
        url = bookObject.links.chapter_links[firstNumber];
      }
    } else {
      if (bookObject) {
        if (bookObject.links.main_page && firstNumber === 0) {
          url = bookObject.links.main_page;
        }
        if (firstNumber > 0) {
          const available = bookObject.available;
          if (bookObject.complete) {
            // complete book
            if (bookObject.conversion_offset) {
              let newFirstNumber;
              let newSecondNumber;
              Object.keys(structure[book].chapters).some(chapter => {
                const numberOfSuttasInChapter = structure[book].chapters[chapter];
                if (firstNumber - structure[book].conversion_offset[chapter] <= numberOfSuttasInChapter) {
                  newSecondNumber = firstNumber - structure[book].conversion_offset[chapter];
                  newFirstNumber = parseInt(chapter, 10);
                  return true;
                }
                return false; // this keeps .some loop going
              }); // end of the .some loop
              url = rootUrl + bookObject.links.all + newFirstNumber + chapterConnector + newSecondNumber + suffixUrl;
            } else if (bookObject.range_suttas) {
              // there is the possibility that url is a range
              makeUrlWhenRangeIsPossibleForSutta(book, firstNumber);
            } else {
              url = rootUrl + bookObject.links.all + firstNumber + suffixUrl;
            }
          } else if (available.length > 0) {
            // not complete book
            for (let i = 0; i < available.length; i++) {
              if (firstNumber === available[i]) {
                if (bookObject.range_suttas) {
                  // there is the possibility that url is a range
                  makeUrlWhenRangeIsPossibleForSutta(book, firstNumber);
                } else {
                  url = rootUrl + bookObject.links.all + firstNumber + suffixUrl;
                }
              }
            }
          }
        } //
      }
    }
  }

  // NOTE: in SUTTA books, range_suttas is an Array of range arrays
  // NOTE: this function should only be given a citation that exists in the website i.e. if the sutta can't be found on the given website, then this function should never be used.
  function makeUrlWhenRangeIsPossibleForSutta(book, firstNumber) {
    const rangeArray = bookObject.range_suttas;
    for (let i = 0; i < rangeArray.length; i++) {
      const [lower, upper] = rangeArray[i];
      if ((firstNumber >= lower) & (firstNumber <= upper)) {
        // we can make the url, but we don't know if the url should take the form of a range, or of a chapter.
        if (bookObject.urlIsInFormOfChapterNumber) {
          // NOTE: The following code ASSUMES we are dealing with a complete book where the array of ranges is perfectly matched to the chapter numbers. I.e that position 0 will be chapter 1 etc.
          for (let i = 0; i < rangeArray.length; i++) {
            const [lower, upper] = rangeArray[i];
            if ((firstNumber >= lower) & (firstNumber <= upper)) {
              const chapterForUrl = i + 1;
              // TODO: the way of determining the use of leading zeros is fragile. should be moved to a variable in the website object
              let leadingZero = "";
              if (bookObject.leadingZero && chapterForUrl < 10) {
                leadingZero = "0";
              }
              url = rootUrl + bookObject.links.all + leadingZero + chapterForUrl + suffixUrl;
            }
          }
        } else if (rangeConnector) {
          //some urls are made with connectors and some with only first number
          url = rootUrl + bookObject.links.all + lower + rangeConnector + upper + suffixUrl;
          break;
        } else {
          url = rootUrl + bookObject.links.all + lower + suffixUrl;
          break;
        }
      }
    }
    if (url === "") {
      //no matching range was found. Build regular url
      url = rootUrl + bookObject.links.all + firstNumber + suffixUrl;
    }
  }

  // ++++++++++++++++++++++++++++ CREATE CHAPTER:SUTTA LINK
  function createChapterLink() {
    const available = bookObject.available;
    if (chapterFlag === true) {
      if (
        //test for the chapter flag and chapter links
        chapterFlag === true &&
        bookObject.links.chapter_links &&
        firstNumber <= Object.keys(structure[book].chapters).length
      ) {
        url = bookObject.links.chapter_links[firstNumber];
      }
    }
    // no chapter flag
    else if (bookObject.links.main_page && firstNumber === 0) {
      // no chapter number given and there is a main page for this book on this website, i.e. direct link to book
      url = bookObject.links.main_page;
    } else if (bookObject.available && site === "DT" && (book === "thag") | (book === "thig") && secondNumber === 0 && bookObject.available[firstNumber]?.[0] === 0) {
      // this deals with the specific situation where DT has no sutta numbers for Thag/thig suttas with only one sutta in the chapter
      url = rootUrl + bookObject.links.all + firstNumber + suffixUrl;
    } else if (secondNumber === 0) {
      // only first number given and chapter links exist
      if (bookObject.links.chapter_links) {
        url = bookObject.links.chapter_links[firstNumber];
      }
    } else if (secondNumber > 0) {
      //commenting out this
      // will make the thag18 work, but breaks ud (also comment out the closing)
      if (bookObject.complete) {
        // ------- complete book
        if (bookObject.range_suttas && bookObject.range_suttas[firstNumber]) {
          makeUrlWhenRangeIsPossibleForChapter(book, firstNumber, secondNumber);
        } else {
          url = rootUrl + bookObject.links.all + firstNumber + chapterConnector + secondNumber + suffixUrl;
        }
      } else if (available && Object.keys(available).length > 0) {
        // ------- not complete book but some are available
        Object.keys(available).forEach(chapterKey => {
          // cycle through the chapter keys in AVAILABLE
          if (parseInt(chapterKey, 10) === firstNumber) {
            // there is a chapter key in AVAILABLE that matches the given chapter
            if (structure[book].chapters[chapterKey].length === 1) {
              //there is only one sutta in the chapter
            } else {
              available[chapterKey].forEach(sutta => {
                // looping through each chapter that exists in Available
                if (secondNumber === sutta) {
                  // There is a match for available
                  if (bookObject.range_suttas && bookObject.range_suttas[firstNumber]) {
                    // this book has ranges and the current chapter has an array of ranges
                    makeUrlWhenRangeIsPossibleForChapter(book, firstNumber, secondNumber);
                  } else {
                    // this book doesn't have ranges so we need just a regular link
                    url = rootUrl + bookObject.links.all + firstNumber + chapterConnector + secondNumber + suffixUrl;
                  }
                  // }
                }
              });
            } // end of forEach
          } // end of if
        }); // end of forEach
        if (url === "") {
          if (bookObject.range_suttas) {
            // there are ranges of suttas in this book
            Object.keys(bookObject.range_suttas).forEach(chapterKey => {
              // cycle through the chapter keys in RANGE to see if sutta is in range
              if (parseInt(chapterKey, 10) === firstNumber) {
                // there is a chapter key in RANGE that matches the given chapter
                const chapterWithRangeArray = bookObject.range_suttas[firstNumber];
                for (let i = 0; i < chapterWithRangeArray.length; i++) {
                  // cycle through the ranges in the chapter that matches
                  const [lower, upper] = chapterWithRangeArray[i];
                  if ((secondNumber >= lower) & (secondNumber <= upper)) {
                    makeUrlWhenRangeIsPossibleForChapter(book, firstNumber, secondNumber);
                  }
                }
              }
            }); // end of forEach looking through Range
          } // end of if there are ranges
        } //end of not a complete book but some are available
      }
    }
  }

  // NOTE: in Chapter books, range_suttas is an Object with chapter numbers as keys
  // NOTE: this function should only be given a citation that exists in the website i.e. if the sutta can't be found on the given website, then this function should never be used.
  function makeUrlWhenRangeIsPossibleForChapter(book, firstNumber, secondNumber) {
    const chapterWithRangeArray = bookObject.range_suttas[firstNumber];

    chapterWithRangeArray.forEach(range => {
      if (secondNumber >= range[0] && secondNumber <= range[1]) {
        if (rangeConnector) {
          url = rootUrl + bookObject.links.all + firstNumber + chapterConnector + range[0] + rangeConnector + range[1] + suffixUrl;
        } else {
          url = rootUrl + bookObject.links.all + firstNumber + chapterConnector + range[0] + suffixUrl;
        }
      }
    });
    if (url === "") {
      // no matching range was found. Build regular url
      url = rootUrl + bookObject.links.all + firstNumber + chapterConnector + secondNumber + suffixUrl;
    }
  }

  // -------------------- the actual function ---------------------------------
  // books.forEach(bookKey => {
  const format = structure[book].format[0];
  // if (book === bookKey) {
  if (format === "sutta") {
    createSuttaLink();
    //below adds verse number to url if appropriate
    if (bookObject.links.idPrefix && firstNumber > 0 && chapterFlag !== true) {
      let suffix = bookObject.links.idSuffix ? bookObject.links.idSuffix : "";
      let idForVerse = firstNumber;
      if (bookObject.links.idLeadingZero === true) {
        idForVerse = ("00" + idForVerse).slice(-3);
      }
      url = url + bookObject.links.idPrefix + idForVerse + suffix;
    }
  } else if (format === "chapter") {
    createChapterLink();
  }

  if (vinayaBooks.includes(book)) {
    url = url.replace("/en/sujato", "/en/brahmali");
  }

  return url;
}
