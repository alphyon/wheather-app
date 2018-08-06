import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'San Salvador, sv',
  'El Rosario, sv',
];
class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null,
    }
  }
  handleSelectionLocation = city => {
    this.setState({
      city,
    })
  }
  render() {
    return (

      <Grid>
        <Row>
          <Col xs={12}>
            <div>
              <AppBar position="static" color="primary">
                <Toolbar>
                  <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit">
                    App Weather
          </Typography>
                </Toolbar>
              </AppBar>
            </div>

          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={1}>
              <div className="detail">
                  {
                    this.state.city ?
                    <ForecastExtended city={this.state.city} /> :
                    null
                  }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default App;
