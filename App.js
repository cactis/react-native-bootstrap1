/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  Platform,
  StyleSheet,
  Text,
  View, Colors, Alert, TouchableOpacity
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type Props = {};

import {Scene, Router, Stack, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const activeTintColor = '#fff'
const inactiveTintColor = '#666'

class TabIcon extends Component {
  render() {
    var color = this.props.focused ? activeTintColor : inactiveTintColor;
    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon name={this.props.iconName} size={20} color={color} />
      </View>
    );
  }
}

class App extends React.Component {
  render() {
    return  <SafeAreaView style={styles.safeArea}><Router>
    <Scene key="root" showLabel={true}  tabs={true} activeTintColor={activeTintColor} style={{backgroundColor: '#FFCC00' }}>
      <Stack key="home" path="login/:data">
        <Scene
          key="home1"
          onExit={() => console.log('onExit')}
          component={Home}
          title="Home"
          icon={TabIcon}
          iconName="home" />
        <Scene
          key="home2"
          backTitle=""
          component={Home2}
          title="Home"
          icon={TabIcon}
          iconName="home"
          panHandlers={null}
          duration={1}
          />
      </Stack>
        <Scene key="login" component={Login} title="Login" icon={TabIcon} iconName="bell" />
      <Scene key="register" component={Register} title="Register" icon={TabIcon} iconName="user" />
    </Scene>
    </Router>
    </SafeAreaView>
  }
}


class Login extends Component {
  render(){
    return(
      <View/>)
  }
}
class Register extends Component {
  render(){
    return(
      <View/>)
  }
}

class Home2 extends Component {
  render() {
    return(
       <View style={styles.container}>
         <Text>Home 2</Text></View>
      )
  }
}

class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
      To get started, edit App.js
      </Text>
      <Text style={styles.instructions}>
      {instructions}
      </Text>
      <TouchableOpacity onPress={() => Actions.home2({data: "Custom data2", title: "Custom title2"}) }>
      <Text style={styles.button}>Click Me</Text>
      </TouchableOpacity>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FFCC00'
  }
});

export default App;