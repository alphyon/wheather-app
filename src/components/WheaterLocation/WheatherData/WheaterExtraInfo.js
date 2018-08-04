import  React  from 'react';
import { PropTypes } from 'prop-types';
import './style.css';
const WheaterExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span  className="extraInfoText">{`Humedad: ${humidity} % `}</span>
        <span className="extraInfoText">{`Vientos: ${wind} m/s`}</span>
    </div>
);

WheaterExtraInfo.propTypes ={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WheaterExtraInfo;