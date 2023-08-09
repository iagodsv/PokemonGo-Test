import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


// You can import from local files
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../pages/Home/index';
import Result from '../pages/Result/index';
import Scan from '../pages/Scan/index';



const Stack = createNativeStackNavigator();

export default function Routes() {

  return (
    <NavigationContainer
      headerTransparent='true'>
      <Stack.Navigator
        screenOptions={{ header: () => <></> }}
        initialRouteName='Home'
      >
        <Stack.Screen options={{ headerTransparent: 'true', title: '', headerShow: 'false' }} name='Home' component={Home} />
        <Stack.Screen name='Scan' component={Scan} />
        <Stack.Screen name='Result' component={Result} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}