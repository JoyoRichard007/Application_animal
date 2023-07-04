import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>Liste animals</Text>
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