import { StyleSheet, TextInput, Button, View } from 'react-native'
import { useState } from 'react';
import styled from "styled-components/native"

const Formulaire = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [couleur, setCouleur] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

  
    const handleSubmit = () => {
      // Effectuez ici les opérations que vous souhaitez effectuer avec les données du formulaire, par exemple envoyer les données à un serveur
      console.log('Name:', name);
      console.log('Email:', type);
      console.log('Message:', couleur);
      console.log('photoUrl', photoUrl)
    };
  
    return (
      <View style={styles.container}>
        <View>
            <Label>Nom</Label>
            <TextInput
                style={styles.input}
                placeholder="vitsika"
                value={name}
                onChangeText={text => setName(text)}
            />
        </View>
        <View>
            <Label>Type</Label>
            <TextInput
                style={styles.input}
                placeholder="biby kely"
                value={type}
                onChangeText={text => setType(text)}
            />
        </View>
        <View>
            <Label>Couleur</Label>
            <TextInput
                style={styles.input}
                placeholder="couleur"
                value={couleur}
                onChangeText={text => setCouleur(text)}
                multiline
            />
        </View>
        <View>
            <Label>Image (url seulement)</Label>
            <TextInput
                style={styles.input}
                placeholder="https://url"
                value={photoUrl}
                onChangeText={text => setPhotoUrl(text)}
                multiline
            />
        </View>
        
        
        
        <Button title="Envoyer" disabled={
            !(
                name?.length > 2
                && type?.length > 2
                && couleur?.length > 4
                && photoUrl?.length > 25
            )
        }onPress={handleSubmit} />
      </View>
    );
  };
  
export default Formulaire

const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
`

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      width: "100%"
    },
    input: {
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
  });