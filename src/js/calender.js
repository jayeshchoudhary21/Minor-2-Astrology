const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar() {
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  monthYear.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  calendarDays.innerHTML = "";

  // Add empty divs for days before the 1st day of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("empty");
    calendarDays.appendChild(emptyCell);
  }

  // Fill in the days of the month
  for (let day = 1; day <= lastDate; day++) {
    const dayCell = document.createElement("div");
    dayCell.textContent = day;

    // Highlight current day
    if (
      day === new Date().getDate() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear()
    ) {
      dayCell.classList.add("current-day");
    }

    calendarDays.appendChild(dayCell);
  }
}

// Event Listeners for buttons
prevMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Initial render
renderCalendar();
