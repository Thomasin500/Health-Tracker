<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import HealthTracker from './Components/HealthTracker.js'

const rotate_180_style = {

    transform:    [{ rotateZ: '180deg'}],
    marginBottom: 400,
    right:        22
}

const middle_row_style = {

  textAlign: 'center',
  height: 30,
  lineHeight: 30,
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  flex: 1,
  marginTop: -150,

}

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

        <Col size={2.5}>
        </Col>

        <Col size={6}>
          <Row style={rotate_180_style}>
              <HealthTracker 
                health={this.state.player_one_health} 
                OnAddClick={() => handleButtonClick(this, true, true)}
                onMinusClick={() => handleButtonClick(this, true, false)}
              />
          </Row>

          <Row >
            <Button onPress={() => setHealth(this, 50)}>
              <Text style={middle_row_style}> 50</Text>
            </Button>
            <Button


            />
          </Row>

          <Row>
              <HealthTracker  
              health={this.state.player_two_health} 
              OnAddClick={() => handleButtonClick(this, false, true)}
              onMinusClick={() => handleButtonClick(this, false, false)}
          />
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
