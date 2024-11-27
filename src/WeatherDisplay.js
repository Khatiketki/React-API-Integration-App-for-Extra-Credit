import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function WeatherDisplay({ data }) {
  return (
    <div className="weather-display">
      <h2>{data.location.name}, {data.location.country}</h2>
      <p>Temperature: {data.current.temp_c}°C</p>
      <p>Condition: {data.current.condition.text}</p>
      <img src={data.current.condition.icon} alt={data.current.condition.text} />
    </div>
  );
}

// Adding PropTypes for WeatherDisplay component
WeatherDisplay.propTypes = {
  data: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    current: PropTypes.shape({
      temp_c: PropTypes.number.isRequired,
      condition: PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherDisplay;
