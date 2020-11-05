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

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import PasswordInput from '../components/PasswordInput';

const EmailInput = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    return (
        <View>


            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>

                <FontAwesome name="user-o"
                    color="#05375a"
                    size={20} />
                <TextInput placeholder="Your Email"
                    onChangeText={(val) => textInputChange(val)}
                    style={styles.textInput} />
                {data.check_textInputChange ?

                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather
                            name="check-circle"
                            color="#ff1744"
                            size={20}
                        />
                    </Animatable.View>
                    : null}

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text_footer: {
        color: '#ff1744',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

})

export default EmailInput
