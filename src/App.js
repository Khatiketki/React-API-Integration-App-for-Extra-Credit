import React, { useState } from 'react';
import './App.css';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = 'ba80e7e99d3145c799713053242711'; // Replace with your actual WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError(null);
      }
    } catch (err) {
      setError('Error fetching weather data.');
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      {error && <div className="error">{error}</div>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
