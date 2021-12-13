import React, {Component} from "react";
import {View, Text} from 'react-native';

export default class Sobre extends Component{

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:30, fontWeight: 700, marginBottom: 15}}> SOBRE MIM</Text>
                <View >
                <Text style={{fontSize:20}}>BLÁ BLÁ BLÁ BLÁ BLÁ...</Text>
            
                </View>
            </View>
        )
    }
}