import { Button, StyleSheet, Text, View } from 'react-native'
import Animals from '../components/Animals';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Animals navigation={navigation} />
        <Button
            title="Ajouter"
            onPress={() => navigation.navigate('Formulaire')}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });