const timeDisplay = document.getElementById('time-announcement');
const sunAndmoon = document.getElementById('sun-moon-lever');

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
}

// function clock() {
//   timeDisplay.textContent = new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
// }

function rotateSunMoon(rotationRate) {
  sunAndmoon.style.setProperty('--rotation',rotationRate);
}

setInterval(clock,1000);
