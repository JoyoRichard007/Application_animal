import { StyleSheet, Text, View } from 'react-native'
import Formulaire from '../components/Formulaire'

const AddAnimalScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Formulaire navigation={navigation} />
    </View>
  )
}

export default AddAnimalScreen

const styles = StyleSheet.create({})