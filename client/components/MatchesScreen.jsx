import React, { useEffect } from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import { Context } from '../Context.jsx';




const MatchesScreen = () => {

  const {me, setMe} = React.useContext(Context)
  const [profilValues, setprofilValues] = React.useState([{}])

  useEffect( ()  => {

       

   
         fetch(`http://10.24.43.156:5000/api/accueil/match/${me}`,{
            method: 'GET'
        }).then(res => res.json()).then(data => {setprofilValues(data.response), console.log(data)} )
        .catch(error => console.error(error))

        
    
        
    

    
  },[]);





  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 24, color: '#F63A6E', marginTop:40}}>
          New Matches
        </Text>
        <View style={styles.users}>
          {profilValues.map(user => (
            <View style={styles.user} key={user._id}>
              <Image source={{uri: user.profilPicture}} style={styles.image} />
              <Text style={{color:'#F63A6E',fontWeight: 'bold', marginTop:10, marginBottom:10, textAlign:'center'}}>{user.fName}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,

    borderWidth: 2,
    padding: 3,
    borderColor: '#F63A6E',
    marginTop:10, marginBottom:30,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    
    
  },
});

export default MatchesScreen;