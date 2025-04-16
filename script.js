function createImage(path, className = "") {
    const img = document.createElement("img");
    img.src = path;
    if (className) img.classList.add(className);
    return img;
  }
  
  function updateClock() {
    const now = new Date();
    const clockEl = document.getElementById("clock");
    const dayEl = document.getElementById("day");
    const yearEl = document.getElementById("year");
  
    clockEl.innerHTML = "";
    dayEl.innerHTML = "";
    yearEl.innerHTML = "";
  
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const isPM = hours >= 12;
    hours = hours % 12 || 12;
  
    const timeStr = `${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}`;
    const periodStr = isPM ? "PM" : "AM";
  
    // Hour digits
    for (let i = 0; i < 2; i++) {
      clockEl.appendChild(createImage(`images/digits/${timeStr[i]}.png`));
    }
  
    // Blinking colon
    clockEl.appendChild(createImage(`images/colon.png`, "colon"));
  
    // Minute digits
    for (let i = 2; i < 4; i++) {
      clockEl.appendChild(createImage(`images/digits/${timeStr[i]}.png`));
    }
  
    // AM/PM
    for (let char of periodStr) {
      clockEl.appendChild(createImage(`images/letters/${char}.png`));
    }
  
    // Day name
    const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const today = dayNames[now.getDay()];
    dayEl.appendChild(createImage(`images/days/${today}.png`));
  
    // Year digits
    const yearStr = now.getFullYear().toString();
    for (let char of yearStr) {
      yearEl.appendChild(createImage(`images/digits/${char}.png`));
    }
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  