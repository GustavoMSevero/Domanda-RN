import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage, TextInput, Button } from 'react-native';
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

atualizar(){

}
      
  
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput style={styles.campoNome}
            placeholder="Nome"/>
          
          <TextInput style={styles.campoSobrenome}
            placeholder="Sobrenome"/>

          <TextInput style={styles.campoSenha}
            secureTextEntry={true}
            />
        </View>
        <View backgroundColor="#f7921a" style={styles.btnAtualizar}>
          <Button onPress={() => this.atualizar()} title="Atualizar" color="#ffffff"/>
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
  campoNome: {
    width: '85%',
    height: 35,
    marginTop: 20,
    backgroundColor:"#ffffff",
    borderRadius: 5,
    marginLeft: 20,
  },
  campoSobrenome: {
    width: '85%',
    height: 35,
    marginTop: 20,
    backgroundColor:"#ffffff",
    borderRadius: 5,
    marginLeft: 20,
  },
  campoSenha: {
    width: '85%',
    height: 35,
    marginTop: 20,
    backgroundColor:"#ffffff",
    borderRadius: 5,
    marginLeft: 20,
  },
  btnAtualizar: {
    width: '85%',
    height: 35,
    marginTop: 20,
    borderRadius: 5,
    marginLeft: 20,
  }
  
});
