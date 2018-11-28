import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux';

import LoginComponent from './src/screens/login';
import CadastroComponent from './src/screens/cadastro';
import PrincipalComponent from './src/screens/principal';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
}

render() {
    return <Router >
            <Scene >
                <Scene key="login" initial component={LoginComponent} hideNavBar />
                <Scene key="cadastro" component={CadastroComponent} />
                <Scene key="principal" component={PrincipalComponent} hideNavBar/>
            </Scene>
        </Router>



  }
}

