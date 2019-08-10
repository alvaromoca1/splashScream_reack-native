import React,{Component} from 'react';
import{StyleSheet,View,Text} from 'react-native';

class SplashScreen extends Component {
    render() {
      return (
        <View style={style.viewStyles}>
          <Text style={style.textStyles}>
            Splash Screen
          </Text>
        </View>
      );
    }
  }
  const style = StyleSheet.create({
        viewStyles:{
            backgroundColor:'orange',
            flex:1,
            alignContent:'center',
            justifyContent:'center',
            alignItems:'center',
        },
        textStyles:{
            color:'white',
            fontSize:40,
            fontWeight:'bold'
        }
  });
  export default SplashScreen;
  