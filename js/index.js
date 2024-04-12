const base_url = "https://my-json-server.typicode.com/IVON1010/weather-app/db";

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

  /*fetchLocation();

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

  fetchForecast();*/

/*async function fetchForecast(){
    fetch(`${forecast_url}`, {
        method: 'GET',
        headers: {
            'content-type' : 'applocation/json'
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data) 
    })
  }*/

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

  // Function to fetch weather
function fetchWeather() {
    // Fetch weather data from db.json
    fetch(`${base_url}`)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => console.error("Error fetching weather:", error));
  }

  // Function to display weather information
  function displayWeather(data) {
    // Display current weather information
    const currentWeather = data.current;
    const location = data.location;

    // Create elements
    const card = document.createElement("div");
    card.classList.add("card");
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = `Current Weather in ${location.name}`;
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const image = document.createElement("img");
    image.textContent = `image: ${currentWeather.temperature}`;
  
    const temperature = document.createElement("p");
    temperature.textContent = `Temperature: ${currentWeather.temperature}°F`;
  
    const sky = document.createElement("p");
    sky.textContent = `Sky: ${currentWeather.skytext}`;
  
    const feelsLike = document.createElement("p");
    feelsLike.textContent = `Feels Like: ${currentWeather.feelslike}°F`;
  
    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${currentWeather.humidity}%`;
  
    const wind = document.createElement("p");
    wind.textContent = `Wind: ${currentWeather.winddisplay}`;


    // Append elements
    cardBody.appendChild(temperature);
    cardBody.appendChild(sky);
    cardBody.appendChild(feelsLike);
    cardBody.appendChild(humidity);
    cardBody.appendChild(wind);
  
    card.appendChild(cardHeader);
    card.appendChild(cardBody);

     // Clear existing content and append new content
     weatherInfo.innerHTML = '';
     weatherInfo.appendChild(card);
   }

    // Function to search for a specific day in the forecast
  function searchDay() {
    const searchValue = searchInput.value.toLowerCase();
    fetch(`${base_url}`)
      .then(response => response.json())
      .then(data => {
        const forecast = data.forecast;
        const filteredForecast = forecast.filter(day => day.day.toLowerCase().includes(searchValue));

        // Display search results
        if (filteredForecast.length > 0) {
            displaySearchResults(filteredForecast);
          } else {
            alert("No matching days found.");
          }
        })
        .catch(error => console.error("Error fetching weather:", error));
    }

    // Function to display search results
  function displaySearchResults(results) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.classList.add('card-header');
    cardHeaderDiv.textContent = 'Search Results';
    cardDiv.appendChild(cardHeaderDiv);

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    results.forEach(day => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${day.day}: Low ${day.low}°F, High ${day.high}°F, ${day.skytextday}`;
        cardBodyDiv.appendChild(paragraph);
    });

    cardDiv.appendChild(cardBodyDiv);

    weatherInfo.innerHTML = '';
    weatherInfo.appendChild(cardDiv);
}
});

  



