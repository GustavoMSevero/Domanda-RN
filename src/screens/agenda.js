import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    FlatList,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import {Actions} from 'react-native-router-flux';
let endpoint = require('../util/endpoint-config');

import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;

type Props = {};
export default class AgendaComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { agenda:[], idusuario:'', nome:'', sobrenome:'', usuario:[],
      loading:false};

  }

componentDidMount(){
  this.loadData();
}

async loadData(){
  AsyncStorage.getItem("usuario").then((data)=>{
      this.setState({usuario: JSON.parse(data)});
      console.log(this.state.usuario)
      this.setState({idusuario: this.state.usuario.idusuario});
      this.getAgenda();
    });
}

getAgenda(){

  var idcliente = this.state.idusuario;
  //console.log('idusuario '+idcliente)
    this.setState({loading:true});
  var opcao = 3;
  let urlGetAgenda = endpoint.backendUrl + '/api/admin_estabelecimento/reqScheduleProJson.php?opcao='+opcao+'&idcliente='+idcliente;
  fetch(urlGetAgenda,{ method: 'GET',
      headers: {
        Accept: 'application/json','Content-Type': 'application/json',
      },
      })
      .then((response) => response.json())
      .then((responseJson) => {
          //console.log(responseJson)
          this.setState({agenda: responseJson,loading:false});
        })
        .catch((error) => {
        console.error(error);
        });

}
      
  
  
  render() {
      <View>
          <Text style={styles.textoAgenda}>AGENDA</Text>
      </View>

      
      return (
      <View style={styles.container}>

        <View>
          <FlatList data={this.state.agenda} keyExtractor={this._keyExtractor}

            ListEmptyComponent={()=>{return <View style={{marginTop:50}}>
                {!this.state.loading && <View >
                    <TouchableOpacity onPress={()=>{this.getAgenda();}}>
                        <Text style={{fontWeight:'bold',textAlign:'center',color:'black'}}> Sem resultados</Text>
                        <View style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row',paddingTop:7}}>
                            <Text style={{fontSize:12}}>Toque para atualizar</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                }
                {this.state.loading && <ActivityIndicator size="large"/> }

            </View>}}


            renderItem={
              ({item}) => 
              <View style={styles.exibe}>
                <TouchableOpacity>
                  {/* <Text > {item.idagendamentoProfissional} </Text> */}
                  <Text style={styles.dia}> {item.dia} </Text>
                  <Text style={styles.nome}> {item.nome} - {item.funcao} </Text>
                  <Text style={styles.hora}> {item.hora} </Text> 
                </TouchableOpacity>
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
    //backgroundColor: '#fffef1',
  },

  textoAgenda: {
    textAlign: 'center',
    padding: '5%',
    marginTop: 40,
    width: '100%',
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#ffff99',
  },

  exibe: {
    marginLeft: '15%',
    width: '70%',
  },

  dia: {
    backgroundColor: '#ffffff',
    padding: '1%',
  },

  nome: {
    backgroundColor: '#ffffff',
    padding: '1%',
  },

  hora: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
    padding: '1%',
  },

//   dia: "26/10/2017"
//   estabelecimento: "Hugo Beauty"
//   funcao: "Cabeleireiro"
//   hora: "13:00 - 14:00"
//   idagendamentoProfissional: "25"
//   idcliente: "5"
//   nome: "Alfredo"
//   unidade: "Hugo Lageado"

  
});
