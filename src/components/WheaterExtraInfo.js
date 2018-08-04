import  React  from 'react';
import { PropTypes } from 'prop-types';
const WheaterExtraInfo = ({humidity, wind}) => (
    <div>
        <span>{`${humidity} % `}</span><br/>
        <span>{`${wind} KM/H vientos`}</span>
    </div>
);

WheaterExtraInfo.propTypes ={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WheaterExtraInfo;