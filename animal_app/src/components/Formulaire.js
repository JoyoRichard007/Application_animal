import { StyleSheet, TextInput, Picker, Image, Button, Text, View } from 'react-native'
import { useEffect, useState } from 'react';
import styled from "styled-components/native"
import RNPickerSelect from "react-native-picker-select";
import { useDispatch } from "react-redux"
import { changeAnimalAction, createAnimalAction } from '../store/animal/actions';

const Formulaire = ({ navigation, animal }) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(animal?.name ?? '');
    const [type, setType] = useState(animal?.type ?? '');
    const [couleur, setCouleur] = useState(animal?.couleur ?? '');
    const [photoUrl, setPhotoUrl] = useState(animal?.photoUrl ?? 'https://')


    useEffect(() => {
        const dieze = couleur[0] === "#"

        if(!dieze && couleur?.length >= 0) {
            setCouleur("#")
        }
    }, [couleur])
    useEffect(() => {
        if(photoUrl?.length < 8) {
            setPhotoUrl('http://')
        }
    }, [photoUrl])
  
    const handleSubmit = () => {
      // Effectuez ici les opérations que vous souhaitez effectuer avec les données du formulaire, par exemple envoyer les données à un serveur
        console.log({
            name,
            type,
            couleur,
            photoUrl
        })
      if(animal) {
        dispatch(changeAnimalAction(
            animal.id,
            {
                name,
                type,
                couleur,
                photoUrl
            }
        ))
    } else {
      dispatch(createAnimalAction({
        name,
        type,
        couleur,
        photoUrl
      }))
    }
      navigation.navigate('Acceuil')
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
            <Label>Couleur</Label>
            <TextInput
                style={styles.input}
                placeholder="couleur"
                value={couleur}
                onChangeText={text => setCouleur(text)}
            />
        </View>
        <View>
            <Label>Image (url seulement)</Label>
            <Flex>
            <PhotoPreviewContainer>
                <Image source={{uri: photoUrl}} />
            </PhotoPreviewContainer>
            <ImageInput>
                <TextInput
                    style={styles.input}
                    placeholder="https://url"
                    value={photoUrl}
                    onChangeText={text => setPhotoUrl(text)}
                    multiline
                />
            </ImageInput>   
            </Flex> 
        </View>
        <View>
            <Label>Type</Label>
            <RNPickerSelect
                placeholder={{
                    label: 'Choisir un type d\'animal',
                    value: null,
                }}
                onValueChange={(value) => setType(value)}
                items={[
                    { label: "Carnivore", value: "carnivore" },
                    { label: "Herbivore", value: "herbivore" },
                    { label: "Omnivore", value: "Omnivore" },
                ]}
            />
        </View>
        <Button title={`${animal ? "Modifier" : "Ajouter"}`} disabled={
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

const Flex = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`

const ImageInput = styled.View`
  flex: 1 1 0;
`

const PhotoPreviewContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: gray;
`

const PhotoPreview = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
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