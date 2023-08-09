import React from "react"
import {Text, View, StyleSheet, ImageBackground} from "react-native"



export default function Background(){
  return(
    <ImageBackground
    source={require('../../assets/pokemon-go-wallpaper.jpg')}
    style = {styles.background}
    />
  );
}


const styles = StyleSheet.create({

    background: {

      flex: 1,
      justifyContent:'center',
      alignItems: 'center'


    }


});