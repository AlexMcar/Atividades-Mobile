import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from 'react-native'

export default class Modal extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight:700 }}>
                    Perfil
                </Text>
                <View>
                <Image
                   style={styles_img.container_img}
                    source={{ uri: 'https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc/wp-content/uploads/2021/08/legiao_Y0n3ut2XlbKJ.jpg.jpeg'}}
                />
            </View>
                <Text style={{ fontSize: 18, padding: 5}}>
                    Nome: {this.props.route.params.nome}
                </Text>
                <Text style={{ fontSize: 18, padding: 5 }}>
                    Idade: {this.props.route.params.idade}
                </Text>
                <Text style={{ fontSize: 18, padding: 5, paddingBottom: 15 }}>
                    Email: {this.props.route.params.email}
                </Text>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
            </View>
        );
    }
}
const styles_img = StyleSheet.create({
    container_img: {
        width: 200,
        height: 200,
    },
  });