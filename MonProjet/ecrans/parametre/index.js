import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

export default function Acceuil({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Parametre</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('Acceuil')} 
        mode="contained"
        style={styles.button}
      >
        <Text style={styles.text1}>Acceuil</Text>
      </Button>
      <View style={styles.container2}>
      <Text>Salut</Text>
      <Text >Salut</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
  },
  text1: {
    color: 'red',
  },
  container2: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius:30,
    borderTopLeftRadius:30,
  },
});
