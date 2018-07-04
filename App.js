<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import HealthTracker from './Components/HealthTracker.js'

const rotate_180_style = {

    transform:     [{ rotate: '180deg' }],
    marginBottom:  400,
    //paddingRight:  125,
   // marginRight:   125,
}

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (

    <Grid>

      <Col size={2}>
      </Col>

      <Col size={6}>
        <Row style = {rotate_180_style}>
            <HealthTracker/>
        </Row>

        <Row>
            <HealthTracker/>
        </Row>
      </Col>

      <Col size={2}>
      </Col>
        
    </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
