import parseBookName from "./parseBookName";
import parseNumbers from "./parseNumbers";
import createWebsiteLink from "../webSites/createWebsiteLink";
import validateCitation from "./validateCitation";
import { vinayaBooks } from "./vinayBooks";

// TODO this needs to be untangled.
// add translator and layout to SuttaCentral url
export default function addParamsToSuttaCentralUrl(userInput, translator, layout) {
  let parseNumbersResult = parseNumbers(userInput);
  let parseBookResult = parseBookName(userInput);
  let url = createWebsiteLink({
    site: "SC",
    ...validateCitation(parseBookResult, parseNumbersResult),
  });

  if (vinayaBooks.includes(parseBookResult)) {
    translator = "/en/brahmali";
  }

  if (parseNumbersResult.chapterFlag === true) {
    //we never add the translator for chapters (also see below for chapters wihtout flag)
    return url;
  } else if (/#.*$/.test(url)) {
    // this contains a verse
    let verseId = url.match(/#.*$/);
    let firstPartOfUrl = url.slice(0, url.match(/#.*$/).index);
    if (translator === "/en/sujato") {
      return firstPartOfUrl + translator + verseId;
    } else {
      return firstPartOfUrl + translator + layout;
    }
  } else if (/pitaka/.test(url)) {
    // this is a whole book
    console.log("whole book");
    return url;
  } else if (["sn", "an"].includes(parseBookResult) && parseNumbersResult.secondNumber === 0) {
    // this is a chapter in SN or AN
    return url;
  } else if (translator === "/en/sujato") {
    console.log("translator is sujato");
    return url + translator + layout;
  } else {
    // we don't add `layout` here because for now sujato is the only one that has layout options
    return url + translator;
  }
}
