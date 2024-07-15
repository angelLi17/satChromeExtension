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

for() {
  chrome.notifications.create(opt);
}