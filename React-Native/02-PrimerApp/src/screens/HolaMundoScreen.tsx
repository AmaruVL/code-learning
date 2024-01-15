import React from 'react'
import { Text, View } from "react-native"

export const HolaMundoScreen  = () => {
  return (
    <View style={{
      flex:1,
      justifyContent: 'center'
    }}>
      <Text style={{
        fontSize:55,
        color:'black',
        textAlign: 'center'
      }}>
        Hola mundo
      </Text>
    </View>
  )
}
