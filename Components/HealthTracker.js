import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Container, Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const handleButtonClick = (increase = true, render_scope) => {

    const increment = increase ? 1 : -1;

    render_scope.setState({health: render_scope.state.health + increment});
}

export default class HealthTracker extends Component {

     constructor(props) {
        super(props);
        this.state = {
            health: 12513
        };
     }

      render() {

        const { top, style } = this.props;

        return (
           <Grid style={style}>
               <Col>
                   <Button onPress={() => handleButtonClick(true, this)}>
                        <Icon type="Entypo" name='plus' />
                   </Button>
               </Col>

               <Col>
                  <Text>{this.state.health}</Text>
               </Col>

               <Col>
                   <Button onPress={() => handleButtonClick(false, this)}>
                       <Icon type="Entypo" name='minus' />
                   </Button>
               </Col>
           </Grid>
        );
      }
}