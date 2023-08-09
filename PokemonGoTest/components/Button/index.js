import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Scan from '../../pages/Scan';
import Result from '../../pages/Result';




const Stack = createNativeStackNavigator();

export default function ButtonScann({ navigation }) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Scan' component={Scan} />
          <Stack.Screen name='Result' component={Result} />
        </Stack.Navigator>
      </NavigationContainer>

      <Button
        title='Scannear QRCODE'
        onPress={() => navigation.navigate('Scan')}
      >
        <Text> SCAN </Text>
      </Button>
    </>
  );
}


