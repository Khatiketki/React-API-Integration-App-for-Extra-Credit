import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useState } from 'react';
function WeatherForm({ fetchWeather }) {
  const [city,setCity]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (city.trim() !== '') { // Ensure city is not empty or just whitespace
      (async () => {
        await fetchWeather(city);
    })();
    }
  };
  return (
    <form>
      <button type="submit" onClick={handleSubmit} >Get Weather</button>
      <input type='text' placeholder='Enter City' value={city} onChange={(e)=>{
        setCity(e.target.value);
      }}
      required/>
    </form>
  );
 

}

// Adding PropTypes for WeatherForm component
WeatherForm.propTypes = {
  fetchWeather: PropTypes.func.isRequired,  // fetchWeather should be a function and is required
};

export default WeatherForm;
