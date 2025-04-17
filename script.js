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
  const dateEl = document.getElementById("date");
  const monthEl = document.getElementById("month");
  const yearEl = document.getElementById("year");

  // Clear all containers
  clockEl.innerHTML = "";
  dayEl.innerHTML = "";
  dateEl.innerHTML = "";
  monthEl.innerHTML = "";
  yearEl.innerHTML = "";

  // Time values
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const isPM = hours >= 12;
  hours = hours % 12 || 12;

  const timeStr = `${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}`;
  const periodStr = isPM ? "PM" : "AM";

  // Hour digits
  for (let i = 0; i < 2; i++) {
    clockEl.appendChild(createImage(`images/digits/${timeStr[i]}.png`));
  }

  // Colon or blank based on even/odd second
  const colonImg = seconds % 2 === 0 ? "colon.png" : "blank.png";
  clockEl.appendChild(createImage(`images/digits/${colonImg}`));

  // Minute digits
  for (let i = 2; i < 4; i++) {
    clockEl.appendChild(createImage(`images/digits/${timeStr[i]}.png`));
  }

  // AM/PM
  for (let char of periodStr) {
    clockEl.appendChild(createImage(`images/letters/${char}.png`));
  }

  // Day
  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const today = dayNames[now.getDay()];
  dayEl.appendChild(createImage(`images/days/${today}.png`));

  // Date
  const date = now.getDate();
  if (date < 10) {
    dateEl.appendChild(createImage(`images/digits/blank.png`));
    dateEl.appendChild(createImage(`images/digits/${date}.png`));
  } else {
    const dateStr = date.toString();
    for (let char of dateStr) {
      dateEl.appendChild(createImage(`images/digits/${char}.png`));
    }
  }

  // Month
  const monthNames = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
  ];
  const month = monthNames[now.getMonth()];
  monthEl.appendChild(createImage(`images/months/${month}.png`));

  // Year
  const yearStr = now.getFullYear().toString();
  for (let char of yearStr) {
    yearEl.appendChild(createImage(`images/digits/${char}.png`));
  }
}

setInterval(updateClock, 1000);
updateClock();
