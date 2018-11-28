import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';

var logo = require('../imgs/logo_domanda_v2.png');

type Props = {};
export default class Cadastro extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = { msg: null , email: null, senha: null};

    //this.cadastrar  = this.cadastrar.bind(this);

  }
  
  render() {
    return (
      <View style={styles.container}>
        <View >
          <Image source={logo} style={styles.logo} />
        </View>
        <View>
          <TextInput style={styles.campoEmail}
            placeholder="E-mail"
            onChangeText={texto => this.state.email = texto }
          />
          <TextInput style={styles.campoSenha}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={texto => this.state.senha = texto }
          />
        </View>
        <View backgroundColor="#ffe066" style={styles.btnCadastrar}>
          <Button onPress={() => false} title="CADASTRAR" color="#000000"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff99',
  },
  logo: {
    height: 75,
    marginLeft: '35%',
    width: '25%',
    marginTop: 100,
  },
  campoEmail: {
    backgroundColor:"#ffffff",
    borderRadius: 5,
    width: '90%',
    height: 35,
    marginTop: 80,
    marginLeft: 20,
    marginBottom: 20,
  },
  campoSenha: {
    backgroundColor:"#ffffff",
    borderRadius: 5,
    width: '90%',
    height: 35,
    marginLeft: 20,
    marginBottom: 20,
  },
  btnCadastrar:{
    width: '87%',
    marginLeft: '6%',
    borderRadius: 5,
  }
  
});
