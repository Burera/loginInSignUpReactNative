import React, { useState } from 'react'
import {
    View,

    StyleSheet,

    FlatList
} from 'react-native'


import Box from '../components/Box';


const HomeScreen = ({ navigation }) => {
    const people = [
        { name: 'Risk Assessment', key: '1', icon: 'deleteuser' },
        { name: 'Working Enviroment', key: '2', icon: 'sync' },
        { name: 'Well Being', key: '3', icon: 'barchart' },
        { name: 'Digital Skills', key: '4', icon: 'CodeSandbox' },

    ]



    return (
        <View style={styles.container}>

            <FlatList

                numColumns={2}
                data={people}
                renderItem={({ item }) => (

                    <View style={styles.box}>

                        <Box key={item.key} iconn={item.icon} title={item.name} navigation={() => navigation.navigate('SignUp')} />
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
        // alignContent: "center",
        // alignSelf: "center",
        // alignItems: "center",

    }


})
export default HomeScreen;
