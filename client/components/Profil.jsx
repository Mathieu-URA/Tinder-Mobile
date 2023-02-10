import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Button, TouchableOpacity } from "react-native";
import { Context } from "../Context.jsx";

export const Profil = ({navigation}) => {
  const { me, setMe } = React.useContext(Context);
  const [myProfil, setmyProfil] = React.useState([{}]);

  useEffect(() => {
    fetch(`http://10.24.43.156:5000/api/auth/profile/${me}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setmyProfil(data.response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 24, color: "#F63A6E", marginLeft: 35 }}>My Profil</Text>
        <View style={styles.users}>
          <View style={styles.user}>
            <Image source={{ uri: myProfil.profilPicture }} style={styles.image} />
            <Text style={{ color: "#F63A6E", fontWeight: "bold", marginTop: 10, marginBottom: 10, textAlign: "center" }}>{myProfil.fName}</Text>
          </View>
        </View>
        <Text style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" }}>{myProfil.age}</Text>
        <Text style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" }}>{myProfil.sexe}</Text>
        <Text style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" }}>{myProfil.email}</Text>
        <Text style={{ color: "#F63A6E", marginTop: 10, marginBottom: 10, textAlign: "center" }}>{myProfil?.matchs?.length} Matchs</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Modif")}>
        <Text style={styles.buttonText}>Modif Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,

    alignItems: "center",
  },
  container: {borderWidth:2 , borderColor:'#F63A6E', 
  padding: 20, marginTop:90},
  users: {
    marginLeft: 16,
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
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: '#F63A6E',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
    marginLeft:35,
  },
  buttonText: {
    color: 'white',
  },
});
