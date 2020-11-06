import React, { useState } from 'react'
import {
    View,

    StyleSheet,

    FlatList
} from 'react-native'


import Box from '../components/Box';


const SplashScreen = ({ navigation }) => {
    const people = [
        { name: 'Risk Assessment', key: '1', icon: 'deleteuser' },
        { name: 'Working Enviroment', key: '2', icon: 'sync' },
        { name: 'Well Being', key: '3', icon: 'barchart' },
        { name: 'Digital Skills', key: '4', icon: 'CodeSandbox' },

    ]



    return (
        <View style={styles.container}>
            {/* <Box></Box> */}
            <FlatList

                numColumns={2}
                data={people}
                renderItem={({ item }) => (

                    <View style={styles.box}>

                        <Box key={item.key} iconn={item.icon} title={item.name}></Box>
                    </View>
                )}
                keyExtractor={item => item.key}
            />


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
        paddingTop: 170

    },
    box:
    {
        alignContent: "center",
        alignSelf: "center",
        alignItems: "center",

    }


})
export default SplashScreen;
