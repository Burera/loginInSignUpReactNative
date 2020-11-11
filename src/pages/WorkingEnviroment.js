
import React from 'react';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Bottom from '../components/Bottom';

import Quiz from '../components/Quiz';

const ScreenB = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Working Enviroment– </Text>
                <Text style={styles.shortText}>
                    the overall process of hazard identification
                </Text>
            </View>
            <ScrollView >

                <Quiz></Quiz>
            </ScrollView>
            <View style={styles.bottomBtn}>

                <Bottom onLeftPress={() => navigation.goBack()} onRightPress={() => navigation.navigate('WellBeing')}></Bottom>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    bottomBtn: {
        justifyContent: 'flex-end'
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#364f6b',
        marginTop: 30,
        justifyContent: 'center',
        marginHorizontal: 20
    },
    shortText: {
        color: '#bcbcbc',
        fontWeight: '100',
        marginHorizontal: 20,
        paddingBottom: 10
    }


})
export default ScreenB
