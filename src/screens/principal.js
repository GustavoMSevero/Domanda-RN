import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';

type Props = {};
export default class PrincipalComponent extends Component<Props> {

  constructor(props) {
    super(props);

  }

componentDidMount(){
  this.loadData();
}

async loadData(){
    try {
        const usuario = AsyncStorage.getItem("usuario");
        if (usuario !== null) {
        // We have data!!
        console.log(usuario);
        }
        } catch (error) {
        // Error retrieving data
        console.log(error);
        }
}
      
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Principal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff99',
  },
  
});
