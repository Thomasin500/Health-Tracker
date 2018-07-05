import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class HealthTracker extends Component {

      render() {

        const { health, style, OnAddClick, onMinusClick } = this.props;

        return (
           <Grid style={style}>
               <Col>
                    <Button onPress={() => onMinusClick()}>
                       <Icon type="Entypo" name='minus' />
                    </Button>
               </Col>

               <Col style={styles.textStyle}>
                  <Text>{health}</Text>
               </Col>

               <Col>
                    <Button onPress={() => OnAddClick()}>
                        <Icon type="Entypo" name='plus' />
                    </Button>
               </Col>
           </Grid>
        );
      }
}

const styles = StyleSheet.create({
    textStyle: {
      left: 25,
      top: 10
    },
    
  });
  