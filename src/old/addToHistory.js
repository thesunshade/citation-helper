export default function addToHistory() {
  const currentUrl = new URL(window.location);
  console.log(currentUrl.search);
  window.history.pushState({ page: currentUrl.search }, "", currentUrl);
}
