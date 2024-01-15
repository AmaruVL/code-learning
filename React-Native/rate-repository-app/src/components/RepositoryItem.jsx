import { View, StyleSheet, Image, Platform} from 'react-native'
import { theme } from '../theme'
import { RepositoryStats } from './RepositoryStats'
import { StyledText } from './StyledText'

const RepositoryItemHeader = (props) => (
  <View style={{flexDirection:'row', paddingBottom: 2}}>
    <View style={{paddingRight : 10}}>
      <Image style={styles.image} source={{uri: props.ownerAvatarUrl}}/>
    </View>
    <View style={{flexGrow:1, paddingRight:30}}>
      <StyledText fontWeight='bold'>{props.fullName}</StyledText>
      <StyledText color='secondary'>{props.description}</StyledText>
      <StyledText style={styles.language}>{props.language}</StyledText>
    </View>
  </View>
)

export const RepositoryItem = (props) => {
  return (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props}/>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    // backgroundColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    marginVertical: 4,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  image:{
    width: 48,
    height: 48,
    borderRadius: 4,
  }
})

