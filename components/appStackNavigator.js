import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from '../screens/homescreen';
import Listscreen from '../screens/listscreen';
const Stack = createStackNavigator();

const StackNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen name = "Homescreen" component = {Homescreen}/>
            <Stack.Screen name = "Listscreen" component = {Listscreen}/>
        </Stack.Navigator>
    )
}
export default StackNavigator;