
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button } from 'react-native';
import api from '../../utils/ApiUtils';
import ButtonGoBack from '../../components/Button';


export default function Result({ route, navigation }) {

  const id = route.params.id;

  const [data, setData] = useState();

  useEffect(() => {
    api.get(`/api/v2/pokemon/${id}`).then((response) => {
      setData(response.data);
    }).catch((err) => {
      window.alert(err);
    })
  }, [])

  if (!data)
    return
  <Text>Carregando...</Text>

  const types = data.types.map((item) => item.type.name).join(', ');


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
            <Image style={styles.pokeImage} source={{ uri: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${data.id}.png`, }} />
          </View>

          <View>
            <Text style={styles.pokeName}> Nome: {data.name}</Text>
          </View>

          <View>
            <Text style={styles.pokeType}> Type: {types} </Text>
          </View>

            
        </View>

        <ButtonGoBack
              navigation={navigation}
            />

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
    textAlign: 'left',
    right: 40
  },

  pokeImage: {

    height: 270,
    width: 270,
    backgroundColor: '#1d2357'
  },

  pokeType: {

    fontSize: 23,
    color: 'yellow',
    top: 100,
    right: 40
  },

  background: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'


  }


});

