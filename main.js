const timeDisplay = document.getElementById('time-announcement');
const textDisplay = document.getElementById('task-announcement');
const sunAndmoon = document.getElementById('sun-moon-lever');
const sunMoon = document.getElementById('sun-moon');
const taskGUIlink = document.getElementById('open-task-GUI');
const taskGUI = document.getElementById('task-GUI');
const plusBox = document.getElementById('plus-box');
const taskForm = document.getElementById('task-form');

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
  updateActions(hh);
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

// * DATABASE LOGIC * //

const actionsDB = {
  '01':'sleep',
  '02':'sleep',
  '03':'sleep',
  '04':'sleep',
  '05':'sleep',
  '06':'wake up',
  '07':'breakfast',
  '08':'read',
  '09':'do tech work',
  '10':'do research work',
  '11':'do focus work',
  '12':'eat lunch',
  '13':'do creative work',
  '14':'do tech work',
  '15':'do research work',
  '16':'do focus work',
  '17':'gym',
  '18':'shower',
  '19':'dinner',
  '20':'socialize',
  '21':'read',
  '22':'yoga',
  '23':'sleep',
  '24':'sleep'
}

function updateActions(hh) {
  textDisplay.textContent = actionsDB[hh];
};

// INPUT BOX ANIMATION //

taskGUIlink.addEventListener('click', gotClicked);

function gotClicked(e) {
  // console.log(`clicked ${e}`);
  plusBox.classList.add('box-down');
  // console.log(plusBox.attributes);
  taskGUI.classList.add('show-task-GUI');
  taskForm.classList.remove('hide-task-form');
  taskForm.classList.add('show-task-form');
  // taskGUIlink.removeEventListener('click', gotClicked);
};

// CRUD //

function handleSubmit(e) {
  e.preventDefault();
  console.log(actionsDB[19]);
  actionsDB[19] = "eat dinners";
  console.log(actionsDB[19]);
  console.log(actionsDB);
};

// taskForm.addEventListener('submit',handleSubmit);

const thething = document.querySelector('#thething');

// console.log(thething.dataset.data-tableHour);
// console.log(thething);

console.log(thething.getAttribute("data-tableHour"));