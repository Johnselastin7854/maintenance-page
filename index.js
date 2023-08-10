const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function updateTimer() {
  const currentYear = new Date().getFullYear();

  const currentDate = new Date();
  //   console.log(currentDate);
  const newYear = new Date(`August 20 ${currentYear} 00:00:00`);
  const reamaingTimeToNewYear = newYear - currentDate;
  const d = Math.floor(reamaingTimeToNewYear / 1000 / 60 / 60 / 24);
  const h = Math.floor((reamaingTimeToNewYear / 1000 / 60 / 60) % 24);
  const m = Math.floor((reamaingTimeToNewYear / 1000 / 60) % 60);
  const s = Math.floor((reamaingTimeToNewYear / 1000) % 60);
  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(updateTimer, 1000);
