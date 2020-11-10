import React, { useState } from 'react';
import RiskAssessement from './RiskAssessement'
import ScreenB from './ScreenB'
import WellBeing from './WellBeing'
import DigitalSkills from './DigitalSkills'
import {
    View,

    StyleSheet,

    FlatList
} from 'react-native'


import Box from '../components/Box';


const HomeScreen = ({ navigation }) => {
    const people = [
        { name: 'Risk Assessment', key: '1', icon: 'deleteuser', address: 'RiskAssessement' },
        { name: 'Working Enviroment', key: '2', icon: 'sync', address: 'ScreenB' },
        { name: 'Well Being', key: '3', icon: 'barchart', address: 'WellBeing' },
        { name: 'Digital Skills', key: '4', icon: 'CodeSandbox', address: 'DigitalSkills' },

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
