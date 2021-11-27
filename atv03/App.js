import React from 'react';
import { View} from 'react-native';
import IMCApp from './src/tela/IMCApp';

export default function App() {

    return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <View> <IMCApp></IMCApp>  </View> 
    </View>
  );
}

