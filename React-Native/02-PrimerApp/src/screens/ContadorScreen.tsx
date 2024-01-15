import React, { useState } from 'react'
import { View,Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {counter}
      </Text>

      <Fab
        title="+1"
        onPress={() => setCounter(counter+1)}
      />

      <Fab
        title="-1"
        position='bl'
        onPress={() => setCounter(counter-1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  title: {
    textAlign:'center',
    color: 'black',
    fontSize: 40,
    top: -15
  },
})