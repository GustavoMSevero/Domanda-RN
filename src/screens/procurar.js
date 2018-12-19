import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Geocoder from 'react-native-geocoding';

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
    this.state = { msg: null , email: null, senha: null, cidade: null}

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
  console.log(this.state.cidade);
  alert(this.state.cidade)
}
      
  
  
  render() {
    return (
      <View style={styles.container}>
        <View>
        <TextInput style={styles.campoCidade}
            placeholder="Cidade"
            onChangeText={texto => this.state.cidade = texto }
          />
        </View>
        <View backgroundColor="#ffe066" style={styles.btnProcurar}>
          <Button onPress={() => this.procurar()} title="Procurar" color="#f7921a"/>
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
  btnProcurar: {
    width: '85%',
    marginLeft: 20,
    marginTop: 10,
  }

});
