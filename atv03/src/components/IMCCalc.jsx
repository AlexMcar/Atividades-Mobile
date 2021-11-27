import React from 'react'
import { View, Text } from 'react-native'
import ImcMsg from './IMCMsg'
const CalculadoradeIMC = (props) => {
    
    if (props.peso != null && props.altura != null)
    var imc = props.peso / (props.altura * props.altura) //calculoo
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 24, fontWeight: "600" }}>Seu IMC é: {imc}</Text>
                <ImcMsg imc={imc}></ImcMsg>
            </View>
        )
    return null
}
export default CalculadoradeIMC