import React from 'react';
import WeatherLocation from './WheaterLocation';
import { PropTypes } from 'prop-types';



const LocationList = ({ cities,onSelectedLocation }) => {
    const handleWheatherLocationClick = city=>{
        console.log("handleWheatherLocationClick");
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
    return (<div>
        {strToComponents(cities)}
    </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;