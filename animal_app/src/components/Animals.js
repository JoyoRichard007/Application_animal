import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { useSelector } from "react-redux"
import styled, { css } from "styled-components/native"
import { getAnimals } from '../store/animal/selectors';


const Item = ({item}) => {

  return (
    <Card bgColor={item?.couleur}>
        <Flex>
            <PhotoContainer>
                <Photo source={{uri: item?.photoUrl}} />
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
}

const Animals = () => {
  const animals = useSelector(getAnimals)

  useEffect(() => {
    console.log(animals)
  }, [animals])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={animals}
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