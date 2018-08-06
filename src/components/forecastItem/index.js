import React from 'react';
import { PropTypes } from 'prop-types';
import WeatherData from '../WheaterLocation/WheatherData/index';
const data = {
    temperature: 10,
    weatherState: 'normal',
    humidity: 5.6,
    wind: 12,
}
const ForecastItem = ({ weekDay, hour }) => (
    <div>
        <div>
            {weekDay} Hora: {hour}
        </div>
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