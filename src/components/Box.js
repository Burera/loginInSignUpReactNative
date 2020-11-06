import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'


import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";



const Box = (props) => {


    return (
        <View style={styles.container}>
            <View style={styles.box1}>


                <View style={styles.box2} >
                    <Text style={styles.box3}>
                        <Icon name={props.iconn} color="#ff1744" size={40} >

                        </Icon>
                    </Text>
                    <Text style={styles.box4}>{props.title}</Text>
                </View>




            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#F0F0F0',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",

    },
    box1: {



        justifyContent: "center",
        justifyContent: "space-around"

    },
    box2: {


        height: responsiveHeight(25), // 50% of window height
        width: responsiveWidth(45),
        backgroundColor: '#fff',


        borderRadius: 10,

        justifyContent: "space-around"
    },
    box3: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 45


    },
    box4: {
        alignSelf: "center",
        fontSize: 15,
        color: "#ff1744",
        paddingBottom: 20,
        fontWeight: "200"
    }



})
export default Box;

