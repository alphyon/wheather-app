import React from 'react';
import WheaterIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SUN,
    SNOW,
    WINDY
} from '../constants/wheater';
const stateIconName = wheaterState => {
    switch (wheaterState) {
        case CLOUD:
            return "cloud";
            break;
        case CLOUDY:
            return "cloudy";
            break;
        case SUN:
            return "day-sunny";
            break;
        case RAIN:
            return "rain";
            break;
        case SNOW:
            return "snow";
            break;
        case WINDY:
            return "windy";
            break;
        default:
            return "day-sunny";
            break;
    }
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

export default WeatherTemperature;