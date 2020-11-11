import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native';
import { Label, Input, Item,Form} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

class LoginScreen extends React.Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    return (
      <KeyboardAvoidingView
        // behavior="position"
        style={styles.container}
        >

        <View style={styles.imgContent}>
          <Image source={require('../../assets/mylogo.jpg')} style={styles.imgMain} />
        </View>
        <Form>
         <Item stackedLabel>
              <Label style={{fontWeight: 'bold'}}>Username</Label>
              <Input
              placeholder="Type here" 
              value={this.state.username}
              onChangeText={(text) => this.setState({ username: text })}
              />
            </Item>
        </Form>

        <Form>
            <Item stackedLabel style={{marginVertical: 30,}}>
              <Label style={{fontWeight: 'bold'}}>Password</Label>
              <Input
              placeholder="Type here"
              secureTextEntry={true} 
              value={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
              />
            </Item>
        </Form>

        <TouchableOpacity style={styles.TouchAble}>
          <Text style={styles.txtBtn}>Forget password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
        <LinearGradient 
        style={styles.btn}
        start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 3.0}}
        colors={['#F83545', '#F31A83']}>
          <Text style={styles.txt}>Login</Text>
        </LinearGradient>
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.myTxt}>don't have an account?</Text>
          <TouchableOpacity>
          <Text style={styles.myTxtTwo}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastTxt}>
          <Text>Or login With</Text>
        </View>


        <View style={styles.twoImgs}>
        
         <TouchableOpacity style={styles.smallImg}>
          <Image source={require('../../assets/apple.png')} style={styles.imgStyle} />
          </TouchableOpacity>

         <TouchableOpacity style={styles.smallImg}>
          <Image source={require('../../assets/google.jpg')} style={styles.imgStyle}/>
         </TouchableOpacity>
        
        </View>

      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center'
  },
  txt: {
    fontSize: 22,
    color: '#fff',
    paddingTop: 5
  },
  btn: {
    margin: 15,
    alignItems: 'center',
    height: 40,
    borderRadius: 25
  },
  imgContent: {
    alignItems: 'center',
  },
  imgMain: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  txtBtn: { 
    fontWeight: 'bold'
    },
  myTxt: {
    textAlign: 'center',
    fontSize: 16,
    marginRight: 2
  },
  myTxtTwo: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  TouchAble: {
    alignItems: 'center',
    flexDirection: 'row-reverse', 
    bottom: 25, 
  },
  lastTxt: {
    alignItems: 'center',
    // backgroundColor: 'green',
    marginTop: 30
    },
    imgStyle: {
      height: 23,
      width: 23, 
      borderRadius: 12, 
      marginTop: 10, 
    },
    smallImg: {
      height: 45,
      width: 45,
      borderRadius: 20, 
      alignItems: 'center', 
      backgroundColor: '#f9f9f9'
    },
    twoImgs: {
      flexDirection: 'row', 
      justifyContent: 'space-evenly', 
      marginHorizontal: 100, 
      marginTop: 20
    }
});
