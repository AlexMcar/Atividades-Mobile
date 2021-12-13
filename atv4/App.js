import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PilhaRaizTela from './src/tela/Routes';
export default function App() {
    return (
      <SafeAreaProvider>
        <PilhaRaizTela></PilhaRaizTela>
      </SafeAreaProvider>
  );
}

