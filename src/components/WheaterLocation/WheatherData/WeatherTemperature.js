import React from 'react';
import WheaterIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SUN,
    SNOW,
    WINDY
} from '../../../constants/wheater';
const stateIconName = wheaterState => {
    let icon;
    switch (wheaterState) {
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
        default:
            icon =  "day-sunny";
            break;
    }
    return icon;
}

const getWeatherIcon = wheaterState => {
    return (<WheaterIcons name={stateIconName(wheaterState)} size="2x" />)
}
const WeatherTemperature = ({ temperature, wheaterState }) => (
    <div>
        {getWeatherIcon(wheaterState)}
        <span>{`${temperature}`}º</span>
    </div>
);
WeatherTemperature.propTypes ={
    temperature: PropTypes.number.isRequired,
    wheaterState: PropTypes.string,
}
export default WeatherTemperature;