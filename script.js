let appsButton = document.getElementById("google-apps-button");
let appsPanel = document.getElementById("google-apps-panel");
let searchEngine = document.getElementById("search-engine-text");

appsButton.addEventListener('click', function () {
  appsPanel.classList.toggle('hidden');
});

document.body.addEventListener('click', function (event) {
  // Check if the clicked element is not a child of the panel
  if (!appsPanel.contains(event.target) && event.target !== appsButton) {
    appsPanel.classList.add('hidden');
  }
});

searchEngine.addEventListener('focus', function () {
  if (searchEngine.textContent === "Search Google or type a URL") {
    searchEngine.innerText = "";
  }
})