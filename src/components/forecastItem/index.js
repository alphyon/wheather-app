import React from 'react';
import { PropTypes } from 'prop-types';
import WeatherData from '../WheaterLocation/WheatherData/index';

const ForecastItem = ({ weekDay, hour, data }) => (
    <div>
        <h3>
            {weekDay} -  Hora: {hour}
        </h3>
        <div> <WeatherData data={data} /></div>

    </div>

)

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
}
export default ForecastItem;