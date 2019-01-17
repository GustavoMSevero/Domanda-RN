import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  AsyncStorage, 
  TextInput, 
  Button,
  FlatList,
  TouchableOpacity 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Geocoder from 'react-native-geocoding';

let endpoint = require('../util/endpoint-config');

type Props = {};
export default class ProcurarComponent extends Component<Props> {

  // getData(){
  //   Geocoder.init('XXXXXXXXXXXXXXX'); // use a valid API key

  //   Geocoder.getFromLatLng(-30.0350938, -51.1480199).then(
  //     json => {
  //       var address_component = json.results[0].address_components[1];
  //       console.log(address_component["long_name"])
  //       alert(address_component);
  //     },
  //     error => {
  //       alert(error);
  //     }
  //   );

  //  }

  constructor(props) {
    super(props);
    this.state = { 
      msg: null , email: null, senha: null, cidade: null, tipo: null, opcao: null,
      estabelecimento: null, idestabelecimento: null
    }

  }

//watchID: ?number = null

componentDidMount(){
  this.loadData();
  //this.getData();
}


async loadData(){
  AsyncStorage.getItem("usuario").then((data)=>{
      //console.log(data);
    });
}

procurar(){
  var opcao = 1;
  var urlLoginUsuario = endpoint.backendUrl + '/api/admin_estabelecimento/reqCiaJson.php?opcao='+opcao+'&tipo='+this.state.tipo;
    fetch(urlLoginUsuario,{ method: 'GET'})
      .then((response) => response.json())
      .then((responseJson) => {
          //console.log(responseJson);
          this.setState({estabelecimento: responseJson});
          
        })
        .catch((error) => {
        console.error(error);
        
        });
}
      
  
  
  render() {
    return (
      <View style={styles.container}>
        <View>
        {/* <TextInput style={styles.campoCidade}
            placeholder="Cidade"
            onChangeText={texto => this.state.cidade = texto }
          /> */}
        
        <TextInput style={styles.campoEstabelecimento} ref={this.tipo}
            placeholder="Estabelecimento"
            onChangeText={texto => this.state.tipo = texto }
          />
        </View>
        
        <View backgroundColor="#ffe066" style={styles.btnProcurar}>
          <Button onPress={() => this.procurar()} title="Procurar" color="#f7921a"/>
        </View>

        <View>
          <FlatList data={this.state.estabelecimento} keyExtractor={this._keyExtractor}

            ListEmptyComponent={()=>{return <View style={{marginTop:50}}>
                {this.state.estabelecimento && this.state.estabelecimento.length ==0 && 
                <View >
                    <TouchableOpacity onPress={()=>{this.procurar();}}>
                        <Text style={{fontWeight:'bold',textAlign:'center',color:'black'}}> Sem resultados</Text>
                    </TouchableOpacity>
                </View>

                }
                {this.state.loading && <ActivityIndicator size="large"/> }

            </View>}}


            renderItem={
              ({item}) => 
              <View style={styles.exibe}>
                <TouchableOpacity onPress={()=>{ Actions.unidade({idestabelecimento:item.idestabelecimento}) }}>
                  {/* <Text > {item.idestabelecimento} </Text> */}
                  <Text style={styles.nome}> {item.nome} </Text>
                  <Text style={styles.cid}> {item.cid} </Text>
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
    backgroundColor: '#fffef1',
  },
  campoCidade: {
    backgroundColor:"#ffffff",
    width: '85%',
    height: 35,
    marginTop: 20,
    marginLeft: 20,
  },
  campoEstabelecimento: {
    backgroundColor:"#ffffff",
    width: '85%',
    height: 35,
    marginTop: 10,
    marginLeft: 20,
  },
  btnProcurar: {
    width: '85%',
    marginLeft: 20,
    marginTop: 10,
  },
  exibe: {
    marginLeft: '15%',
    width: '70%',
  },
  nome: {
    backgroundColor: '#ffffff',
    padding: '1%',
    marginTop: 10,
    paddingTop: 5,
    paddingLeft: 5,
  },
  cid: {
    backgroundColor: '#ffffff',
    padding: '1%',
    marginBottom: 10,
    paddingTop: 5,
    paddingLeft: 5,
  },

});
