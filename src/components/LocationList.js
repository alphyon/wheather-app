import React from 'react';
import WeatherLocation from './WheaterLocation';
import { PropTypes } from 'prop-types';
import './style.css';


const LocationList = ({ cities,onSelectedLocation }) => {
    const handleWheatherLocationClick = city=>{
        onSelectedLocation(city);
    }
    const strToComponents = (cities) => (
        cities.map((city) => (
            <WeatherLocation
                key={city.key}
                city={city.name}
                wheatherLocationClick={() => handleWheatherLocationClick(city.name)}
                data = {city.data}
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