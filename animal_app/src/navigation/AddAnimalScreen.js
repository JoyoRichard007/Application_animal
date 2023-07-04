import { StyleSheet, Text, View } from 'react-native'
import Formulaire from '../components/Formulaire'

const AddAnimalScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Formulaire/>
    </View>
  )
}

export default AddAnimalScreen

const styles = StyleSheet.create({})