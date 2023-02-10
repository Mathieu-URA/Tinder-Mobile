import React from "react"
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import  Icon  from "react-native-vector-icons/Fontisto"
import { Context } from "../Context"



export const Signin =({navigation}) => {
    const {me, setMe} = React.useContext(Context)
    
    const initialValues ={
        email:'',password:''
    }
    const [formValues, setFormValues] = React.useState(initialValues)
        
    
    
    const handleSubmit = async ()  => {
        
        try{
        const res = await fetch('http://10.24.43.156:5000/api/auth/signin',{
            method: 'POST',
            headers:{'content-Type': 'application/json'},
            body: JSON.stringify(formValues)
        })
        if(res.ok) {
            const data = await res.json()
            setMe(data.id)
            //navigate ou vous voulez
            navigation.navigate("HomeScreen")
        }
    }catch (err) {
        console.log(err)
    }
    }

    
    return(
        <>
        <View style={styles.container}>

        <Icon name="tinder" size={200} color={"#F63A6E"}>

        </Icon>
        <View>
            
            <TextInput style={styles.input}
        placeholder="Email" onChangeText={text=>setFormValues(prev => ({...prev, email: text}))}>
                
            </TextInput>
        </View>
        <View>
            
            <TextInput style={styles.input}
        placeholder="Password" onChangeText={text=>setFormValues(prev => ({...prev, password: text}))}>
                
            </TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    },
    input: {
      width: 200,
      height: 40,
      padding: 10,
      margin: 10,
      borderColor: '#F63A6E',
      borderWidth: 1,
      borderRadius: 5,
    },
    button: {
      width: '80%',
      height: 40,
      backgroundColor: '#F63A6E',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
    },
  });