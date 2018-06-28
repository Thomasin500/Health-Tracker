import React, { Component } from 'react';
import { Container, Button, Text, Icon } from 'native-base';
//import { Col, Row, Grid } from 'react-native-easy-grid';


const handleButtonClick = (increase = true, render_scope) => {

    const increment = increase ? 1 : -1;

    render_scope.setState({health: rendor_scope.state.health + increment});
}

export default class HealthTracker extends Component {

     constructor(props) {
        super(props);
        this.state = {
            health: 12513
        };
     }

      render() {

        return (
          <Container>
              <Grid>
                 <Col>
                    <Button onPress={() => handleButtonClick(true, this)}
                 </Col>

                 <Col>
                    {this.state.health}
                 </Col>

                 <Col>
                     <Button onPress={() => handleButtonClick(false, this)}
                 </Col>
              </Grid>
          </Container>
        );
      }
}
