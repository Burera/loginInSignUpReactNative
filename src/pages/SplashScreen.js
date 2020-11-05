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
import Box from '../components/Box';


const SplashScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Box></Box>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        // alignSelf: "center"
    },
    box: {
        backgroundColor: "#ff1744",

        width: "40%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginLeft: 20


    }

})
export default SplashScreen;
