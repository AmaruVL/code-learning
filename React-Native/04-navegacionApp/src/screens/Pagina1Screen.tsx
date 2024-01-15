import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParamList } from '../navigator/StackNavigator';

type Props = StackScreenProps<RootStackParamList, 'Pagina1Screen'>

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style = {styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Screen</Text>

      <Button
        title='Ir a pagina 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{
        color:'black', 
        marginVertical:20, 
        fontSize:20
        }}
      >
        Navegar con argumentos
      </Text>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          style= {{
            ...styles.botonGrande,
            backgroundColor:'#5856D6'
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
          
        <TouchableOpacity
          style= {{
            ...styles.botonGrande,
            backgroundColor:'#ff9427'
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Text style={styles.botonGrandeTexto} >María</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}
