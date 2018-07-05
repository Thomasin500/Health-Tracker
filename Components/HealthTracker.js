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

               <Col>
                  <Text style={styles.textStyle}>{health}</Text>
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
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        width: 100,
        height: 50,
        right: 25,
        backgroundColor: 'yellow',
    },
  });
  