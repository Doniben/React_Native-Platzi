
import React, { Component } from 'react';

import {
    Text,
    Image,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform
} from 'react-native';

import Header from '../../sections/components/header';

export default class Login extends Component {
    state={
        Telefono:"",
        Contraseña:""
    }
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.inputView}>
                    <View style={styles.left}>
                        <Image 
                        style={styles.logoTel}
                        source={require('../../assets/img/phone-2058848.png')}
                        />
                    </View>
                    <View style={styles.right}>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Teléfono'
                            placeholderTextColor= 'rgb(162, 162, 162)'
                            value={this.state.mobileNumber}
                            returnKeyType={'next'}
                            keyboardType={'phone-pad'}
                            onChangeText={(mobileNumber) => this.setState({mobileNumber})}
                        />
                    </View>
                </View>
                <View style={styles.inputView}>
                    <View style={styles.left}>
                        <Image 
                        style={styles.logoTel}
                        source={require('../../assets/img/icon-lock-32.png')}
                        />
                    </View>
                    <View style={styles.right}>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Contraseña' 
                            placeholderTextColor= 'rgb(162, 162, 162)'
                            secureTextEntry= {true}
                            onChangeText = {(text) => this.setState({password: text})}/>
                    </View> 
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>INGRESA</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Olvidé mi contraseña</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerText}>
                    <Text><Text style={styles.registerTextWithout}>No tengo cuenta,  </Text><Text style={styles.registerLink}>REGISTRARME</Text></Text>
                </TouchableOpacity>
            </View>
        )};
    }


const styles = StyleSheet.create({
    loginContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat-Medium',
      marginTop: Platform.select({
          ios: 120,
          android: 10
      })
    },
    inputView:{
        flexDirection: 'row',
        width:"80%",
        borderBottomColor: 'rgb(162, 162, 162)',
        borderBottomWidth: 1,
        marginBottom:10,
        justifyContent: 'flex-start',
        paddingLeft:15,
        alignItems: 'center',
      },
      inputText:{
        height:50,
        color:"white",
        justifyContent: 'center',
      },

      logoTel: {
        width: 30, 
        height: 20,  
        padding: 10,
        paddingBottom: 0,
        resizeMode: 'contain'
      },
      right: {
        paddingLeft: 10,
        alignSelf: 'flex-start',
      },

      forgot:{
        color: 'rgb(162, 162, 162)',
        fontSize:14,
        borderBottomColor: 'rgb(162, 162, 162)',
        borderBottomWidth: 1,
        marginTop: 15,
        width: '80%'
      },

      loginBtn:{
        width:"80%",
        backgroundColor: 'rgb(90, 204, 193)',
        borderRadius: 5,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText: {
        color: 'white'
      },
      registerText: {
          paddingTop: 15,
          fontSize: 13
      },
      registerTextWithout: {
        color: 'rgb(162, 162, 162)'
    },
    registerLink: {
        color: 'white'
    }
  },
);