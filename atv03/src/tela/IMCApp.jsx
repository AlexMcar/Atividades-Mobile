import React, {Component} from "react";
import {View, Text, TextInput, Button} from 'react-native'
import CalculadoradeIMC from "../components/IMCCalc";




export default class IMCApp extends Component{

    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, apertou:false}
    }
    acaoBotao = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({apertou:true})
        }
    }
    IMC(){
        if(this.state.apertou)  // verificando se é true
        {
           
            return(
                <View>
                    <CalculadoradeIMC altura={this.state.altura} peso={this.state.peso}> </CalculadoradeIMC>
                    {console.log("entrou no if do IMC" + this.state.apertou)}
                </View>
                )
        }   
        return null
    }
    render(){
        return(
            <View>
                <Text style={{fontSize: 20, fontWeight: "600"}}>Calculadora de IMC</Text>
                <TextInput
                style={{height:30, backgroundColor: "#c1c1c1", marginTop:20, borderRadius: 5}}
                placeholder="Digite a sua altura"
                onChangeText={(altura)=> this.setState({altura})}
                >
                </TextInput>
                <TextInput
                style={{height:30, backgroundColor: "#c1c1c1", marginTop:20, borderRadius: 5}}
                placeholder="Digite o seu peso"
                onChangeText={(peso)=> this.setState({peso})}>
                </TextInput>
                <View  style={{marginBottom: 20, marginTop: 10}}>
                <Button
                    title='Calcular'
                    onPress={this.acaoBotao} 
                />
                </View>    
              
            {this.IMC()}
            
            </View>
        )
    }


}