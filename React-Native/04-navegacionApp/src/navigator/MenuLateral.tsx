import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export type RootDrawerParamList = {
  StackNavigator: undefined,
  SettingsScreen: undefined
}

const Drawer = createDrawerNavigator();
// const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const MenuLateral = () => {

  const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerContent={ (props) => <MenuInterno {...props}/>}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent': 'front',
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={()=>navigation.navigate('StackNavigator')}
        >
          <Text style={styles.menuTexto}>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={()=>navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}