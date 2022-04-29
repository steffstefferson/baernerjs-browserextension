console.log("register context menu");

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "searchStackOverflow",
    title: "Search on StackOverflow",
    type: "normal",
    contexts: ["selection"],
  });
  chrome.contextMenus.onClicked.addListener(onClickHandler);
});

function onClickHandler(info, tab) {
  console.log("onClickHandler");
  if (info.menuItemId !== "searchStackOverflow") {
    return;
  }
  var urlWithSearchParam =
    "https://stackoverflow.com/search?q=" +
    encodeURIComponent(info.selectionText);
  chrome.tabs.create({
    url: urlWithSearchParam,
  });
  incrementSearchCount();
}

function incrementSearchCount() {
  chrome.storage.local.get({ searchCount: 0 }, function (storedItem) {
    storedItem.searchCount++;
    chrome.storage.local.set(storedItem, function () {
      console.log("Value is set to ", storedItem);
    });
  });
}
