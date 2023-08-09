import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// or any pure javascript modules available in npm

import Scan from './pages/Scan';
import Home from './pages/Home';
import Routes from './routes/index';
import Result from './pages/Result';

export default function App() {

  return (
    <>
      <Routes />

    </>
  );
}


const styles = StyleSheet.create({


});

