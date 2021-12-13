import React, {Component} from "react";
import {View, Text, TextInput, Button} from 'react-native'
import ImcMsg from "./IMCMsg";

export default class ModalResultadoIMC extends Component{
    
    render(){
        
        if(parseFloat(this.props.route.params.peso)!=null && parseFloat(this.props.route.params.altura)){ //verificar se tem valores nesses inputs
            return(
            <View style={{flex:1 , alignItems:'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 24, padding: 20, fontWeight: 700}}>
                   SEU IMC: {(parseFloat(this.props.route.params.peso)/(parseFloat(this.props.route.params.altura)*parseFloat(this.props.route.params.altura)))}
                </Text>
                <ImcMsg imc={(parseFloat(this.props.route.params.peso)/(parseFloat(this.props.route.params.altura)*parseFloat(this.props.route.params.altura)))}></ImcMsg>
                <View style={{width:300, marginTop: 20}}>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Home"  />
                </View>
            </View>
        );
        }}
}