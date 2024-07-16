document.querySelector('#On').addEventListener('click', function() {
  targetOn=true;
  const answerContainer = [document.querySelector('#date'),document.querySelector('#distance'),document.querySelector('#zip')];
  chrome.scripting.executeScript({
    target: { tabId: "content-script" },
    files: ["content-script.js"]
  });
});

export answerContainer; 
export toggleOn;

document.querySelector('#Off').addEventListener('click', function() {
  toggleOn=false;
});

//CLEAN UP LOGO-black outline make straight ends, and make white layer for asterisk