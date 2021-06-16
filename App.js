import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Homescreen from './screens/homescreen';
import Formscreen from './screens/formscreen';
import { StackNavigator } from './components/appStackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-reanimated';
const Tab = createMaterialBottomTabNavigator();
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
      <StackNavigator/>
      </NavigationContainer>
  )
}
const TabNavigator = ()=>{
  return(
    <Tab.Navigator labeled = {false} barStyle = {styles.bottomTabStyle}
    screenOptions = {({route})=>({
      tabBarIcon:({focused,color})=>{
        let iconName;
        if(route.name === "Homescreen"){
          iconName = focused?"home":"home-outline"
        }
        else if(route.name === "Formscreen"){
          iconName = focused?"create":"create-outline"
        }
        return(
          <Ionicons name = {iconName} size = {RFValue(15)} color = {color} style = {{width:RFValue(15),height:RFValue(15)}}/>
        )
      }
    })}
    activeColor={"#cece7b"}
      inactiveColor={"white"}>
      <Tab.Screen name = "Homescreen" component = {Homescreen}/>
      <Tab.Screen name = "Formscreen" component = {Formscreen}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  bottomTabStyle:{
    backgroundColor:"#8c6cd8",
    height:"8%",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    overflow:'hidden',
    position:"absolute"
  }
})


