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

const twoInitials = document.getElementById('twoInitials')
function getInitials() {
  const first = document.getElementById('first')
  const second = document.getElementById('second')
  let firstText
  let secondText
  if (first.innerHTML.length === 0) {
    firstText = ""
  }
  else {
    firstText = first.innerHTML[0].toUpperCase()
  }
  
  if (second.innerHTML.length === 0) {
    secondText = ""
  }
  else {
    secondText = second.innerHTML[0].toUpperCase()
  }
  
  initialsText = firstText + " & " + secondText
  
  const initials = document.getElementById('initials')
  initials.innerHTML = initialsText
  
  console.log("works")
  
  // const initials = document.getElementById('firstName')
  // initials.addEventListener('keyup', event => {
  // first.value = initials.value
// })
}

const firstName = document.getElementById('firstName')
const first = document.getElementById('first')
firstName.addEventListener('keyup', event => {
  first.innerHTML = firstName.value
  getInitials()
})

const secondName = document.getElementById('secondName')
const second = document.getElementById('second')
secondName.addEventListener('keyup', event => {
  second.innerHTML = secondName.value
  getInitials()
})

const lastName = document.getElementById('lastName')
const last = document.getElementById('last')
lastName.addEventListener('keyup', event => {
  last.innerHTML = lastName.value
})

const weddingDate = document.getElementById('date')
const date = document.getElementById('weddingdate')
weddingDate.addEventListener('keyup', event => {
  date.innerHTML = weddingDate.value
})

const weddingLocation = document.getElementById('location')
const site = document.getElementById('weddinglocation')
weddingLocation.addEventListener('keyup', event => {
  site.innerHTML = weddingLocation.value
})





// (function() {
//     var calendar = [
//         ["January", 31],
//         ["February", 28],
//         ["March", 31],
//         ["April", 30],
//         ["May", 31],
//         ["June", 30],
//         ["July", 31],
//         ["August", 31],
//         ["September", 30],
//         ["October", 31],
//         ["November", 30],
//         ["December", 31]
//         ],
//         cont = document.getElementById('calendar-container');

//     var sel_year = document.createElement('select'),
//         sel_month = document.createElement('select'),
//         sel_day = document.createElement('select');

//     function createOption(txt, val) {
//         var option = document.createElement('option');
//         option.value = val;
//         option.appendChild(document.createTextNode(txt));
//         return option;
//     }

//     function clearChildren(ele) {
//         while (ele.hasChildNodes()) {
//             ele.removeChild(ele.lastChild);
//         }
//     }

//     function recalculateDays() {
//         var month_index = sel_month.value,
//             df = document.createDocumentFragment();
//         for (var i = 0, l = calendar[month_index][1]; i < l; i++) {
//             df.appendChild(createOption(i + 1, i));
//         }
//         clearChildren(sel_day);
//         sel_day.appendChild(df);
//     }

//     function generateMonths() {
//         var df = document.createDocumentFragment();
//         calendar.forEach(function(info, i) {
//             df.appendChild(createOption(info[0], i));
//         });
//         clearChildren(sel_month);
//         sel_month.appendChild(df);
//     }

//     sel_month.onchange = recalculateDays;

//     generateMonths();
//     recalculateDays();

//     cont.appendChild(sel_year);
//     cont.appendChild(sel_month);
//     cont.appendChild(sel_day);
// }());