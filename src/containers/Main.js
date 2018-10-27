import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Body from '../components/Body';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
});

export default class Main extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
          <Header {...this.props} />
          <Body {...this.props} />
      </View>
    );
  }
}
