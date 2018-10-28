import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Image, View } from 'react-native';
import Immutable from 'immutable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thermostatContainer: {
    width: '50%',
    height: '72%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  hatchCircle: {
    height: '100%',
    width: 150,
    borderRadius: 150/2,
    backgroundColor: '#42f4eb',
  },
  interiorCircle: {
    position: 'absolute',
    alignSelf: 'center',
    width: 75,
    height: 75,
    borderRadius: 75/2,
    backgroundColor: '#ffc0cb',
  },
  tempButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: 'red',
  },
});



export default class Thermostat extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      body
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.thermostatContainer}>
          <View style={styles.hatchCircle}>
          </View>
          <View style={styles.interiorCircle}>
          </View>
          <View style={styles.tempButton}>
          </View>
        </View> 
      </View>
    );
  }
}
