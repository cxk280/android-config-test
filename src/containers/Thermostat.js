import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Thermostat from '../components/Thermostat';
import * as ThermostatActions from '../actions/thermostat';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  back: {
    margin: 10,
    fontSize: 20,
  },
});

@connect(
  state => ({
    thermostat: state.thermostat,
  }),
  dispatch => bindActionCreators(ThermostatActions, dispatch),
)
export default class ThermostatContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <Thermostat {...this.props} />
      </View>
    );
  }
}
