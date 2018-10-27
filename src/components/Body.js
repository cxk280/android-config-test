import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Immutable from 'immutable';

const styles = StyleSheet.create({
  container: {
    height: '85%',
    width: '96%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '11.25%',
  }
});

export default class Body extends Component {
  // static propTypes = {
  //   body: PropTypes.instanceOf(Immutable.Map).isRequired,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      body
    } = this.props;
    return (
      <View style={styles.container}>
      </View>
    );
  }
}
