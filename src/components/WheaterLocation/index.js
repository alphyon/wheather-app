import React from 'react';
import Location from './Location';
import WeatherData from './WheatherData';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import { PropTypes } from 'prop-types';


const WeatherLocation = ({ wheatherLocationClick, city, data }) => (
    <div className="weatherLocationCont" onClick={wheatherLocationClick} >
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress style={{ color: purple[500] }} thickness={7} />}
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string,
    wheatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
}

export default WeatherLocation;