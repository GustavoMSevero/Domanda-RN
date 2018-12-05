import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {Actions, Scene} from 'react-native-router-flux';

type Props = {};
export default class MenuComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { msg: null , email: null, senha: null};

  }      
  
  
  render() {
    return (
        <Scene tabs
                key="tabsHome"
                showIcon={true}
                panHandlers={null}
                tabBarPosition={'bottom'}
                labelStyle={{color:'black'}}
        >
            <Scene key="agendar"
                    navigatioBarStyle={{backgroundColor: this.componentWillReceiveProps.defaultColor}}
                    titleStyle={{color: Colors.titleColor, textAlign: 'auto', flex: 1}}
                    icon={TabIcon} iconName='Agenda' component={AgendaComponent} title={I18N.AGENDA} />

            <Scene key="procurar"
                    navigatioBarStyle={{backgroundColor: this.componentWillReceiveProps.defaultColor}}
                    titleStyle={{color: Colors.titleColor, textAlign: 'auto', flex: 1}}
                    icon={TabIcon} iconName='Search' component={ProcurarComponent} title={I18N.SEARCH} />

            <Scene key="config"
                    navigatioBarStyle={{backgroundColor: this.componentWillReceiveProps.defaultColor}}
                    titleStyle={{color: Colors.titleColor, textAlign: 'auto', flex: 1}}
                    icon={TabIcon} iconName='Settings' component={AtualizarComponent} title={I18N.SETTINGS} />

        </Scene>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff99',
  },
  
});
