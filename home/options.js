// test center search functionality
const toggleOff=false;
document.querySelector('On').addEventListener('click', function() {
  if (document.querySelector('date')&&document.querySelector('distance')&&document.querySelector('zip')) {
    targetOn=true;
    const answerContainer = [document.querySelector('date'),document.querySelector('distance'),document.querySelector('zip')];
    //code to call contentscript
    chrome.scripting.RegisteredContentScript(
      js: "contentscript.js",
      runAt: "document_idle"
    );
    //code to give answerContainer to it
    chrome.storage.local.set({ answerContainer : answerContainer });
  }
});

document.querySelector('Off').addEventListener('click', function() {
  toggleOn=false;
});