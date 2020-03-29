import React, { Component } from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform
} from 'react-native';

export default class Howto extends Component {
    render() {   
        return (
            <View style={styles.howToContainer}>
                <View>
                    <Text style={styles.textVideo}>
                        En el siguiente video te informaremos cómo
                        usar la aplicación y cómo entre todos podemos
                        contribuir y sobresalir de la amenaza del COVID-19
                    </Text>
                </View>
                <View>
                    <Image
                        style={styles.imageVideo}
                        source={require('../../assets/img/yt_player.png')}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.button}>
                        <Text>
                            IMFORMACIÓN
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>
                            SALTAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}
    }

const styles = StyleSheet.create({
    howToContainer: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
        marginTop: Platform.select({
            ios: 120,
            android: 15
        }),
        alignSelf: 'center'
    },
    textVideo: {
        fontSize: 16,
        color: 'rgb(162, 162, 162)',
        textAlign: 'center'
    },
    imageVideo: {
        resizeMode: "contain",
        width: 300,
        alignSelf: 'center',
        height: Platform.select({
            ios:350,
            android:220
        })

    }
        
})