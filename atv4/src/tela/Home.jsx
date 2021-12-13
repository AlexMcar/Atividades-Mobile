import React, { Component } from "react";
import { View, Button, Text } from 'react-native';


export default class Home extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <View style={{ margin: 15, width:350}}>
                        <Button title="Cadastrar" onPress={() => this.props.navigation.navigate('Cadastro')} />
                    </View>

                    <View style={{ margin: 15 }}>
                        <Button title="Calcular IMC" onPress={() => this.props.navigation.navigate('Calcular')} />
                    </View>

                    <View style={{ margin: 15 }}>
                        <Button title="Sobre mim" onPress={() => this.props.navigation.navigate('Sobre',{...this.props.route.params})} />
                    </View>
                </View>
            </View>
        )}
}