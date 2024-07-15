import { toggleOn } from 'popup.js';
import { answerContainer } from 'popup.js';

var opt = {
  type: "list",
  title: "Test Centers Available!!",
  message: "Register ASAP before seats fill up.",
  //iconUrl: "url_to_small_icon",
  items: [{ title: "Item1", message: "This is item 1."},
          { title: "Item2", message: "This is item 2."},
          { title: "Item3", message: "This is item 3."}]
}

const US = true;
const type = "SAT";
const date = answerContainer.querySelector('date');
const zip = answerContainer.querySelector('zip'); //not sure if answercontainer contains strings or what
const range = answerContainer.querySelector('distance');

for() {
  document.querySelector("test-center-location-option-US").click;
  if (date.value==)
  chrome.notifications.create(opt);
}