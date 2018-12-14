import
    React, {Component}
    from
        'react';
import {
    Text,
    View
} from 'react-native';
import Icons from "react-native-fontawesome/FontAwesomeIcons";
import FontAwesome from "react-native-fontawesome";

export default class TabIcon extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
/*
        var color = this.props.selected
            ? this.props.activeTintColor //'#3b5998'
            : this.props.inactiveTintColor//'#93a8d5'

        var color = this.props.inactiveTintColor;*/

var color = this.props.focused;
        if(this.props.selected){
            //color = this.props.activeTintColor;
            // topBorder = {borderTopColor:Colors.defaultColor,borderTopWidth: 2}
        }
        return <View style={{flex: 1,width:'100%', flexDirection: 'column', alignItems: 'center', alignSelf: 'center'}}>
            {this.props.focused && <View style={{borderTopColor:'white',borderTopWidth: 2,width:'100%',height:1}}/>}
            <FontAwesome style={{fontSize: 20,color:'black'}}>{Icons[this.props.iconName]}</FontAwesome>
        </View>;
    }
}