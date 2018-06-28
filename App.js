import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';


type Props = {};
export default class App extends Component<Props> {

  render() {
    return (

     <Grid>
                   <Col style={{backgroundColor:"red"}}></Col>
                   <Col style={{backgroundColor:"blue"}}></Col>
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
