import React from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';

const Card = ({user}) => {
  
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: user.profilPicture,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{user.fName}</Text>
          <Text style={styles.bio}>{user.age}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fefefe',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});

export default Card;