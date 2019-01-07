import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage, FlatList, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';

let endpoint = require('../util/endpoint-config');

type Props = {};
export default class ConsultaComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {idagendamentoProfissional: 0, dadosAgendamento: ''};
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
                <Text > {item.estabelecimento} </Text>
                <Text > {item.unidade} </Text>
                <Text > {item.dia} </Text> 
                <Text > {item.hora} </Text>
                <Button onPress={()=> false} title="Cancelar Agendamento"></Button>
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
  },
  
});
