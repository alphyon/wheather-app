import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';
import { setCity, setSelectedCity } from '../actions/index';
import { connect } from 'react-redux';

class LocationListContainer extends Component {
    handleSelectionLocation = city => {
        this.props.setCity(city);
    }
    render() {
        return (
            <div>
                <LocationList cities={this.props.cities}
                    onSelectedLocation={this.handleSelectionLocation} />
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,

};

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
});
export default connect(null,mapDispatchToProps)(LocationListContainer);
