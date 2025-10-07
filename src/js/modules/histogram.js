document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("./src/js/data/data.json");
  const days = await response.json();
  console.log(days);
  const amounts = days.map((day) => day.amount);
  const maxValue = Math.max(...amounts);

  days.forEach((day) => {
    const currentDay = document.getElementById(`${day.day}`);
    currentDay.classList.add(`opacity-100`);
    currentDay.style.height = `${(day.amount / maxValue) * 100}%`;

    const tooltip = currentDay.querySelector(`.tooltip`); //I tried it with data.tooltip, but it wasn't perfect due to the dynamic transparency of the parent. That's why.
    tooltip.textContent = `$ ${day.amount}`;
  });
});
