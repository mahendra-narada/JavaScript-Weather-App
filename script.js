let api_key = "01129bfca5fe42b080e162249242908";
let api_url = "https://api.weatherapi.com/v1/forecast.json";


//User input Weather Location Function
function searchWeather() {
    let location = document.getElementById("cityInput").value;
  
    fetchWeather(location);
    
  }


//Fetch api Function
function fetchWeather(location) {
    const url = `${api_url}?key=${api_key}&q=${location}&days=4`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("location").textContent=data.location.name;
      document.getElementById("temperature").textContent=data.current.temp_c+"°C";
      document.getElementById("description").textContent=data.current.condition.text;
      document.getElementById("weather-icon").src=data.current.condition.icon;
      document.getElementById("Humidity").textContent="Humidity: "+data.current.humidity+"%";
      document.getElementById("Wind").textContent="Wind: "+data.current.wind_mph+" M/S";
     
      //forecast day 1
      document.getElementById("f1_date").textContent=data.forecast.forecastday[0].date;
      document.getElementById("f1_temp").textContent="Temp: "+data.forecast.forecastday[0].day.avgtemp_c+"°C";
      document.getElementById("f1_wind").textContent="Wind: "+data.forecast.forecastday[0].day.maxwind_mph+" M/S";
      document.getElementById("f1_humidity").textContent="Humidity: "+data.forecast.forecastday[0].day.avghumidity+"%";
       

      // forecast day 2
      document.getElementById("f2_date").textContent=data.forecast.forecastday[1].date;
      document.getElementById("f2_temp").textContent="Temp: "+data.forecast.forecastday[1].day.avgtemp_c+"°C";
      document.getElementById("f2_wind").textContent="Wind: "+data.forecast.forecastday[1].day.maxwind_mph+" M/S";
      document.getElementById("f2_humidity").textContent="Humidity: "+data.forecast.forecastday[1].day.avghumidity+"%";

      //forecast day 3
      document.getElementById("f3_date").textContent=data.forecast.forecastday[2].date;
      document.getElementById("f3_temp").textContent="Temp: "+data.forecast.forecastday[2].day.avgtemp_c+"°C";
      document.getElementById("f3_wind").textContent="Wind: "+data.forecast.forecastday[2].day.maxwind_mph+" M/S";
      document.getElementById("f3_humidity").textContent="Humidity: "+data.forecast.forecastday[2].day.avghumidity+"%";

    //   forecast day 4
    const tomorrowDate = new Date(data.forecast.forecastday[2].date);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const formattedTomorrowDate = tomorrowDate.toISOString().slice(0, 10);
    document.getElementById("f4_date").textContent = formattedTomorrowDate;
    })
    .catch(error => {
      console.error("Error:", error);
      
    });
}


//Current Location Function
function useCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            
            const location = `${latitude},${longitude}`;
            fetchWeather(location);
            
        }, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
