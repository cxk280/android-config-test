import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Image, View } from 'react-native';
import Immutable from 'immutable';
import Thermostat from './Thermostat';

const styles = StyleSheet.create({
  container: {
    height: '85%',
    width: '96%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '-5.6%',
    backgroundColor: '#FFFFFF',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  homeIconContainer: {
    
  },
  homeIconImage: {
    
  },
  moreIconContainer: {
    
  },
  moreIconImage: {
    
  },
  plusIconContainer: {
    
  },
  plusIconImage: {
    width: 50,
    height: 50,
  },
});

export default class Body extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      body
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.homeIconContainer}>
            <Image style={styles.homeIconImage} source={require('../assets/home_icon_label.png')} />
          </View>
          <View style={styles.moreIconContainer}>
            <Image style={styles.moreIconImage} source={require('../assets/more_icon.png')} />
          </View>
        </View>
        <Thermostat {...this.props} />
        <View style={styles.bottomRow}>
          <View style={styles.plusIconContainer}>
            <Image style={styles.plusIconImage} source={require('../assets/plus_button.png')} />
          </View>
        </View>
      </View>
    );
  }
}
