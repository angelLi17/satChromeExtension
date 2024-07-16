//source code

// Event listener for extension installation
browser.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    // Open options/index.html file in a new tab
    browser.tabs.create({ url: "home/index.html?justInstalled=true" });
  }
});

// Event listener for extension icon click
browser.action.onClicked.addListener(function () {
  // Open options/index.html file in a new tab
  browser.tabs.create({ url: "home/index.html" });
});

//source code end