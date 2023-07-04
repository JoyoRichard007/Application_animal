import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import styled, { css } from "styled-components/native"

const DATA = [
  {
    id: 'ANI-MASC-0001',
    name: 'Coq',
    type: 'Carnivore',
    couleur: '#FF0000',
    photo: 'https://i.pinimg.com/236x/5c/69/3c/5c693c0f289168292b37be4ce35f2de2.jpg'
  },
  {
    id: 'ANI-MASC-0002',
    name: 'Chien',
    type: 'Carnivore',
    couleur: '#FF0000',
    photo: 'https://www.leparisien.fr/resizer/mtyH_ZTbgSlgjP81wWXhAfWtyD0=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/Q6MTNENGOZGU3BR5OUEO2GNMOI.jpg'
  }
];

const Item = ({item}) => (
    <Card bgColor={item?.couleur}>
        <Flex>
            <PhotoContainer>
                <Photo source={{uri: item?.photo}} />
            </PhotoContainer>
            <TitleContainer>
                <Title>{item.name}</Title>
            </TitleContainer>
            <View>
                <Type>{item.type}</Type>
            </View>
        </Flex>
    </Card>
);

const Animals = () => {
    
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const Card = styled.View`
    padding: 10px;
    margin: 5px 10px;
    border-radius: 10px;
    border-color: gray;
    border-width: 1px;
    background-color: white;

    ${({bgColor}) => bgColor && css`
        border-bottom-width: 5px;
        border-bottom-color: ${bgColor};
    `}
`

const Flex = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

const PhotoContainer = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 40px;
`
const Photo = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`

const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    width: 100%;
`

const TitleContainer = styled.View`
    flex: 1 1 0;
`

const Type = styled.Text`
    font-size: 16px;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borde: "black solid 1px",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
  },
});

export default Animals;