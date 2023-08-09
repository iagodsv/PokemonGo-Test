import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Title() {
  return (
    <View>
      <Text style={styles.title}>
        Iago Duarte Silveira Valle
      </Text>
    </View>

  );
}


const styles = StyleSheet.create({

  title: {
    color: 'red',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    backgroundColor: 'none',
    fontSize: 20,
    bottom: 250





  }


});