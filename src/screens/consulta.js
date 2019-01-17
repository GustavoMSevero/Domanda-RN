import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage, FlatList, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';

let endpoint = require('../util/endpoint-config');

type Props = {};
export default class ConsultaComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {idagendamentoProfissional: '', dadosAgendamento: ''};
  }

componentDidMount(){
  this.loadData();
  this.getAgendamento();

}

async loadData(){
  AsyncStorage.getItem("usuario").then((data)=>{
      //console.log(data);
    });
}

getAgendamento(){

  var idagendamentoProfissional = this.props.idagendamentoProfissional;
  //console.log('idagendamentoProfissional '+idagendamentoProfissional)
  //var opcao = 3;
  let urlGetAgendamento = endpoint.backendUrl + '/api/admin_estabelecimento/reqAgendamento.php?idagendamentoProfissional='+idagendamentoProfissional;
  fetch(urlGetAgendamento,{ method: 'GET',
      headers: {
        Accept: 'application/json','Content-Type': 'application/json',
      },
      })
      .then((response) => response.json())
      .then((responseJson) => {
          //console.log(responseJson)
          this.setState({dadosAgendamento: responseJson});
        })
        .catch((error) => {
        console.error(error);
        });

}

desmarcar(){
  var idagendamento = this.props.idagendamentoProfissional;
  var opcao = 4;
  let urlCancelAgenda = endpoint.backendUrl + '/api/admin_estabelecimento/reqScheduleProJson.php?opcao='+opcao+'&idagendamento='+idagendamento;

  fetch(urlCancelAgenda, {
        method: 'delete'
      }).then(response =>
        response.json().then(json => {
          return json;
        })
      );

      Actions.agenda();
    
}
      
  
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList data={this.state.dadosAgendamento} keyExtractor={this._keyExtractor}

            ListEmptyComponent={()=>{return <View style={{marginTop:50}}>
                {!this.state.loading && <View >

                </View>

                }

            </View>}}


            renderItem={
              ({item}) => 
              <View >
                {/* <Text > {item.idagendamento} </Text> */}
                <Text style={styles.local}> Onde... {item.estabelecimento} </Text>
                <Text style={styles.unidade}> Unid... {item.unidade} </Text>
                <Text style={styles.data}> Data... {item.dia} </Text> 
                <Text style={styles.hora}> Hora... {item.hora} </Text>
                <Button onPress={()=> this.desmarcar(item.idagendamento)} title="Desmarcar"></Button>
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
    backgroundColor: '#fffef1',
    marginLeft: '2%',
  },

  local: {
    backgroundColor: '#ffffff',
    marginLeft: '10%',
    marginTop: 20,
    width: '70%',
    paddingTop: 5,
    paddingLeft: 5,
  },
  unidade: {
    backgroundColor: '#ffffff',
    marginLeft: '10%',
    width: '70%',
    paddingTop: 2,
    paddingLeft: 5,
  },
  data: {
    backgroundColor: '#ffffff',
    marginLeft: '10%',
    width: '70%',
    paddingTop: 2,
    paddingLeft: 5,
  },
  hora: {
    backgroundColor: '#ffffff',
    marginLeft: '10%',
    width: '70%',
    paddingTop: 2,
    paddingLeft: 5,
    paddingBottom: 5,
  },
  
});
