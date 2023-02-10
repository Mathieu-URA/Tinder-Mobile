import React, { useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './TinderCard';

import AnimatedStack from './AnimatedStack';
import { Context } from '../Context';




const HomeScreen = () => {

  const [profilValues, setprofilValues] = React.useState([{}])

  const [nextProfil, setnextProfil] = React.useState(0)

  const {me, setMe} = React.useContext(Context)

  useEffect( ()  => {

    
         fetch(`http://10.24.43.156:5000/api/accueil/match/${me}`,{
            method: 'GET'
        }).then(res => res.json()).then(data => {setprofilValues(data.response), console.log(data)} )
        .catch(error => console.error(error))

        
    

    
  },[]);

  const onSwipeLeft = user => {
    console.warn('swipe left', user.fName);
    setnextProfil( prev => ++prev )
  };

  const onSwipeRight = user => {
    console.warn('swipe right: ', user.fName);

    fetch(`http://10.24.43.156:5000/api/match/like/${me}`,{
                method: 'POST',
                headers:{'content-Type': 'application/json'},
                body: JSON.stringify({_id:profilValues[nextProfil]._id})
           })
      setnextProfil( prev => ++prev )
  };

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={profilValues}
        renderItem={({item}) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;
