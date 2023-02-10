import React from "react"
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import  Icon  from "react-native-vector-icons/Fontisto"
import { Context } from "../Context"
import * as ImagePicker from "expo-image-picker"



export const Signup =({navigation}) => {
    const {me, setMe} = React.useContext(Context)
    
    const initialValues ={
        fName:'',email:'',password:'',sexe:'',profilPicture:'',age:'',lattitude:'',longitude:'',distanceMatch:'',ageMatchMin:'',ageMatchMax:'',sexeMatch:''
    }
    const [formValues, setFormValues] = React.useState(initialValues)
        
    
    
    const handleImage = async () => {
        try{
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              base64: true,
            });
        
            console.log(result);
        
            if (!result.canceled) {
                const base64 = result.assets[0].base64;
                const form = new FormData()
        form.append('file', `data:image/png;base64,${base64}`)
        form.append('upload_preset', 'tinder')
        form.append('cloud_name', 'dau29mnll')
        form.append('tags', 'tinder')
        // POST https://api.cloudinary.com/v1_1/demo/image/upload
        fetch('https://api.cloudinary.com/v1_1/dau29mnll/image/upload', {
            method: 'POST',
            body: form
        })
            .then(res => res.json())
            .then(data => { console.log(data); setFormValues(prev => ({...prev,profilPicture:data.secure_url})) })
            .catch(err => console.log(err))
            }
        }catch (error){
            console.error(error)

        }
          


        
    }
    

    const handleSubmit = async  () => {
        
        try{
        const res = await fetch('http://10.24.43.156:5000/api/auth/signup',{
            method: 'POST',
            headers:{'content-Type': 'application/json'},
            body: JSON.stringify(formValues)
        })
        
        if(res.ok) {
            console.log("coucou")
            
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
        <ScrollView >
        <View style={styles.container}>
        <Icon name="tinder" size={200} color={"#F63A6E"}>

        </Icon>
        <View>
            
            <TextInput style={styles.input}
        placeholder="First Name" onChangeText={text=>setFormValues(prev => ({...prev, fName: text}))}>
                
            </TextInput>
        </View>
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
        <View>
            
            <TextInput style={styles.input}
        placeholder="Sexe" onChangeText={text=>setFormValues(prev => ({...prev, sexe: text}))}>
                
            </TextInput>
        </View>
        <View>
            
            
            <TouchableOpacity style={[styles.button, {width:200}]} onPress={handleImage}>
            <Text style={styles.buttonText}>Pick img</Text>
            </TouchableOpacity>
        </View>
        <View>
            
            <TextInput style={styles.input}
        placeholder="Age" onChangeText={text=>setFormValues(prev => ({...prev, age: parseInt(text)}))}>
                
            </TextInput>
        </View>
        <View>
            
            <TextInput style={styles.input}
        placeholder="Lattitude" onChangeText={text=>setFormValues(prev => ({...prev, lattitude: parseFloat(text)}))}>
                
            </TextInput>
        </View>
        <View>
            
            <TextInput style={styles.input}
        placeholder="Longitude" onChangeText={text=>setFormValues(prev => ({...prev, longitude: parseFloat(text)}))}>
                
            </TextInput>
        </View>
        <View>
            
            <TextInput style={styles.input}
        placeholder="Distance des matchs" onChangeText={text=>setFormValues(prev => ({...prev, distanceMatch: parseInt(text)}))}>
                
            </TextInput>
        </View>
        <View>
            
            <TextInput style={styles.input}
        placeholder="Age des matchs minimum" onChangeText={text=>setFormValues(prev => ({...prev, ageMatchMin: parseInt(text)}))}>
                
            </TextInput>
        </View>
        <View>
            
            <TextInput style={styles.input}
        placeholder="Age des matchs maximum" onChangeText={text=>setFormValues(prev => ({...prev, ageMatchMax: parseInt(text)}))}>
                
            </TextInput>
        </View>
        <View>
            
            <TextInput style={styles.input}
        placeholder="Sexe attirance" onChangeText={text=>setFormValues(prev => ({...prev, sexeMatch: text}))}>
                
            </TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:50,
      marginBottom:50,

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