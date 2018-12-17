import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';

type Props = {};
export default class ProcurarComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { msg: null , email: null, senha: null, cidade: null};

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
        <View>
        <TextInput style={styles.campoCidade}
            placeholder="Cidade"
            onChangeText={texto => this.state.cidade = texto }
          />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffef1',
  },
  campoCidade: {
    backgroundColor:"#ffffff",
    width: '85%',
    height: 35,
    marginTop: 20,
    marginLeft: 20,
  }

});
