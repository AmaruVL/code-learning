import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';

type Prop = StackScreenProps<RootStackParamList, 'PersonaScreen'>

export const PersonaScreen = ({route}:Prop) => {

  const params = route.params

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {
          JSON.stringify(params, null, 3)
        }
      </Text>
    </View>
  )
}
