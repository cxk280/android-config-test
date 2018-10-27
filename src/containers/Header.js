import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as HeaderActions from '../actions/header';

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
    header: state.header,
  }),
  dispatch => bindActionCreators(HeaderActions, dispatch),
)
export default class HeaderContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props} />
      </View>
    );
  }
}
