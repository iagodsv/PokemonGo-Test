import {View, StyleSheet, Button, ImageBackground } from 'react-native';

// You can import from local files
import Title from '../../components/Title';
// or any pure javascript modules available in npm

export default function Home({ navigation }) {
  return (
    <>
      <ImageBackground
    source={require('../../assets/pokemon-go-wallpaper.jpg')}
    style = {styles.background}
    >
        <Title />
        {/* <Scan /> */}
        
      <View 
        style = {styles.buttonQR}
      >
        <Button       
        title='Scannear QRCODE'
        onPress={() => navigation.navigate('Scan')}
          />
      </View>

     </ImageBackground>  

    </>
  );
}



const styles = StyleSheet.create({

  background: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    

  },

  title: {

    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 50
  },

  buttonQR: {

      top: 250
  }
  

});

