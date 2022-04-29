console.log("options.js");

function initGui() {
  chrome.storage.local.get({ searchCount: 0 }, function (storedItem) {
    document.getElementById("count").innerText = storedItem.searchCount;
  });

  document
    .getElementById("resetButton")
    .addEventListener("click", resetCounter);
}

function resetCounter() {
  let resetCount = { searchCount: 0 };
  chrome.storage.local.set(resetCount, function () {
    console.log("Value is reset to ", resetCount);
    document.getElementById("count").innerText = resetCount.searchCount;
  });
}

document.addEventListener("DOMContentLoaded", initGui);
