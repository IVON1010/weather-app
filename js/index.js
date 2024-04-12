const base_url = "http://localhost:3000/current";
const location_url = "http://localhost:3000/location";
const forecast_url = "http://localhost:3000/forecast";

fetchCurrent();

async function fetchCurrent(){
    fetch(`${base_url}`, {
        method: 'GET',
        headers: {
            'content-type' : 'applocation/json'
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data) 
    })
  }

  fetchLocation();

async function fetchLocation(){
    fetch(`${location_url}`, {
        method: 'GET',
        headers: {
            'content-type' : 'applocation/json'
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data) 
    })
  }

  fetchForecast();

async function fetchForecast(){
    fetch(`${forecast_url}`, {
        method: 'GET',
        headers: {
            'content-type' : 'applocation/json'
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data) 
    })
  }

    document.addEventListener("DOMContentLoaded", function() {
        const fetchWeatherBtn = document.getElementById("fetchWeatherBtn");
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const weatherInfo = document.getElementById("weatherInfo");

    // Event listener for fetching weather
  fetchWeatherBtn.addEventListener("click", function() {
    fetchWeather();
  });

  // Event listener for searching day
  searchBtn.addEventListener("click", function() {
    searchDay();
  });

   // Event listener for pressing Enter key in search input
   searchInput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
      searchDay();
    }
  });
