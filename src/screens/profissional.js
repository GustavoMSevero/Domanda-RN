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
export default class ProfissionalComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { 
      msg: null , email: null, senha: null, cidade: null, tipo: null, opcao: null,
      estabelecimento: null, idestabelecimento: null, idunidade: null, idprofissional: null, 
      profissional: null,
    }

  }

//watchID: ?number = null

componentDidMount(){
    var id = this.props.idunidade;
    //alert('id unidade '+id)
    this.getProfissional();
}


async loadData(){
  AsyncStorage.getItem("usuario").then((data)=>{
      //console.log(data);
    });
}

getProfissional(){
    var idunidade = this.props.idunidade;
    var urlLoginUsuario = endpoint.backendUrl + '/api/admin_estabelecimento/reqProfissionalJson.php?idunidade='+idunidade;
    fetch(urlLoginUsuario,{ method: 'GET'})
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
          this.setState({profissional: responseJson});
          
        })
        .catch((error) => {
        console.error(error);
        
        });
}
  
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList data={this.state.profissional} keyExtractor={this._keyExtractor}

            ListEmptyComponent={()=>{return <View style={{marginTop:50}}>
                {this.state.profissional && this.state.profissional.length ==0 && 
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
                <TouchableOpacity onPress={()=> false }>
                  {/* <Text > {item.idprofissional} </Text> */}
                  <Text style={styles.nome}> {item.nome} </Text>
                  <Text style={styles.funcao}> {item.funcao} </Text>
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
  nome: {
    backgroundColor: '#ffffff',
    marginLeft: '15%',
    width: '70%',
    marginTop: 10,
    paddingTop: 5,
    paddingLeft: 5,
  },
  funcao: {
    backgroundColor: '#ffffff',
    marginLeft: '15%',
    width: '70%',
    paddingTop: 5,
    paddingLeft: 5,
  },
  

});
