import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

interface RouterParams {
  id:number,
  nombre:string,
}

export type RootStackParamList = {
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: RouterParams,
}

const RootStack = createStackNavigator<RootStackParamList>()

export const StackNavigator = () => {
  return (
    <RootStack.Navigator 
      initialRouteName='Pagina1Screen'
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <RootStack.Screen name="Pagina1Screen" options={{title: 'Página 1'}} component={Pagina1Screen} />
      <RootStack.Screen name="Pagina2Screen" options={{title: 'Página 2'}} component={Pagina2Screen} />
      <RootStack.Screen name="Pagina3Screen" options={{title: 'Página 3'}} component={Pagina3Screen} />
      <RootStack.Screen name="PersonaScreen" options={{title: 'Persona'}} component={PersonaScreen} />
    </RootStack.Navigator>
  );
}