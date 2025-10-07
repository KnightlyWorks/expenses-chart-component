document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("./src/js/data/data.json");
  const days = await response.json();
  console.log(days);
  const amounts = days.map((day) => day.amount);
  const maxVAlue = Math.max(...amounts);

  days.forEach((day) => {
    const curretDay = document.getElementById(`${day.day}`);
    curretDay.style.opacity = `100%`;
    curretDay.style.height = `${(day.amount / maxVAlue) * 100}%`;
  });
});
