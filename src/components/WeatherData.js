import  React  from 'react';
import WeatherTemperature from './WeatherTemperature';
import WheaterExtraInfo from './WheaterExtraInfo';

const WeatherData = () => (
    <div>
       <WeatherTemperature />
       <WheaterExtraInfo humidity={80} wind={"10 K/H"}/>
    </div>
);

export default WeatherData;
