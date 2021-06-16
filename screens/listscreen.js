import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Card, Header, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize'
import db from '../config';
export default class Listscreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listID:this.props.navigation.getParam('details')['list_id'],
            listName:'',
            listDescription:''
        }
    }
    getListDetails() {
        db.collection("lists")
          .where("list_id", "==", this.state.listID)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              this.setState({
                listName: doc.data().list_name,
                listDescription: doc.data().description,
              });
            });
          });
        };
        componentDidMount(){
            this.getListDetails()
        }
    render(){
        return(
            <View style = {{flex:1}}>
                 <Header
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="#cece7b"
                onPress={() => this.props.navigation.goBack()}
              />
            }
            centerComponent={{
              text: "List Details",
              style: {
                color: "#cece7b",
                fontSize: RFValue(12),
                fontWeight: "bold",
              },
            }}
            backgroundColor="#8c6cd8"
          />
              <View style={{ flex: 0.7 ,justifyContent:'center',alignItems:'center',marginTop:RFValue(50),borderWidth:1,borderColor:'#deeedd',padding:RFValue(10)}}>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: RFValue(30),
                  color:'#8c6cd8'
                }}
              >
                List Information
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: RFValue(20),
                  marginTop: RFValue(30),
                }}
              >
                Name : {this.state.listName}
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: RFValue(20),
                  marginTop: RFValue(30),
                }}
              >
                Description: {this.state.listDescription}
              </Text>
            </View>
            </View>
        )
    }
} 