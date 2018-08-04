import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WheaterExtraInfo from './WheaterExtraInfo';
import {
    // CLOUD,
    // CLOUDY,
    RAIN,
    // SUN,
    // SNOW,
    // WINDY
} from '../../../constants/wheater';
const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={30} wheaterState={RAIN} />
        <WheaterExtraInfo humidity={80} wind={20} />
    </div>
);

export default WeatherData;
