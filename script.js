import bot from './public/bot.svg';
import user from './public/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

//the loader for waiting on the AI to return answers
function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(( => {
    // Update the text content of the loading indicator
    element.textContent +='.';

    if (element.textContent === '....'){
      element.textContent = '';
    }
  }, 500))
}

function typeText(element, text) {
  let index = 0

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index)
      index++;
      } else{
        clearInterval(interval);
      }
  },20)
}
