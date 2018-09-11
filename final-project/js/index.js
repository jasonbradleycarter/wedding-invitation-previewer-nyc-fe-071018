// js

/* javascript
//html
header
tabs/preset background
  - <nav>, <h3>, <p>, <radio>
form
  - <form>, <input type="text">, <label>
display
  - <img in background>, <h1></h1>, <p>, <h3>, <div>


//CSS
display: flex/grid
if grid, grid-template-columns: 1fr 1fr
if flex in one container (width:50%)
if each side has its own flex, wrap it
if float, float: left
input selection changes text box to blue


//JS event
event listener - keydown on ever keystroke
transition btwn backgrounds
    -transition when clicking
    -actually change the background
First initials in the display - slice() maybe?
something like this: display.style.color = 'red'
onClick new image loads for background
fonts change when background changes

*/

const twoInitials = document.getElementById('twoInitials');
function getInitials() {
  const first = document.getElementById('first');
  const second = document.getElementById('second');
  let firstText;
  let secondText;
  if (first.innerHTML.length === 0) {
    firstText = "";
  }
  else {
    firstText = first.innerHTML[0].toUpperCase();
  }
  
  if (second.innerHTML.length === 0) {
    secondText = "";
  }
  else {
    secondText = second.innerHTML[0].toUpperCase();
  }
  
  initialsText = firstText + " & " + secondText;
  
  const initials = document.getElementById('initials');
  initials.innerHTML = initialsText;
}

const firstName = document.getElementById('firstName');
const first = document.getElementById('first');
firstName.addEventListener('keyup', event => {
  first.innerHTML = firstName.value;
  getInitials();
});

const secondName = document.getElementById('secondName');
const second = document.getElementById('second');
secondName.addEventListener('keyup', event => {
  second.innerHTML = secondName.value;
  getInitials();
});

const lastName = document.getElementById('lastName');
const last = document.getElementById('last');
lastName.addEventListener('keyup', event => {
  last.innerHTML = lastName.value;
});

const weddingDate = document.getElementById('date');
const date = document.getElementById('weddingdate');
weddingDate.addEventListener('keyup', event => {
  date.innerHTML = weddingDate.value;
});

const weddingLocation = document.getElementById('location');
const site = document.getElementById('weddinglocation');
weddingLocation.addEventListener('keyup', event => {
  site.innerHTML = weddingLocation.value;
});


function sandClick(event) {
  document.querySelector(".sandContent");
  const sandClick = document.getElementsByClassName('sandContent');
  let sandContent;
  document.addEventListener('click', event => {
    var element = document.getElementById("sand");
    element.classList.toggle("sand");
    console.log('ok');
  });
}

function trainClick(event) {
  document.querySelector(".trainContent");
  const trainClick = document.getElementsByClassName('trainContent');
  let trainContent;
  document.addEventListener('click', event => {
    var element = document.getElementById("train");
    element.classList.toggle("train");
    console.log('ok');
  });
}

function gattoClick(event) {
  document.querySelector(".gattoContent");
  const gattoClick = document.getElementsByClassName('gattoContent');
  let gattoContent;
  document.addEventListener('click', event => {
    var element = document.getElementById("gatto");
    element.classList.toggle("gatto");
    console.log('ok');
  });
}

