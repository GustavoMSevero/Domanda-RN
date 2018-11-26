import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';

var logo = require('../imgs/logo_domanda_v2.png');

type Props = {};
export default class LoginComponent extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View >
          <Image source={logo} style={styles.logo} />
        </View>
        <View>
          <TextInput style={styles.campoEmail}
            placeholder="E-mail" 
          />
          <TextInput style={styles.campoSenha}
            placeholder="Senha" 
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#fff0b3',
  },
  logo: {
    height: 75,
    marginLeft: '35%',
    width: '25%',
    marginTop: 150,
  },
  campoEmail: {
    backgroundColor:"#ffffff",
    borderRadius: 5,
    width: '90%',
    height: 35,
    marginTop: 100,
    marginLeft: 20,
    marginBottom: 20,
  },
  campoSenha: {
    backgroundColor:"#ffffff",
    borderRadius: 5,
    width: '90%',
    height: 35,
    marginLeft: 20,
  }

  
});
