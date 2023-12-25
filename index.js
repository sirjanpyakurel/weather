//const apiKey = "2443591f1d3d6cc0278dbf0a4aa37d17";
const apiKey = "2443591f1d3d6cc0278dbf0a4aa37d17";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")



//https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
   else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
    

    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

