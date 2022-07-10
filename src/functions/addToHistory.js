export default function addToHistory() {
  const currentUrl = new URL(window.location);
  window.history.pushState({ page: "1" }, "", currentUrl);
}
