const dist = document.getElementById('range');
const zip = document.getElementById('zip');

document.getElementById('On').addEventListener('click', function() {
  const answers = {};
  for (const input of answerContainer.querySelectorAll('input')) {
    answers[input.id] = input.value;
  }

});

document.getElementById('Off').addEventListener('click', function() {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content-script.js"]
  });
});