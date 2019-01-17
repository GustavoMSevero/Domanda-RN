import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  AsyncStorage, 
  FlatList,
  TouchableOpacity 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Geocoder from 'react-native-geocoding';

let endpoint = require('../util/endpoint-config');

type Props = {};
export default class UnidadeComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { 
      msg: null , email: null, senha: null, cidade: null, tipo: null, opcao: null,
      estabelecimento: null, idestabelecimento: null, unidade: null, idunidade: null,
    }

  }

componentDidMount(){
    var id = this.props.idestabelecimento;
    //alert('id estabelecimento '+id)
    this.getUnidade();
}


async loadData(){
  AsyncStorage.getItem("usuario").then((data)=>{
      //console.log(data);
    });
}

getUnidade(){
    var idestabelecimento = this.props.idestabelecimento;
    var urlLoginUsuario = endpoint.backendUrl + '/api/admin_estabelecimento/reqUnitJson.php?idestabelecimento='+idestabelecimento;
    fetch(urlLoginUsuario,{ method: 'GET'})
      .then((response) => response.json())
      .then((responseJson) => {
          //console.log(responseJson);
          this.setState({unidade: responseJson});
          
        })
        .catch((error) => {
        console.error(error);
        
        });
}
  
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList data={this.state.unidade} keyExtractor={this._keyExtractor}

            ListEmptyComponent={()=>{return <View style={{marginTop:50}}>
                {this.state.unidade && this.state.unidade.length ==0 && 
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
                <TouchableOpacity onPress={()=>{ Actions.profissional({idunidade:item.idunidade}) }}>
                  {/* <Text> {item.idunidade} </Text> */}
                  <Text style={styles.unidade} > {item.unidade} </Text>
                  <Text style={styles.endereco} > {item.endereco}, {item.numero} </Text>
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

  unidade: {
    backgroundColor: '#ffffff',
    marginLeft: '15%',
    width: '70%',
    marginTop: 10,
    paddingTop: 5,
    paddingLeft: 5,
  },
  endereco: {
    backgroundColor: '#ffffff',
    marginLeft: '15%',
    width: '70%',
    paddingTop: 5,
    paddingLeft: 5,
  },


});
