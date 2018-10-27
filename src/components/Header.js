import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Image, View } from 'react-native';
import Immutable from 'immutable';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '22.5%',
    backgroundColor: '#50A4AC',
  },
  headerContent: {
    flexDirection: 'row',
    marginLeft: '4.7%',
    marginRight: '4.8%',
  },
  timeContainer: {
    
  },
  dateContainer: {
    
  },
  shoppingCartContainer: {
    
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  dateText: {
    color: '#D8D8D8',
    fontSize: 20,
  },
  shoppingCartImage: {
    
  },
});

export default class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      header
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>08:05 AM</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>/ Dec 21, 2018</Text>
          </View>
          <View style={styles.shoppingCartContainer}>
            <Image style={styles.shoppingCartImage} source={require('../assets/shopping_cart.png')} />
          </View>
        </View>
      </View>
    );
  }
}
