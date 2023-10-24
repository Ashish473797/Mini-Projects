
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDisplay = document.querySelector(".weather");

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

const apiURL = `https://api.openweathermap.org/data/2.5/weather?appid=a28faa857085e02184731ad1803a28a1&units=metric`;


async function checkWeather(cityName){
    const response = await fetch(apiURL + `&q=${cityName}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    weatherIcon.src = `./images/${data.weather[0].main}.png`;
    weatherDisplay.style.display = "block";
}