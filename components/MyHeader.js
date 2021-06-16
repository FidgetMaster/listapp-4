import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const MyHeader = props => {
  return (
    <Header
      centerComponent={{ text: props.title, style: { color: '#cece7b', fontSize:RFValue(12),fontWeight:"bold", fontFamily:'Arial',} }}
      backgroundColor = "#8c6cd8"
    />
  );
};

export default MyHeader;