import React from 'react';
import WeatherLocation from './WheaterLocation';
import { PropTypes } from 'prop-types';
import './style.css';


const LocationList = ({ cities,onSelectedLocation }) => {
    const handleWheatherLocationClick = city=>{
        onSelectedLocation(city);
    }
    const strToComponents = (cities) => (
        cities.map((city, i) => (
            <WeatherLocation
                key={i}
                city={city}
                wheatherLocationClick={() => handleWheatherLocationClick(city)}
            />
        ))
    )
    return (<div className="locationList">
        {strToComponents(cities)}
    </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;