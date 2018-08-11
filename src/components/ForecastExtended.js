import React from 'react';
import { PropTypes } from 'prop-types';
import './style.css';
import ForecastItem from './forecastItem/index';
import  CircularProgress  from '@material-ui/core/CircularProgress';

const renderForecastItemsDays = (forecastData)=> {
    return (
        forecastData.map((day, i) => (
            <ForecastItem key={i} weekDay={day.weekDay}
                hour={day.hour} data={day.data} />))

    )
};

const renderProgress = () => {
    return (<div>
        <CircularProgress /></div>)
}

const ForecastExtended = ({city, forecastData}) => (


            <div>
                <h2 className="forecast-title">Pronóstico para {city}</h2>
                {
                    forecastData ?
                        renderForecastItemsDays(forecastData) :
                        renderProgress()
                }
            </div>
    
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}
export default ForecastExtended;