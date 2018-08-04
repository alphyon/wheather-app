import React from 'react';
import Location from './Location';
import WeatherData from './WheatherData/index';

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"San Salvador"} />
        <WeatherData />
    </div>
);
export default WeatherLocation;