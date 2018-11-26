import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {Actions} from 'react-native-router-flux';

type Props = {};
export default class Cadastro extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cadastro</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
