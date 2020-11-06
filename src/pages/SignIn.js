import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native'

import SplashScreen from './SplashScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import PasswordInput from '../components/PasswordInput';
import EmailInput from '../components/EmailInput';
import Logo from '../components/Logo'


const SignIn = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* <StatusBar barStyle="dark-content" backgroundColor="#bcbcbc" style={{ color: "black" }} /> */}
            <View style={styles.header}>
                <Logo></Logo>
                <Text style={[styles.text_header, { fontFamily: "Montserrat-SemiBold" }]}>SignIn</Text>
                <Text style={styles.text_header_two}>Hi there! Nice to see you again.</Text>
            </View>
            <View style={styles.footer}>

                <EmailInput></EmailInput>

                <PasswordInput pass="Password"></PasswordInput>

                <View style={styles.button}>
                    <LinearGradient
                        colors={['#ff1744', '#ff1744']}
                        style={styles.signIn}
                    >
                        <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
                            <Text style={styles.sign} >SignIn</Text>
                        </TouchableOpacity>


                    </LinearGradient>
                    <Text style={styles.or}>or</Text>
                    <TouchableOpacity style={styles.forget}>
                        <Text style={styles.forget_password}>Forgot password?</Text>
                        <Text style={styles.forget_signUp} onPress={() => navigation.navigate('SignUp')}>SignUp</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        paddingTop: 45

    },
    header: {

        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 40,
        // paddingVertical: 30,




    },
    footer: {
        // flex: 1,


        paddingHorizontal: 20,



    },

    text_header: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 30,

    },
    text_header_two: {
        color: '#bcbcbc',
        fontWeight: "100",
        fontSize: 20
    },
    text_footer: {
        color: '#ff1744',
        fontSize: 18
    },
    text_footer_two: {
        color: '#ff1744',
        fontSize: 18,
        marginTop: 40
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    },
    sign: {
        color: '#fff',
        fontSize: 18,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    or: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 20,
        color: '#bcbcbc'
    },
    forget:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 8

    },
    forget_password: {
        color: '#bcbcbc',
        marginTop: 2,
        fontSize: 15
    },
    forget_signUp: {
        paddingHorizontal: 10,
        fontSize: 17,
        color: "#ff1744"
    }

});


export default SignIn
