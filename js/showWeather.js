export function showData() {
    const Data = JSON.parse(localStorage.getItem("data"));
    const mainTemp = document.querySelector("#TempSpan");
    const cityText = document.querySelector("#CitySpan");
    const maxTemp = document.querySelector(".maxTemp");
    const minTemp = document.querySelector(".minTemp");
    const humidity = document.querySelector(".Humadity");
    const cloudy = document.querySelector(".cloudy");
    const wind = document.querySelector(".wind");
  
    mainTemp.innerHTML = `${Data.currentTemp}°`;
    cityText.innerHTML = Data.city;
    maxTemp.innerHTML = `${Data.maxTemp} ° <img src="./img/highTemploog.svg" alt=""
      /> `;
    minTemp.innerHTML = `${Data.minTemp} ° <img src="./img/lowTemplogo.svg" alt=""
      />`;
    humidity.innerHTML = `${Data.humidity} % <img src="./img/rainLogo.svg" alt=""
      />`;
    cloudy.innerHTML = `${Data.visibility} % <img src="./img/cloudlogo.svg" alt=""
      />`;
    wind.innerHTML = `${Data.windSpeed} km/h <img src="./img/windlogo.svg" alt=""
      /> `;
  }