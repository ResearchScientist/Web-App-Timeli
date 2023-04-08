const timeDisplay = document.getElementById('time-announcement');
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
  timeDisplay.textContent = `${hh}:${mm}`;
  rotateSunMoon(rotationRate);
  switchSunMoon(h,m);
  // updateActions(h,m);
}

// function clock() {
//   timeDisplay.textContent = new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
// }

function rotateSunMoon(rotationRate) {
  sunAndmoon.style.setProperty('--rotation',rotationRate);
}

setInterval(clock,1000);


// * DATABASE LOGIC * //

const actions = ['wake up','eat','read','do tech work','do research work','focus work','eat lunch!','keep eating','be creative','gym','gym','shower','eat'];

// function updateActions(h,m) {
//   console.log(`its ${h} ${m}`);
//   console.log(h > 16)
// }

function switchSunMoon(h,m) {
  if ( (h > 18) && (m > 29) ) {
    sunMoon.style.setProperty('background-color','white');
  }
}