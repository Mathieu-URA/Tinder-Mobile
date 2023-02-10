import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';



import HomeScreen from './components/HomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Context } from './Context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
import MatchesScreen from './components/MatchesScreen';
import { Profil } from './components/Profil';
import { Logout } from './components/Logout';
import { Modif } from './components/Modif';

const Tab = createBottomTabNavigator();

const App = () => {
  const [me, setMe] = React.useState(null)
  return (
    <Context.Provider value= {{me,setMe}}>
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
      <Tab.Navigator>
        <>
        {me ? (
          <>
          <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon: () => <Icon name="heart-plus" size={30} color={"#F63A6E"} />, headerShown:false}} />
          <Tab.Screen name="MatchesScreen" component={MatchesScreen} options={{tabBarIcon: () => <Icon name="heart-multiple" size={30} color={"#F63A6E"}/>,headerShown:false}} />
          <Tab.Screen name="Profil" component={Profil} options={{tabBarIcon: () => <Icon name="account" size={30} color={"#F63A6E"}/>,headerShown:false}} />
          <Tab.Screen name="Modif" component={Modif} options={{tabBarIcon: () => <Icon name="account-cog" size={30} color={"#F63A6E"}/>,headerShown:false}} />
          <Tab.Screen name="LogOut" component={Logout} options={{tabBarIcon: () => <Icon name="logout" size={30} color={"#F63A6E"}/>,headerShown:false}} />
          

          </>
        ) : ( 
          <>
          <Tab.Screen name="Signin" component={Signin} options={{tabBarIcon: () => <Icon name="login" size={30} color={"#F63A6E"} />,headerShown:false}} />
          <Tab.Screen name="Signup" component={Signup} options={{tabBarIcon: () => <Icon name="login-variant" size={30} color={"#F63A6E"}/>,headerShown:false}} />
          </>
        )}
        </>
        </Tab.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
    </Context.Provider>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;