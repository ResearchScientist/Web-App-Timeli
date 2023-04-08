const timeDisplay = document.getElementById('time-announcement');
const textDisplay = document.getElementById('task-announcement');
const sunAndmoon = document.getElementById('sun-moon-lever');
const sunMoon = document.getElementById('sun-moon');

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
  // timeDisplay.textContent = `${hh}:${mm}`;
  rotateSunMoon(rotationRate);
  switchSunMoon(h,m);
  updateActions(h);
}

function clockDisplay() {
  timeDisplay.textContent = new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
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
setInterval(clockDisplay,1000);


// * DATABASE LOGIC * //

const actions = ['wake up','eat','read','do tech work','do research work','focus work','eat lunch!','keep eating','be creative','gym','gym','shower','eat'];

function updateActions(h) {
  if (h == 6) {
    textDisplay.textContent = actions[0];
  }
  if (h == 7) {
    textDisplay.textContent = actions[1];
  }
  if (h == 8) {
    textDisplay.textContent = actions[2];
  }
  if (h == 9) {
    textDisplay.textContent = actions[3];
  }
  if (h == 10) {
    textDisplay.textContent = actions[4];
  }
  if (h == 11) {
    textDisplay.textContent = actions[5];
  }
  if (h == 12) {
    textDisplay.textContent = actions[6];
  }
  if (h == 13) {
    textDisplay.textContent = actions[7];
  }
  if (h == 14) {
    textDisplay.textContent = actions[8];
  }
  if (h == 15) {
    textDisplay.textContent = actions[9];
  }
  if (h == 16) {
    textDisplay.textContent = actions[10];
  }
  if (h == 17) {
    textDisplay.textContent = actions[11];
  }
  if (h == 18) {
    textDisplay.textContent = actions[12];
  }
  if (h == 19) {
    textDisplay.textContent = actions[13];
  }
}
