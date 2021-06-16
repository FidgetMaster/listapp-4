import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class Formscreen extends Component{
    constructor(){
        super();
        this.state ={
          listName:"",
          description:""
        }
      }
    
      createUniqueId(){
        return Math.random().toString(36).substring(7);
      }
    
    
    
      addList =(listName,description)=>{
        var userId = this.state.userId
        var randomListId = this.createUniqueId()
        db.collection('lists').add({
            "list_name":listName,
            "description":description,
            "list_id"  : randomListId,
        })
    
        this.setState({
            listName :'',
            description : ''
        })
    
        return Alert.alert("List Added Successfully")
      }
    
    
  render(){
    return(
        <SafeAreaProvider>
        <View style={{flex:1}}>
          <MyHeader title="Add List" navigation ={this.props.navigation}/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"List Name"}
                onChangeText={(text)=>{
                    this.setState({
                        listName:text
                    })
                }}
                value={this.state.listName}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"Description"}
                onChangeText ={(text)=>{
                    this.setState({
                        description:text
                    })
                }}
                value ={this.state.description}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addList(this.state.listName,this.state.description)}}
                >
                <Text style = {{fontSize:15,fontFamily:'Arial',color:'#cece7b'}}>Request</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
        </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#8c6cd8',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#8c6cd8",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)