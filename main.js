const timeDisplay = document.getElementById('time-announcement');
const textDisplay = document.getElementById('task-announcement');
const sunAndmoon = document.getElementById('sun-moon-lever');
const sunMoon = document.getElementById('sun-moon');
const hourlyButtonOpen = document.querySelector('#button-hourly-table-open');
const hourlyButtonClose = document.querySelector('#button-hourly-table-close');
const hourlyTable = document.querySelector('#hourly-table');
const tableFormSection = document.querySelector('#hourly-table-form-section');
const body = document.querySelector('body');
const clockBG = document.querySelector('#clock-display');
const mntRange = document.querySelector('#mnt-range');
const mntRangeW = document.querySelector('#mnt-range-w');
const mnt1 = document.querySelector('#mnt-1');
const mnt2 = document.querySelector('#mnt-2');
const mnt3 = document.querySelector('#mnt-3');
const mntw1 = document.querySelector('#mnt-w-1');
const mntw2 = document.querySelector('#mnt-w-2');
const mntw3 = document.querySelector('#mnt-w-3');
const stargazer = document.querySelector('#stargazer');
const sunflower = document.querySelector('#sunflower');
const clover = document.querySelector('#clover');
const beach = document.querySelector('#beach');
const lf1 = document.querySelector('#leaf-1');
const lf2 = document.querySelector('#leaf-2');
const lf3 = document.querySelector('#leaf-3');
const lf4 = document.querySelector('#leaf-4');
const lf5 = document.querySelector('#leaf-5');
const sf1 = document.querySelector('#snowflake-1');
const sf2 = document.querySelector('#snowflake-2');
const sb1 = document.querySelector('#snowball-1');
const sb2 = document.querySelector('#snowball-2');
const sb3 = document.querySelector('#snowball-3');
const sb4 = document.querySelector('#snowball-4');
const sb5 = document.querySelector('#snowball-5');

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
  changeSeason(now,h);
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

const winter = [11,0,1];
const spring = [2,3,4];
const summer = [5,6,7];
const fall = [8,9,10];

function changeSeason(now,h) {
  let season = 'what season is this';
  let month = now.getMonth();
  if (spring.includes(month) && h > 17) {
    season = 'spring-night';
  }
  else if (spring.includes(month) && h > 5) {
    season = 'spring-day';
  }
  else if (summer.includes(month) && h > 17) {
    season = 'summer-night';
  }
  else if (summer.includes(month) && h > 5) {
    season = 'summer-day';
  }
  else if (fall.includes(month) && h > 17) {
    season = 'fall-night';
  }
  else if (fall.includes(month) && h > 5) {
    season = 'fall-day';
  }
  else if (winter.includes(month) && h > 17) {
    season = 'winter-night';
  }
  else {
    season = 'winter-day';
  }
  console.log(month);
  styleSeason(season);
}

function styleSeason(season) {
  console.log(season);
  if (season == 'spring-day') {
    body.style.backgroundColor = "var(--spring-day)";
    clockBG.style.backgroundColor = "var(--spring-day)";
    hourlyTable.style.backgroundColor = "var(--spring-day)";
    mntRange.style.opacity = "1";
    mnt1.style.fill = "var(--mnt-1-spring)";
    mnt2.style.fill = "var(--mnt-2-spring)";
    mnt3.style.fill = "var(--mnt-3-spring)";
    stargazer.style.opacity = "1";
    sunflower.style.opacity = "1";
    clover.style.opacity = "1";
  }
  else if (season == 'spring-night') {
    body.style.backgroundColor = "var(--spring-night)";
    clockBG.style.backgroundColor = "var(--spring-night)";
    hourlyTable.style.backgroundColor = "var(--spring-night)";
    mntRange.style.opacity = "1";
    mnt1.style.fill = "var(--mnt-1-spring)";
    mnt2.style.fill = "var(--mnt-2-spring)";
    mnt3.style.fill = "var(--mnt-3-spring)";
    stargazer.style.opacity = "1";
    sunflower.style.opacity = "1";
    clover.style.opacity = "1";
  }
  else if (season == 'summer-day') {
    body.style.backgroundColor = "var(--summer-day)";
    clockBG.style.backgroundColor = "var(--summer-day)";
    hourlyTable.style.backgroundColor = "var(--summer-day)";
    beach.style.opacity = "1";
  }
  else if (season == 'summer-night') {
    body.style.backgroundColor = "var(--summer-night)";
    clockBG.style.backgroundColor = "var(--summer-night)";
    hourlyTable.style.backgroundColor = "var(--summer-night)";
    beach.style.opacity = "1";
  }
  else if (season == 'fall-day') {
    body.style.backgroundColor = "var(--fall-day)";
    clockBG.style.backgroundColor = "var(--fall-day)";
    hourlyTable.style.backgroundColor = "var(--fall-day)";
    mntRange.style.opacity = "1";
    mnt1.style.fill = "var(--mnt-1-fall)";
    mnt2.style.fill = "var(--mnt-2-fall)";
    mnt3.style.fill = "var(--mnt-3-fall)";
    lf1.style.opacity = "1";
    lf2.style.opacity = "1";
    lf3.style.opacity = "1";
    lf4.style.opacity = "1";
    lf5.style.opacity = "1";
  }
  else if (season == 'fall-night') {
    body.style.backgroundColor = "var(--fall-night)";
    clockBG.style.backgroundColor = "var(--fall-night)";
    hourlyTable.style.backgroundColor = "var(--fall-night)";
    mntRange.style.opacity = "1";
    mnt1.style.fill = "var(--mnt-1-fall)";
    mnt2.style.fill = "var(--mnt-2-fall)";
    mnt3.style.fill = "var(--mnt-3-fall)";
    lf1.style.opacity = "1";
    lf2.style.opacity = "1";
    lf3.style.opacity = "1";
    lf4.style.opacity = "1";
    lf5.style.opacity = "1";
  }
  else if (season == 'winter-day') {
    body.style.backgroundColor = "var(--winter-day)";
    clockBG.style.backgroundColor = "var(--winter-day)";
    hourlyTable.style.backgroundColor = "var(--winter-day)";
    mntRangeW.style.opacity = "1";
    sf1.style.opacity = "1";
    sf2.style.opacity = "1";
    sb1.style.opacity = "1";
    sb2.style.opacity = "1";
    sb3.style.opacity = "1";
    sb4.style.opacity = "1";
    sb5.style.opacity = "1";
  }
  else {
    body.style.backgroundColor = "var(--winter-night)";
    clockBG.style.backgroundColor = "var(--winter-night)";
    hourlyTable.style.backgroundColor = "var(--winter-night)";
    mntRangeW.style.opacity = "1";
    sf1.style.opacity = "1";
    sf2.style.opacity = "1";
    sb1.style.opacity = "1";
    sb2.style.opacity = "1";
    sb3.style.opacity = "1";
    sb4.style.opacity = "1";
    sb5.style.opacity = "1";
  }
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

// function saveLocStoArray () {
//   let jsonHourlyItems = JSON.stringify(hourlyItems);
//   localStorage.setItem('array',jsonHourlyItems);
// }

// function retrieveLocStoArray () {
//   let retrievedString = localStorage.getItem('array');
//   let retrievedArray = JSON.parse(retrievedString);
//   hourlyItems = retrievedArray;
//   repopulateInputs(retrievedArray);
// }

// function repopulateInputs(retrievedArray) {
//   for (let i = 0; i < 24; i++) {
//     let repopulateElement = document.querySelector(`#dt${i}`);
//     repopulateElement.value = retrievedArray[i];
//   }
// }

// retrieveLocStoArray();
