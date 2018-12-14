import React, { Component } from 'react';
import { Platform, ScrollView,ActivityIndicator,StyleSheet, Text, View, Image, TextInput, Button, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';

let endpoint = require('../util/endpoint-config');
var logo = require('../imgs/logo_domanda_v2.png');

type Props = {};
export default class LoginComponent extends Component<Props> {

  constructor(props) {
    super(props);

      this.state = {
          msg: null,
          email: null,
          senha: null,
          loading:false
      };

  }

  componentDidMount(){
    this.loadData();
  }
  
  async loadData(){
    AsyncStorage.getItem("usuario").then((data)=>{
        //console.log(data);
        if(data == null){
          console.log("Não tem dados")
        } else{
          Actions.push('agenda');
        }
  
      });
  }

  logar(){
    //console.log(this.state.email+' '+this.state.senha)
      this.setState({loading:true});
    var urlLoginUsuario = endpoint.backendUrl + '/api/admin_estabelecimento/pegaUsuario.php';
    fetch(urlLoginUsuario,{ method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
        body:JSON.stringify({
          email: this.state.email, 
          senha: this.state.senha
        })
      })

      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({loading:false});
        // alert(JSON.stringify(responseJson));
          if(responseJson.status === "null"){
            this.setState({msg: responseJson.msg});
            return;
          }else{
            AsyncStorage.setItem("usuario", JSON.stringify(responseJson));
            Actions.agenda();
          }
          
        })
        .catch((error) => {
        console.error(error);
        
        });

  }
  

  render() {
    return (
      <ScrollView style={styles.container}>
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
        <View backgroundColor="#ffe066" style={styles.btnLogar}>
          <Button disabled={this.state.loading} onPress={() => this.logar()} title="ACESSE" color="#000000"/>
        </View>
        <View backgroundColor="#ffe066" style={styles.btnCadatro}>
          <Button disabled={this.state.loading} onPress={() => Actions.cadastro()} title="CADASTRE-SE" color="#000000"/>
        </View>
        <View>
          <Text style={styles.avisoErro}>{this.state.msg}</Text>
        </View>
          {this.state.loading && <ActivityIndicator size="large"/> }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#ffff99',
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
    marginBottom: 20,
  },
  btnLogar:{
    width: '87%',
    marginLeft: '6%',
    marginBottom: 20,
    borderRadius: 5,
  },
  btnCadatro:{
    width: '87%',
    marginLeft: '6%',
    borderRadius: 5,
  },
  avisoErro: {
    marginTop: 20,
    textAlign: 'center',
    color: '#3399ff',
  },

  
});
