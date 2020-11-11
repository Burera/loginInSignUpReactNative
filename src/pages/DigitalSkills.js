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
import WorkingEnviroment from './WorkingEnviroment'


const DigitalSkills = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Risk assessment – </Text>
                <Text style={styles.shortText}>
                    the overall process of hazard identification
                </Text>
            </View>
            <View><Text style={{
                justifyContent: 'center', alignSelf:
                    'center', alignContent: 'center'
            }}>All Data Display here</Text></View>


            <View
                style={styles.bottmbtn}>
                <Bottom onLeftPress={() => navigation.goBack()}
                    onRightPress={() => navigation.navigate('WorkingEnviroment')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 0,
        paddingVertical: 0,
    },
    backgroundVideo: {
        flex: 1,
        marginTop: 30,
        borderRadius: 20,
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
        marginHorizontal: 20,
    },
    shortText: {
        color: '#bcbcbc',
        fontWeight: '100',
        marginHorizontal: 20,
    },
    bottmbtn: {
        justifyContent: 'flex-end',
        flex: 1
    },

});
export default DigitalSkills;
