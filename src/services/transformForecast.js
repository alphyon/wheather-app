import moment from 'moment';
import transformWheatherData from './transFormWheather';

const transformForecast = data => (
    data.list.filter(item => (
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWheatherData(item)
        }
    ))
);

export default transformForecast;