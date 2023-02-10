import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Button, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Context } from "../Context.jsx";

export const Modif = ({navigation}) => {
  const { me, setMe } = React.useContext(Context);
  const [myProfil, setmyProfil] = React.useState([{}]);
  const [formValues, setFormValues] = React.useState()

  useEffect(() => {
    fetch(`http://10.24.43.156:5000/api/auth/profile/${me}`,{
               method: 'GET'
           }).then(res => res.json())
           .then(data => {setmyProfil(data.response)})
           .catch((error) => console.error(error));

           

  }, []);

  const handleSubmit = () => {
            
    fetch(`http://10.24.43.156:5000/api/configuration/config/${me}`,{
            method: 'POST',
            headers:{'content-Type': 'application/json'},
            body: JSON.stringify(formValues)
        })
        .then(res => res.json())
        .then(data => console.log(data))
      .catch((error) => console.error(error));
      
      navigation.navigate("Profil")
    }

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 24, color: "#F63A6E", marginLeft: 70 }}>My Profil</Text>
        <View style={styles.users}>
          <View style={styles.user}>
            <Image source={{ uri: myProfil.profilPicture }} style={styles.image} />
            
            <TextInput style={{ color: "#F63A6E", fontWeight: "bold", marginTop: 10, marginBottom: 10, textAlign: "center" , borderWidth:1 , padding:10 ,borderColor:'#F63A6E' }} placeholder={myProfil.fName} onChangeText={text=>setFormValues(prev => ({...prev, fName: text}))}></TextInput>
          </View>
        </View>
        
        <TextInput style={{ color: "#F63A6E", marginTop: 50, marginBottom: 10, textAlign: "center", borderWidth:1 , padding:10 ,borderColor:'#F63A6E'  }} placeholder={myProfil.age?.toString()} onChangeText={text=>setFormValues(prev => ({...prev, age: text}))}></TextInput>
        
        <TextInput style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" , borderWidth:1 , padding:10 ,borderColor:'#F63A6E' }} placeholder={myProfil.sexe} onChangeText={text=>setFormValues(prev => ({...prev, sexe: text}))}></TextInput>
        
        <TextInput style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" , borderWidth:1 , padding:10 ,borderColor:'#F63A6E' }} placeholder={myProfil.email} onChangeText={text=>setFormValues(prev => ({...prev, email: text}))}></TextInput>
        <TextInput style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" , borderWidth:1 , padding:10 ,borderColor:'#F63A6E'  }} placeholder={myProfil.lattitude?.toString()} onChangeText={text=>setFormValues(prev => ({...prev, lattitude: text}))}></TextInput>
        <TextInput style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" , borderWidth:1 , padding:10 ,borderColor:'#F63A6E'  }} placeholder={myProfil.longitude?.toString()} onChangeText={text=>setFormValues(prev => ({...prev, longitude: text}))}></TextInput>
        <TextInput style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" , borderWidth:1 , padding:10 ,borderColor:'#F63A6E' }} placeholder={myProfil.distanceMatch?.toString()} onChangeText={text=>setFormValues(prev => ({...prev, distanceMatch: text}))}></TextInput>
        <TextInput style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" , borderWidth:1 , padding:10 ,borderColor:'#F63A6E' }} placeholder={myProfil.ageMatchMin?.toString()} onChangeText={text=>setFormValues(prev => ({...prev, ageMatchMin: text}))}></TextInput>
        <TextInput style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" , borderWidth:1 , padding:10 ,borderColor:'#F63A6E' }} placeholder={myProfil.ageMatchMax?.toString()} onChangeText={text=>setFormValues(prev => ({...prev, ageMatchMax: text}))}></TextInput>
        <TextInput style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" , borderWidth:1 , padding:10 ,borderColor:'#F63A6E' }} placeholder={myProfil.sexeMatch} onChangeText={text=>setFormValues(prev => ({...prev, sexeMatch: text}))}></TextInput>
        
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Modif</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,

    alignItems: "center",
  },
  container: {borderWidth:2 , borderColor:'#D8D6D5', 
padding: 20 , marginTop:60 , width:300},
  users: {
    marginLeft: 25,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  user: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 50,

    borderWidth: 2,
    padding: 3,
    borderColor: "#F63A6E",
    marginLeft: 50 ,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#F63A6E',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
    marginLeft:30,
  },
  buttonText: {
    color: 'white',
  },
});
