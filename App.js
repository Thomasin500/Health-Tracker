<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import HealthTracker from './Components/HealthTracker.js'

const handleButtonClick = (render_scope, player_one = true, increase = true) => {

  const increment = increase ? 1 : -1;

  if (player_one) {
    render_scope.setState({player_one_health: render_scope.state.player_one_health + increment});
  } else {
    render_scope.setState({player_two_health: render_scope.state.player_two_health + increment});
  }
}

const setHealth = (render_scope, new_health_amount = 0) => {

  render_scope.setState({player_one_health: new_health_amount});
  render_scope.setState({player_two_health: new_health_amount});
}

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
        player_one_health: 1,
        player_two_health: 2
    };
  }


  render() {

    return (

      <Grid>
          <Row style={styles.topRowStyle} size={40}>
              <HealthTracker
                style={styles.topHealthTrackerStyle} 
                health={this.state.player_one_health} 
                OnAddClick={() => handleButtonClick(this, true, true)}
                onMinusClick={() => handleButtonClick(this, true, false)}
              />
          </Row>

          <Row size={20}>
            <Button onPress={() => setHealth(this, 50)}>
              <Text style={styles.middle_row_style}> 50</Text>
            </Button>
            <Button
            />
          </Row>

          <Row size={40} style={styles.bottomRowStyle}>
              <HealthTracker  
                style={styles.bottomHealthTrackerStyle} 
                health={this.state.player_two_health} 
                OnAddClick={() => handleButtonClick(this, false, true)}
                onMinusClick={() => handleButtonClick(this, false, false)}
              />
          </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  topRowStyle: {
    backgroundColor: 'red' 
  },
  bottomRowStyle: {
    backgroundColor: 'blue'
  },
  middle_row_style: {
    textAlign: 'center',
    height: 30,
    lineHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    flex: 1,
    marginTop: -150, 
  },
  topHealthTrackerStyle: {
    transform:    [{ rotateZ: '180deg'}],
    right: 40,
    top: -100
  },
  bottomHealthTrackerStyle: {
    left: 40,
    top: 100
  },
});
