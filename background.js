//source code

// Event listener for extension installation
chrome.runtime.onInstalled.addListener(function () {
  // Open options/index.html file in a new tab
  chrome.tabs.create({ url: "home/index.html?justInstalled=true" });
});

// Event listener for extension icon click
chrome.action.onClicked.addListener(function () {
  // Open options/index.html file in a new tab
  chrome.tabs.create({ url: "home/index.html" });
});

//source code end