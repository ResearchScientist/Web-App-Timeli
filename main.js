const timeDisplay = document.getElementById('time-announcement');

function clock() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let hh = h < 10 ? "0" + h : h;
  let mm = m < 10 ? "0" + m : m;
  timeDisplay.innerHTML = `${hh}:${mm}`;
}

setInterval(clock,1000);

