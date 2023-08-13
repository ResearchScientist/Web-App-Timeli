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
  updateActions(h);
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

let hourlyItems = [ , , , , , , , , , , , , , , , , , , , , , , , , ];

tableFormSection.addEventListener('submit', (e) => {
  e.preventDefault();
  let formID = e.target.id;
  let inputID = formID.replace('df','dt');
  let inputHour = formID.replace('df','');
  let inputElement = document.querySelector(`#${inputID}`);
  let inputValue = inputElement.value;
  updateItems(inputHour,inputValue);
})

function updateItems(inputHour,inputValue) {
  hourlyItems[inputHour] = inputValue;
  saveLocStoArray();
  console.log(hourlyItems);
}

// const actionsDB = {
//   '01':'sleep',
//   '02':'sleep',
//   '03':'sleep',
//   '04':'sleep',
//   '05':'sleep',
//   '06':'wake up',
//   '07':'breakfast',
//   '08':'read',
//   '09':'do tech work',
//   '10':'do research work',
//   '11':'do focus work',
//   '12':'eat lunch',
//   '13':'do creative work',
//   '14':'do tech work',
//   '15':'do research work',
//   '16':'do focus work',
//   '17':'gym',
//   '18':'shower',
//   '19':'dinner',
//   '20':'socialize',
//   '21':'read',
//   '22':'yoga',
//   '23':'sleep',
//   '24':'sleep'
// }

function updateActions(h) {
  // textDisplay.textContent = actionsDB[hh];
  textDisplay.textContent = hourlyItems[h];
};

// PERSIST DATA 

function saveLocStoArray () {
  let jsonHourlyItems = JSON.stringify(hourlyItems);
  localStorage.setItem('array',jsonHourlyItems);
}

function retrieveLocStoArray () {
  let retrievedString = localStorage.getItem('array');
  let retrievedArray = JSON.parse(retrievedString);
  hourlyItems = retrievedArray;
  updateItems();
}

retrieveLocStoArray();