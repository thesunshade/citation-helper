import parseBookName from "./parseBookName";
import parseNumbers from "./parseNumbers";
import createWebsiteLink from "../webSites/createWebsiteLink";
import validateCitation from "./validateCitation";

// TODO this needs to be untangled.
// add translator and layout to SuttaCentral url
export default function addParamsToSuttaCentralUrl(userInput, translator, layout) {
  let parseNumbersResult = parseNumbers(userInput);
  let url = createWebsiteLink({
    site: "SC",
    ...validateCitation(parseBookName(userInput), parseNumbersResult),
  });

  if (parseNumbersResult.chapterFlag === true) {
    return url;
  } else if (/#.*$/.test(url)) {
    let verseId = url.match(/#.*$/);
    let firstPartOfUrl = url.slice(0, url.match(/#.*$/).index);
    if (translator === "/en/sujato") {
      return firstPartOfUrl + translator + verseId;
    } else {
      return firstPartOfUrl + translator + layout;
    }
  } else if (/pitaka/.test(url)) {
    return url;
  } else if (translator === "/en/sujato") {
    return url + translator + layout;
  } else {
    return url + translator;
  }
}
