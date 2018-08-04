import React from 'react';
import WheaterIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SUN,
    SNOW,
    WINDY,
    THUNDER
} from '../../../constants/wheater';
const stateIconName = weatherState => {
    let icon;
    switch (weatherState) {
        case CLOUD:
            icon = "cloud";
            break;
        case CLOUDY:
            icon = "cloudy";
            break;
        case SUN:
            icon = "day-sunny";
            break;
        case RAIN:
            icon = "rain";
            break;
        case SNOW:
            icon = "snow";
            break;
        case WINDY:
            icon = "windy";
            break;
        case THUNDER:
            icon = "thunderstorm";
            break;
        default:
            icon = "day-sunny";
            break;
    }
    return icon;
}
const getWeatherIcon = weatherState => {
    return (<WheaterIcons className="wicon" name={stateIconName(weatherState)} size="4x" />)
}
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="wheatherTempCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">Cº</span>
    </div>
);
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
}
export default WeatherTemperature;