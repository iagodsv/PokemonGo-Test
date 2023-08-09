import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

// You can import from local files

// or any pure javascript modules available in npm

export default function Scan({ navigation }) {

  const [userPermission, setUserPermission] = useState(null);
  const [scanned, setScanned] = useState(false);



  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setUserPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();

  }, []);

  const handleBarCodeScanned = ({ type, data }) => {

    setScanned(true);
    alert(`O codigo de barra é do tipo ${type} e o dado ${data} foram escaneados!`);
  };

  if (userPermission === null) {
    return <Text> Requisição para permissão da câmera</Text>;
  }
  if (userPermission === false) {
    return <Text>Sem acesso a câmera</Text>;
  }






  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanObject}
      />
      {scanned && <Button title={'Escanear novamente'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },


});

