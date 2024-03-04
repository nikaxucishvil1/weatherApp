import { getDate } from "./date.js";
import { showData } from "./showWeather.js";

export function fetchData() {
  const input = document.querySelector("#searchInput");

  const errorSpan = document.querySelector("#span404");
  const city = input.value.trim().toLowerCase();
  const dateSpan = document.querySelector("#DateSpan");
  fetch(`https://lobster-app-kps4x.ondigitalocean.app/api/weather/${city}`)
    .then((datas) => {
      if (!datas.ok) {
        errorSpan.style.display = "block";
      }
      return datas.json();
    })
    .then((data) => {
      errorSpan.style.display = "none";

      localStorage.setItem("data", JSON.stringify(data));
    });

  input.value = "";
  const waitingTime = setInterval(() => {
    if (localStorage.length !== 0) {
      showData();
    }
    getDate(dateSpan);
    clearInterval(waitingTime);
  }, 2200);
}
