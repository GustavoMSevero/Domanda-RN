import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage, FlatList } from 'react-native';
import {Actions} from 'react-native-router-flux';

type Props = {};
export default class AgendaComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { agenda:[], idusuario:'', nome:'', sobrenome:'', usuario:[]};

  }

componentDidMount(){
  this.loadData();
}

async loadData(){
  AsyncStorage.getItem("usuario").then((data)=>{
      this.setState({usuario: JSON.parse(data)});
      //console.log(this.state.usuario)
      this.setState({idusuario: this.state.usuario.idusuario});
      this.getAgenda();
    });
}

getAgenda(){

  var idcliente = this.state.idusuario;
  //console.log('idusuario '+idcliente)
  var opcao = 3;
  let urlGetAgenda = 'http://localhost:8888/sistemas/Webapps/domanda_api/api/admin_estabelecimento/reqScheduleProJson.php?opcao='+opcao+'&idcliente='+idcliente;
  fetch(urlGetAgenda,{ method: 'GET',
      headers: {
        Accept: 'application/json','Content-Type': 'application/json',
      },
      })
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson)
          this.setState({agenda: responseJson});
        })
        .catch((error) => {
        console.error(error);
        });

}
      
  
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textoAgenda}>AGENDA</Text>
        </View>
        
        <View>
          <FlatList
            data={this.state.agenda}
            keyExtractor={this._keyExtractor}
            renderItem={
              ({item}) => 
              <View>
                <Text>Onde: {item.estabelecimento} </Text>
                <Text>Local: {item.unidade} </Text> 
              </View>
            }
          />
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
  textoAgenda: {
    marginTop: 40,
    marginLeft: '40%',
    marginBottom: 20,
    fontSize: 18,
  },

  
});
