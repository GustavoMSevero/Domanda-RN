import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux';

import LoginComponent from './src/screens/login';
import CadastroComponent from './src/screens/cadastro';
import AgendaComponent from './src/screens/agenda';
import ProcurarComponent from './src/screens/procurar';
import AtualizarComponent from './src/screens/atualizar';
import SplashComponent from './src/screens/splash';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
}

render() {
    return <Router >
            <Scene >
                <Scene key="login" initial component={LoginComponent} hideNavBar />
                <Scene key="cadastro" component={CadastroComponent} hideNavBar />
                <Scene key="agenda" component={AgendaComponent} hideNavBar />
                <Scene key="procurar" component={ProcurarComponent} hideNavBar />
                <Scene key="atualizar" component={AtualizarComponent} hideNavBar />
                <Scene key="abertura" component={SplashComponent} hideNavBar />
            </Scene>
        </Router>



  }
}

