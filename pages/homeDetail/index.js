
import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
export default class HomeDetail extends React.Component{
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:"center",backgroundColor:'blue'}}>
               <Text>
                   详情页
               </Text>
               <Button 
               onPress={()=>{this.goback()}}
               title='返回' color="#841584" 
                />
           </View> 
        )
    }
    goback(){
        this.props.navigation.pop();  
    }
};