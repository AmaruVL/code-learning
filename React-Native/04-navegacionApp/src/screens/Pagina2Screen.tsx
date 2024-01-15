import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../navigator/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<RootStackParamList>

export const Pagina2Screen = () => {

  const navigator = useNavigation<NavigationProps>()

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina 2 Screen</Text>

      <Button
        title='Ir pagina 3'
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  )
}
