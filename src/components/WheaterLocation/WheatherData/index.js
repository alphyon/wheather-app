import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WheaterExtraInfo from './WheaterExtraInfo';
import { PropTypes } from 'prop-types';
import './style.css'
const WeatherData = ({data}) => {
    const {temperature, humidity,weatherState,wind} = data;
    return(<div className="wheatherDataCont">
        <WeatherTemperature temperature={temperature} weatherState={weatherState} />
        <WheaterExtraInfo humidity={humidity} wind={wind} />
    </div>);
};
WeatherData.propTypes ={
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
}
export default WeatherData;
