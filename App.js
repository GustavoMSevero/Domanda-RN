import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux';

import LoginComponent from './src/screens/login';
import CadastroComponent from './src/screens/cadastro';
import AgendaComponent from './src/screens/agenda';
import ProcurarComponent from './src/screens/procurar';
import AtualizarComponent from './src/screens/atualizar';
import SplashComponent from './src/screens/splash';
import TabIcon from './src/components/tabicon';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
}

render() {
    return <Router >
            <Scene >
                <Scene type="reset" key="login" initial component={LoginComponent} hideNavBar />
                <Scene tabs
                       hideNavBar
                       key="tabsHome"
                       showIcon={true}
                       activeTintColor='blue'
                       panHandlers={null}
                       tabBarPosition={'bottom'}
                       labelStyle={{color:'black'}}

                >
                    <Scene key="agenda" icon={TabIcon} iconName='calendarO' component={AgendaComponent} title={'Agenda'} />
                    <Scene key="procurar" icon={TabIcon} iconName='search' component={ProcurarComponent} title={'Procurar'} />
                    <Scene key="atualizar" icon={TabIcon} iconName='cog' component={AtualizarComponent} title={'Atualizar'} />
                </Scene>
            </Scene>
        </Router>



  }
}

