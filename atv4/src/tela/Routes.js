import Home from "./Home";
import Sobre from "./Sobre";
import IMCApp from "./IMCApp"
import Cadastro from "./Cadastro";

import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const PilhaPrincipal = createStackNavigator()
const PilhaRaiz = createStackNavigator()

import Modal from "../components/Perfil";
import ModalResultadoIMC from "../components/ModalResultadoIMC";

function StackPrincipalTela(){
    return (
        <PilhaPrincipal.Navigator initialRouteName='Home'>
            <PilhaPrincipal.Screen name='Home' component={Home} options={{title: 'Tela inicial', headerStyle:{backgroundColor:'#d508d5'}}}/>
            <PilhaPrincipal.Screen name='Sobre' component={Sobre} options={{headerStyle:{backgroundColor:'#d508d5'}}}/>
            <PilhaPrincipal.Screen name='Cadastro' component={Cadastro} options={{headerStyle:{backgroundColor:'#d508d5'}}}/>
            <PilhaPrincipal.Screen name='Calcular' component={IMCApp} options={{headerStyle:{backgroundColor:'#d508d5'}}}/>
        </PilhaPrincipal.Navigator>
    )
}

function PilhaRaizTela(){
    return(
        <NavigationContainer>
            <PilhaRaiz.Navigator>
                <PilhaRaiz.Screen name='Principal' component={StackPrincipalTela} options={{headerShown: false}}/>
                <PilhaRaiz.Screen name='Perfil' component={Modal} options={{headerShown: false}}/>
                <PilhaRaiz.Screen name='ModalResultadoIMC' component={ModalResultadoIMC} options={{headerShown: false}}/>
            </PilhaRaiz.Navigator>
        </NavigationContainer>
    )
}

export default PilhaRaizTela
