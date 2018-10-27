import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Image, View } from 'react-native';
import Immutable from 'immutable';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '22.5%',
    backgroundColor: '#50A4AC'
  },
  time: {

  },
  date: {

  },
  shoppingCart: {

  }
});

export default class Header extends Component {
  static propTypes = {
    header: PropTypes.instanceOf(Immutable.Map).isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      header
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.time}>08:05 AM</Text>
        <Text style={styles.date}>/ Dec 21, 2018</Text>
        <Image style={styles.shoppingCart} source={require('/assets/shopping_cart.png')} />
      </View>
    );
  }
}
