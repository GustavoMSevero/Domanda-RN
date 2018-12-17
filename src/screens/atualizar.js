import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';

type Props = {};
export default class AtualizarComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { msg: null , email: null, senha: null};

  }

componentDidMount(){
  this.loadData();
}

async loadData(){
  AsyncStorage.getItem("usuario").then((data)=>{
      console.log(data);

    });
}
      
  
  
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffef1',
  },
  
});
