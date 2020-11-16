import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
} from 'react-native';
import SignIn from './SignIn';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import PasswordInput from '../components/PasswordInput';
import EmailInput from '../components/EmailInput';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

const SignUp = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>SignUp</Text>
                <Text style={styles.text_header_two}>
                    Hi there! Nice to see you again.
        </Text>
            </View>
            <View style={styles.footer}>
                <EmailInput />
                <PasswordInput pass="Password" />

                <PasswordInput pass="Confirm Password" />
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        By signing up you agree to our
          </Text>
                    <Text
                        style={[
                            styles.color_textPrivate,
                            { fontWeight: 'bold', color: '#ff1744' },
                        ]}>
                        {' '}
            Terms of service
          </Text>
                    <Text style={styles.color_textPrivate}> and</Text>
                    <Text
                        style={[
                            styles.color_textPrivate,
                            { fontWeight: 'bold', color: '#ff1744' },
                        ]}>
                        {' '}
            Privacy policy
          </Text>
                </View>

                <View style={styles.button}>
                    <LinearGradient colors={['#ff1744', '#ff1744']} style={styles.signIn}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.sign}>SignUp</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <TouchableOpacity style={styles.forget}>
                        <Text style={styles.forget_password}>Have an Account ?</Text>
                        <Text
                            style={styles.forget_signUp}
                            onPress={() => navigation.navigate('SignIn')}>
                            SignIn
            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        // flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 10,

        marginTop: responsiveHeight(10),
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        height: responsiveHeight(70),
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    text_header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_header_two: {
        color: '#bcbcbc',
        fontWeight: '100',
        fontSize: 20,
    },
    text_footer: {
        color: '#ff1744',
        fontSize: 18,
    },
    text_footer_two: {
        color: '#ff1744',
        fontSize: 18,
        marginTop: 20,
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    sign: {
        color: '#fff',
        fontSize: 18,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    or: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 15,
        color: '#bcbcbc',
    },
    forget: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    forget_password: {
        color: '#bcbcbc',
        marginTop: 2,
        fontSize: 15,
    },
    forget_signUp: {
        paddingHorizontal: 10,
        fontSize: 17,
        color: '#ff1744',
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    color_textPrivate: {
        color: '#bcbcbc',
    },
});

export default SignUp;
