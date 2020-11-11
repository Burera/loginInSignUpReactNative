import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,

} from 'react-native'

import HomeScreen from './HomeScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import PasswordInput from '../components/PasswordInput';
import EmailInput from '../components/EmailInput';
import Logo from '../components/Logo';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


const SignIn = ({ navigation }) => {


    return (

        <KeyboardAwareScrollView style={styles.container}>

            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <View style={styles.imgoo}>

                    <Logo />
                </View>
                <Text style={[styles.text_header, { fontFamily: "Montserrat-SemiBold" }]}>SignIn</Text>
                <Text style={styles.text_header_two}>Hi there! Nice to see you again.</Text>
            </View>
            <View style={styles.footer}>

                <EmailInput />

                <PasswordInput pass="Password" />

                <View style={styles.button}>

                    <LinearGradient
                        colors={['#ff1744', '#ff1744']}
                        style={styles.signIn}
                    >
                        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
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



        </KeyboardAwareScrollView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        paddingVertical: 10

    },
    imgoo: {


        paddingVertical: 25
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,

        paddingVertical: 10,
        paddingBottom: 20




    },
    footer: {
        flex: 1,

        // height: responsiveHeight(80), // 50% of window height

        paddingHorizontal: 20,
        paddingVertical: 20



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

    button: {
        alignItems: 'center',
        marginVertical: 10
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
        paddingVertical: 4

    },
    forget_password: {
        color: '#bcbcbc',
        marginTop: 2,
        fontSize: 15
    },
    forget_signUp: {
        paddingHorizontal: 10,
        fontSize: 17,
        color: "#ff1744",

    }

});


export default SignIn
