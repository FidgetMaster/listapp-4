import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class Homescreen extends Component {
  constructor() {
    super();
    this.state = {
      addedLists: [],
    };
    this.requestRef = null;
  }

  getaddedLists = () => {
    this.requestRef = db
      .collection("lists")
      .onSnapshot((snapshot) => {
        var addedLists = snapshot.docs.map((doc) => doc.data());
        this.setState({
          addedLists: addedLists,
        });
      });
  };

  componentDidMount() {
    this.getaddedLists();
  }

  componentWillUnmount() {
  this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.list_name}
        subtitle={item.description}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <TouchableOpacity
            style={styles.button}
            onPress = {()=>{this.props.navigation.navigate('Listscreen',{details:item})}}
          >
            <Text style={{ color:'#cece7b' }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
        <SafeAreaProvider>
      <View style={styles.view}>
        <MyHeader title="Lists" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          {this.state.addedLists.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20}}>Find All Lists Here</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.addedLists}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8c6cd8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  view:{
    flex: 1,
    backgroundColor: "#fff"
  }
});
