import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Image, View } from 'react-native';
import Immutable from 'immutable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
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
        <Text>This is the thermostat</Text>
      </View>
    );
  }
}
