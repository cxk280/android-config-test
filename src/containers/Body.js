import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Body from '../components/Body';
import * as BodyActions from '../actions/body';

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
    body: state.body,
  }),
  dispatch => bindActionCreators(BodyActions, dispatch),
)
export default class BodyContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <Body {...this.props} />
      </View>
    );
  }
}
