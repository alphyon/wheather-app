import { React, Component } from 'react';
import { PropTypes } from 'prop-types';
import LocationList from '../components/LocationList';
import { connect } from 'react-redux';
import { setCity } from '../actions';


class LocationListContainer extends Component {
    handleSelectionLocation = city => {
        this.props.setCity(city);
      }
    render(){
        return(<LocationList cities={cities} onSelectedLocation={this.onSelectedLocation}/>);
    }

}

LocationListContainer.propTypes ={
setCity: PropTypes.func.isRequired,
}

const mapDispatchToProps =(dispatch) =>({
    setCity: value=>dispatch(setCity(value))
  });

export default (null,mapDispatchToProps)(LocationListContainer);
