'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor);

function changeColor() {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  console.log('Button clicked!'); // feel free to change/delete this line
}
