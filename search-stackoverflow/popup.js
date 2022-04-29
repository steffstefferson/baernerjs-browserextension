console.log("popup.js");
chrome.storage.local.get({ searchCount: 0 }, function (storedItem) {
  document.getElementById("count").innerText = storedItem.searchCount;
});
