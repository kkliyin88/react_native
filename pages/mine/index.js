import React from 'react';
import {
  View,
  Text,
} from 'react-native';
export default class Mine extends React.Component{
    render(){
        return (
           <View style={{flex:1,justifyContent:'center',alignItems:"center",backgroundColor:'green'}}>
               <Text>
                   我的
               </Text>
           </View> 
        )
    }
};