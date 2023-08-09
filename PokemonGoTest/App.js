import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// or any pure javascript modules available in npm

import Scan from './pages/Scan';
import Home from './pages/Home';
import Routes from './routes/index';
import Result from './pages/Result';

export default function App() {

  // const [pokemons, setPokemons] = useState([])

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon', {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setPokemons(data.results)
  //     })
  // }, [])


  return (
    <>
      <Routes />

    </>
  );
}


const styles = StyleSheet.create({


});

