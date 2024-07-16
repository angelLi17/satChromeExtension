const answerContainer = await chrome.storage.local.get("answerContainer");

const US = true;
const type = "SAT";
const date = answerContainer[0];
const distance = answerContainer[1];
const zip = answerContainer[2];

if (date && zip && distance) {
  document.querySelector("test-center-location-option-US").click;

  if (date.value=='Option 1') {
    document.querySelector('body [id^="qc-id-selectdatecenter-testdate-button-AUG"]').click;
  } else if (date.value=='Option 2') {
    document.querySelector('body [id^="qc-id-selectdatecenter-testdate-button-OCT"]').click;
  } else if (date.value=='Option 3') {
    document.querySelector('body [id^="qc-id-selectdatecenter-testdate-button-NOV"]').click;
  } else if (date.value=='Option 4') {
    document.querySelector('body [id^="qc-id-selectdatecenter-testdate-button-DEC"]').click;
  } else if (date.value=='Option 5') {
    document.querySelector('body [id^="qc-id-selectdatecenter-testdate-button-MAR"]').click;
  } else if (date.value=='Option 6') {
    document.querySelector('body [id^="qc-id-selectdatecenter-testdate-button-MAY"]').click;
  } else if (date.value=='Option 7') {
    document.querySelector('body [id^="qc-id-selectdatecenter-testdate-button-JUN"]').click;
  } 

  document.querySelector('qc-id-selectdatecenter-testcenter-label-searchtestcenter').click;

  document.querySelector('[value="zipSearch"]').value = zip.value; //does .value work

  document.querySelector('[aria-search="qc-id-selectdatecenter-testcenter-label-searchtestcenter"').click;

  if  distance.value=='Option 1') {
    document.querySelector('value="10"').click;
  } else if  distance.value=='Option 2') {
    document.querySelector('value="25"').click;
  } else if  distance.value=='Option 3') {
    document.querySelector('value="50"').click;
  } else if  distance.value=='Option 4') {
    document.querySelector('value="100"').click;
  }
  document.querySelector('qc-id-selectdatecenter-testcenter-toggle-showavailableonly').click;

  search();
} else {
  console.error('Element not found');
}

setInterval(search(), 300000);

function search() {
    document.querySelector('qc-id-selectdatecenter-testcenter-domestic-button-search').click;
    const first = document.querySelector('qc-id-test-center-name');
    if (first) {
      var opt = {
        type: "list",
        title: "Test Center(s) Available!!",
        message: "Register ASAP before seat(s) fill up.",
        //iconUrl: "url_to_small_icon",
        items: [{ title: document.querySelector('qc-id-test-center-name').value, message: document.querySelector('[class="distance"]'.value) }]
      }

      chrome.notifications.create(opt);
    }
  if (toggleOn==false) clearInterval();
}