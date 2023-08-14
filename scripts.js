function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
function updateTime(){
  const now=new Date;
  let Hours=now.getHours();
  let minutes=now.getMinutes();
  let seconds=now.getSeconds();
  let ampm=Hours>=12 ? "P.M" : "A.M";
  Hours= Hours% 12
  Hours=Hours?Hours:12
  Hours=Hours < 10 ? "0"+ Hours: Hours;
  minutes=minutes < 10 ? "0"+ minutes: minutes;
  seconds=seconds < 10 ? "0"+ seconds: seconds;
  document.getElementById("Hours").textContent = Hours;
  document.getElementById("minutes").textContent=minutes;
  document.getElementById("seconds").textContent=seconds;
  document.getElementById("ampm").textContent=ampm;
}
setInterval(updateTime,1000);
updateTime();
