import React, {Component} from "react";
import {View,TextInput, Button} from 'react-native'


export default class Cadastro extends Component{
    constructor(props){
        super(props)
        this.state = {idade:null, nome:null, email: null}
    }
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput
                style={{height:30, width: 300, backgroundColor: "#c1c1c1", marginTop:10 , marginBottom: 5, padding: 20, borderRadius: 5}}
                placeholder="Nome Completo"
                onChangeText={(nome)=> this.setState({nome})}
                >
                </TextInput>

                <TextInput
                style={{height:30, width: 300, backgroundColor: "#c1c1c1", marginTop:10 , marginBottom: 5, padding: 20, borderRadius: 5}}
                placeholder="Idade"
                onChangeText={(idade)=> this.setState({idade})}>
                    
                </TextInput>

                <TextInput
                style={{height:30, width: 300, backgroundColor: "#c1c1c1", marginTop:10 , marginBottom: 5, padding: 20, borderRadius: 5}}
                placeholder="Email de preferência"
                onChangeText={(email)=> this.setState({email})}>
                </TextInput>
                
                <View  style={{marginBottom: 20, marginTop: 10, width: 300}}>
                <Button
                    title='OK'
                    onPress = {() => this.props.navigation.navigate('Perfil',{nome:this.state.nome,idade:this.state.idade,email:this.state.email})}
                />
                </View>    
            </View>
        )
    }}