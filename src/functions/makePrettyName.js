export default function makePrettyName(id) {
  let prettySiteUrl = "";
  switch (id) {
    case "SC":
      prettySiteUrl = "SuttaCentral.net";
      break;
    case "SF":
      prettySiteUrl = "SuttaFriends.org";
      break;
    case "DT":
      prettySiteUrl = "DhammaTalks.org";
      break;
    case "ABT":
      prettySiteUrl = "Ancient-Buddhist-Texts.net";
      break;
    case "ATI":
      prettySiteUrl = "AccessToInsight.org";
      break;
    case "PA":
      prettySiteUrl = "PaliAudio.com";
      break;
    case "SCV":
      prettySiteUrl = "Voice.SuttaCentral.net";
      break;
    case "DPR":
      prettySiteUrl = "DigitalPaliReader.online";
      break;
    case "BMC":
      prettySiteUrl = "DhammaTalks.org";
      break;
    default:
      prettySiteUrl = "";
  }
  return prettySiteUrl;
}
