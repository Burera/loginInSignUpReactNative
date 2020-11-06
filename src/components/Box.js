import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'


import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    StatusBar,
    SafeAreaView,
    SectionList,
    FlatList
} from 'react-native';



const Box = (props) => {
    // const [people, setPeople] = useState([
    //     { name: 'Risk Assessment', key: '1', icon: 'deleteuser' },
    //     { name: 'Working Enviroment', key: '2', icon: 'sync' },
    //     { name: 'Well Being', key: '3', icon: 'barchart' },
    //     { name: 'Digital Skills', key: '4', icon: 'CodeSandbox' },

    // ])


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
        flex: 3,
        backgroundColor: '#F0F0F0',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",

    },
    box1: {


        flexDirection: 'row',
        justifyContent: "center",
        justifyContent: "space-between"
    },
    box2: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 185,
        height: 150,
        backgroundColor: '#fff',
        marginHorizontal: 2,
        marginVertical: 5,
        borderRadius: 10,
        marginLeft: 6
    },
    box3: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 45


    },
    box4: {
        alignSelf: "center",
        fontSize: 18,
        color: "#ff1744",
        paddingBottom: 20,
        fontWeight: "200"
    }



})
export default Box;

