document.getElementById("currentTime").textContent = Date.now();
function updateTime() {
  const timeElement = document.getElementById("currentTime");
  setInterval(() => {
    timeElement.textContent = Date.now();
  }, 100); // update every 100ms
}

document.addEventListener("DOMContentLoaded", updateTime);
