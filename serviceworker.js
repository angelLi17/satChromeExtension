// const welcomePage = 'sidepanels/welcome-sp.html';
// const mainPage = 'sidepanels/main-sp.html';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.sidePanel.setOptions({ path: welcomePage });
//   chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
// });

// chrome.tabs.onActivated.addListener(async ({ tabId }) => {
//   const { path } = await chrome.sidePanel.getOptions({ tabId });
//   if (path === welcomePage) {
//     chrome.sidePanel.setOptions({ path: mainPage });
//   }
// });

chrome.notifications.create({
  type: 'basic',
  iconUrl: 'stay_hydrated.png',
  title: 'Time to Hydrate',
  message: "Everyday I'm Guzzlin'!",
  buttons: [{ title: 'Keep it Flowing.' }],
  priority: 0
});