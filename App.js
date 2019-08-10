import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SplashScreen from './src/splash/component/splash.js';

export default class App extends Component{

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  
  render(){
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      <View style={styles.container}>
        <Text>Hello la info del proyect in </Text>
        <Text style={styles.link}>
        https://whatdidilearn.info/2019/01/13/how-to-implement-a-splash-screen-in-react-native.html
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link:{
    color:'#0984e3',
    paddingTop:'10%',
    paddingHorizontal:'5%',
    textAlign:'center'
  }
});
