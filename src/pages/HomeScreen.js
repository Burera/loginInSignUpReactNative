import React, { useState } from 'react';
import ScreenA from './ScreenA'
import ScreenB from './ScreenB'
import ScreenC from './ScreenC'
import ScreenD from './ScreenD'
import {
    View,

    StyleSheet,

    FlatList
} from 'react-native'


import Box from '../components/Box';


const HomeScreen = ({ navigation }) => {
    const people = [
        { name: 'Risk Assessment', key: '1', icon: 'deleteuser', address: 'ScreenA' },
        { name: 'Working Enviroment', key: '2', icon: 'sync', address: 'ScreenB' },
        { name: 'Well Being', key: '3', icon: 'barchart', address: 'ScreenC' },
        { name: 'Digital Skills', key: '4', icon: 'CodeSandbox', address: 'ScreenD' },

    ]



    return (
        <View style={styles.container}>

            <FlatList

                numColumns={2}
                data={people}
                renderItem={({ item }) => (

                    <View style={styles.box}>

                        <Box key={item.key} iconn={item.icon} title={item.name}
                            navigation={() => navigation.navigate(item.address)} />
                    </View>
                )}
                keyExtractor={item => item.key}
            />


        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#F0F0F0',
        justifyContent: "center",

        alignItems: "center",


    },
    box:
    {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 8


    }


})
export default HomeScreen;
