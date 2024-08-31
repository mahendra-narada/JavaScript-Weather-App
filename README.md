
# Weather App

This Weather App is a simple web application that allows users to get current weather information and a 4-day forecast for a specified location. Users can search for weather details by entering a city name or by using their current geographical location.

## Features

- **Real-time Weather Data:** Get up-to-date weather information including temperature, wind speed, humidity, and general weather conditions.
- **4-Day Forecast:** View the weather forecast for the next 4 days, including temperature, wind speed, and humidity.
- **Current Location Support:** Automatically retrieve and display weather data based on the user's current geographical location.
- **Responsive Design:** The app is fully responsive and works well on both desktop and mobile devices.
- **Background Animation:** Enjoy a smooth, animated background that enhances the visual appeal of the app.

## Technologies Used

- **HTML5:** Markup structure of the application.
- **CSS3:** Styling, including a dynamic background animation.
- **JavaScript (ES6):** Fetching and displaying weather data from the WeatherAPI.
- **WeatherAPI:** External API used to retrieve weather data.

## Setup and Usage

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari).
- An internet connection.

### How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **API Key Setup:**
   - Sign up at [WeatherAPI](https://www.weatherapi.com/) to get a free API key.
   - Replace the `api_key` variable in `script.js` with your WeatherAPI key.

3. **Open the App:**
   - Open the `index.html` file in your browser to use the app.

4. **Search for a Location:**
   - Enter the name of a city in the search box and click the "Search" button to get the current weather and forecast.

5. **Use Current Location:**
   - Click the "Use Current Location" button to allow the app to access your location and display weather information for your area.

### Example API URL

```javascript
const url = `${api_url}?key=${api_key}&q=${location}&days=4`;
```

## Project Structure

- **index.html:** The main HTML file that contains the structure of the app.
- **style.css:** The stylesheet that defines the layout and appearance of the app.
- **script.js:** The JavaScript file responsible for fetching and displaying weather data.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **WeatherAPI:** For providing free weather data.
- **Google Geolocation API:** For enabling location-based weather data.
