import { toggleOn } from 'popup.js';
import { answerContainer } from 'popup.js';

const US = true;
const type = "SAT";
const date = answerContainer.querySelector('#date');
const zip = answerContainer.querySelector('#zip'); //not sure if answercontainer contains strings or what
const range = answerContainer.querySelector('#distance');

if (date && zip && range) {
  const value = element.value; 
} else {
  console.error('Element not found');
}

  document.querySelector("#test-center-location-option-US").click;
  
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

  document.querySelector('#qc-id-selectdatecenter-testcenter-label-searchtestcenter').click;
  
  document.querySelector('[value="zipSearch"]').value = zip.value; //does .value work
  
  document.querySelector('[aria-search="qc-id-selectdatecenter-testcenter-label-searchtestcenter"').click;
  
  if (range.value=='Option 1') {
    document.querySelector('value="10"').click;
  } else if (range.value=='Option 2') {
    document.querySelector('value="25"').click;
  } else if (range.value=='Option 3') {
    document.querySelector('value="50"').click;
  } else if (range.value=='Option 4') {
    document.querySelector('value="100"').click;
  }
  document.querySelector('#qc-id-selectdatecenter-testcenter-toggle-showavailableonly').click;

function draw() {
    document.querySelector('#qc-id-selectdatecenter-testcenter-domestic-button-search').click;

    //const myNodeList = document.querySelectorAll('[class="distance"]');
    var opt = {
      type: "list",
      title: "Test Center(s) Available!!",
      message: "Register ASAP before seats fill up.",
      //iconUrl: "url_to_small_icon",
      items: [{ title: document.querySelector('#qc-id-test-center-name'.value, message: document.querySelector('[class="distance"]'.value }]
    }

    chrome.notifications.create(opt);
  if (toggleOn==false) break;
}