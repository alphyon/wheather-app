import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainer from './container/LocationListContainer';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ForecastExtendedContainer from './container/ForecastExtendedContainer';

const cities = [
  'San Salvador, sv',
  'El Rosario, sv',
  'Barcelona, es',
  'Madrid, es',
];

class App extends Component {
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
            <LocationListContainer cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={1}>
              <div className="detail">
                    <ForecastExtendedContainer /> 
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default App;
