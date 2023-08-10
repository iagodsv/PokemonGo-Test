import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function ButtonGoBack({ navigation }) {
  return (
    <View
      style={styles.goBack}>
      <TouchableOpacity
        title=' '
        onPress={() => navigation.navigate('Home')}
        style={styles.goBackButton}
      >
        <FontAwesome style={styles.icon} name="home" size={35} color="black" />
      </TouchableOpacity>
    </View>


  );
}


const styles = StyleSheet.create({


  goBack: {
    top: 150,
    zIndex: 1
  },

  goBackButton: {

    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    width: 40

  },

  icon: {
    textAlign: 'center',

  }




});