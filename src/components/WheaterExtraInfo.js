import  React  from 'react';
const WheaterExtraInfo = ({humidity, wind}) => (
    <div>
       
        <span>{`${humidity} % `}</span><br/>
        <span>{`${wind} vientos`}</span>
    </div>
);

export default WheaterExtraInfo;