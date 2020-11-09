import React from 'react';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Bottom from '../components/Bottom';
import ScreenB from './ScreenB'


const ScreenA = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Risk assessment – </Text>
                <Text style={styles.shortText}>
                    the overall process of hazard identification
                </Text>
            </View>


            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.text}>
                    Determine if existing control measures are adequate or if more
                    should be done. Create awareness of hazards and risk. Determine if
                    existing control measures are adequate or if more should be done.
                    Create awareness of hazards and risk. Determine if existing control
                    measures are adequate or if more should be done. Create awareness of
                    hazards and risk. Determine if existing control measures are
                    adequate or if more should be done.
                    Determine if existing control measures are adequate or if more
                    should be done. Create awareness of hazards and risk. Determine if
                    existing control measures are adequate or if more should be done.
                    Create awareness of hazards and risk. Determine if existing control
                    measures are adequate or if more should be done. Create awareness of
                    hazards and risk. Determine if existing control measures are
                    adequate or if more should be done.
                   </Text>
            </ScrollView>
            <View
                style={styles.bottmbtn}>
                <Bottom onLeftPress={() => navigation.goBack()} onRightPress={() => navigation.navigate('ScreenB')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginVertical: 0,
        paddingVertical: 0


    },
    scrollView: {
        marginTop: 20,
        marginHorizontal: 20,



    },
    text: {
        fontSize: 18,
        color: 'grey',
        lineHeight: 30,

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
        marginHorizontal: 20
    },
    bottmbtn: {



    }
});
export default ScreenA;
