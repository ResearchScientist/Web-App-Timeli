const timeDisplay = document.getElementById('time-announcement');

function clock() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let hh = h < 10 ? "0" + h : h;
  let mm = m < 10 ? "0" + m : m;
  timeDisplay.textContent = `${hh}:${mm}`;
}

// function clock() {
//   timeDisplay.textContent = new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
// }

setInterval(clock,1000);