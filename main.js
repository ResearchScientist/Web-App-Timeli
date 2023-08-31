const timeDisplay = document.getElementById('time-announcement');
const textDisplay = document.getElementById('task-announcement');
const sunAndmoon = document.getElementById('sun-moon-lever');
const sunMoon = document.getElementById('sun-moon');
const hourlyButtonOpen = document.querySelector('#button-hourly-table-open');
const hourlyButtonClose = document.querySelector('#button-hourly-table-close');
const hourlyTable = document.querySelector('#hourly-table');
const tableFormSection = document.querySelector('#hourly-table-form-section');

function clock() {
  let now = new Date();
  let s = now.getSeconds();
  let m = now.getMinutes();
  let h = now.getHours();
  let mm = m < 10 ? "0" + m : m;
  let hh = h < 10 ? "0" + h : h;
  let sratio = s / 60;
  let mratio = (sratio + m) / 60;
  let hratio = (mratio + h) / 24;
  let rotationRate = (hratio * 360) - 90;
  clockDisplay();
  rotateSunMoon(rotationRate);
  switchSunMoon(h,m);
  displayActions(h);
}

function clockDisplay() {
  // timeDisplay.textContent = `${hh}:${mm}`; // to dsiplay 24 hours
  timeDisplay.textContent = new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}); // to display 12 hours
}

function rotateSunMoon(rotationRate) {
  sunAndmoon.style.setProperty('--rotation',rotationRate);
}

function switchSunMoon(h,m) {
  if ( (h > 17) && (m > 30) ) {
    sunMoon.style.setProperty('background-color','white');
  }
}

setInterval(clock,1000);

// * TOGGLE HOURLY TABLE * //

hourlyButtonOpen.addEventListener('click', (e) => {
  hourlyTable.style.transform = "translateY(0)";
});

hourlyButtonClose.addEventListener('click', (e) => {
  hourlyTable.style.transform = "translateY(-100vh)";
});

// * DATABASE LOGIC * //

tableFormSection.addEventListener('submit', (e) => {
  e.preventDefault();
  let formID = e.target.id;
  let inputID = formID.replace('df','dt');
  let inputHour = formID.replace('df','');
  let inputElement = document.querySelector(`#${inputID}`);
  let inputValue = inputElement.value;
  updateItems(inputHour,inputValue);
})

let hourlyItems = ["nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do","nothing to do"];
console.log(hourlyItems);

function updateItems(inputHour,inputValue) {
  // console.log(`hour = ${inputHour} value = ${inputValue}`);
  hourlyItems[inputHour] = inputValue;
  // saveLocStoArray();
  console.log(hourlyItems);
}

function displayActions(h) {
  
  if (hourlyItems[h].length === 0 || hourlyItems[h].trim().length === 0) {
    textDisplay.textContent = 'nothing to do';
  }
  else {
    textDisplay.textContent = hourlyItems[h];
  }
}

// PERSIST DATA 

// function saveLocStoArray () {
//   let jsonHourlyItems = JSON.stringify(hourlyItems);
//   localStorage.setItem('array',jsonHourlyItems);
// }

// function retrieveLocStoArray () {
//   let retrievedString = localStorage.getItem('array');
//   let retrievedArray = JSON.parse(retrievedString);
//   hourlyItems = retrievedArray;
//   repopulateInputs();
// }

// retrieveLocStoArray();

// function repopulateInputs() {
//   console.log('now repopulate');
// }