import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';

type Props = {};
export default class AgendaComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { agenda:[], idusuario:'', nome:'', sobrenome:''};

  }

componentDidMount(){
  this.loadData();
  this.getAgenda();
}

async loadData(){
  AsyncStorage.getItem("usuario").then((data)=>{
      console.log(data);
      // this.setState({idcliente: data.idusuario});
      // console.log('idusuario '+ this.state.idusuario);
    });
}

getAgenda(){
  //alert('Pegando agenda')
  //var idcliente = data.idcliente;
  // var opcao = 3;
  // let urlGetAgenda = 'http://localhost:8888/sistemas/Webapps/domanda_api/api/admin_estabelecimento/reqScheduleProJson.php?opcao='+opcao+'&idcliente='+idcliente;
  // fetch(urlGetAgenda,{ method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //         if(responseJson == null){
  //           console.log("Não tem compromisso")
  //         } else {
  //           console.log(responseJson)
  //         }
          
  //       })
  //       .catch((error) => {
  //       console.error(error);
        
  //       });
}
      
  
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textoAgenda}>AGENDA</Text>
        </View>
        
        <View>
          <Text></Text>
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
    fontSize: 18,
  }
  
});
