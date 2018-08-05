import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'San Salvador, sv',
  'El Rosario, sv',
  'Mozzate, it',
  'Mexico, mx'
];
class App extends Component {
  handleSelectionLocation = city => {
    console.log("handleSelectionLocation");
  }
  render() {
    return (
      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectionLocation}
        />
      </div>
    );
  }
}

export default App;
