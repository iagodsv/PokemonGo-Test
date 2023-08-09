

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import api from '../../utils/ApiUtils';

// You can import from local files



// or any pure javascript modules available in npm

export default function Result({ navigation }) {



  const [data, setData] = useState();


  useEffect(() => {
    api.get(`/api/v2/pokemon/24`).then((response) => {
      console.log('response', response);
      setData(response.data);
    }).catch((err) => {
      window.alert(err);
    })
  }, [])

  console.log(data);
  if (!data)
    return
  <Text>Carregando...</Text>


  return (
    <>
      <ImageBackground
        source={require('../../assets/pokemon-go-wallpaper.jpg')}
        style={styles.background}
      >
        <View style={styles.pokeStyle} >
          <View>
            <Text style={styles.pokeId}> ID: {data.id}</Text>
          </View>

          <View>
            <Image style={styles.pokeImage} source={{ uri: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/24.png`, }} />
          </View>

          <View>
            <Text style={styles.pokeName}> Nome: {data.name}</Text>
          </View>

          <View>
            <Text style={styles.pokeType}> Type: {data.type} </Text>
          </View>
        </View>

      </ImageBackground>


    </>
  );
}

const styles = StyleSheet.create({

  pokeStyle: {



  },

  pokeId: {
    fontSize: 23,
    bottom: 100,
    color: 'yellow',
    textAlign: 'center'
  },

  pokeName: {

    fontSize: 23,
    color: 'yellow',
    top: 90,
    textAlign: 'left'
  },

  pokeImage: {

    height: 270,
    width: 270,
    backgroundColor: '#1d2357'
  },

  pokeType: {

    fontSize: 23,
    color: 'yellow',
    top: 100
  },

  background: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'


  }


});

