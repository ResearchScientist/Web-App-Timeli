const timeDisplay = document.getElementById('time-announcement');
const textDisplay = document.getElementById('task-announcement');
const sunAndmoon = document.getElementById('sun-moon-lever');
const sunMoon = document.getElementById('sun-moon');
const hourlyButtonOpen = document.querySelector('#button-hourly-table-open');
const hourlyButtonClose = document.querySelector('#button-hourly-table-close');
const hourlyTable = document.querySelector('#hourly-table');
const tableFormSection = document.querySelector('#hourly-table-form-section');

// * CLOCK * //

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
  changeSeason(now)
}

function clockDisplay() {
  // timeDisplay.textContent = `${hh}:${mm}`; // to dsiplay 24 hours
  timeDisplay.textContent = new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}); // to display 12 hours
}

function rotateSunMoon(rotationRate) {
  sunAndmoon.style.setProperty('--rotation',rotationRate);
}

function switchSunMoon(hh) {  
  if ( hh > 17 ) {
    sunMoon.style.setProperty('background-color','white');
  }
  else {
    if (hh > 5) {
      sunMoon.style.setProperty('background-color','yellow');
    }
  }
}

setInterval(clock,1000);

// * SEASONS * //

const winter = [0,1,2];
const spring = [3,4,5];
const summer = [6,7,8];
const fall = [9,10,11];

function changeSeason(now) {
  let season = 'what season is this';
  let month = now.getMonth();
  // let month = 10;
  // console.log(month)
  if (winter.includes(month)) {
    season = 'winter';
  }
  else if (spring.includes(month)) {
    season = 'spring';
  }
  else if (summer.includes(month)) {
    season = 'summer';
  }
  else {
    season = 'fall';
  }
  console.log(season)
}

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

let hourlyItems = ["","","","","","","","","","","","","","","","","","","","","","","",""];

function updateItems(inputHour,inputValue) {
  // console.log(`hour = ${inputHour} value = ${inputValue}`);
  hourlyItems[inputHour] = inputValue;
  saveLocStoArray();
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

function saveLocStoArray () {
  let jsonHourlyItems = JSON.stringify(hourlyItems);
  localStorage.setItem('array',jsonHourlyItems);
}

function retrieveLocStoArray () {
  let retrievedString = localStorage.getItem('array');
  let retrievedArray = JSON.parse(retrievedString);
  hourlyItems = retrievedArray;
  repopulateInputs(retrievedArray);
}

function repopulateInputs(retrievedArray) {
  for (let i = 0; i < 24; i++) {
    let repopulateElement = document.querySelector(`#dt${i}`);
    repopulateElement.value = retrievedArray[i];
  }
}

retrieveLocStoArray();
