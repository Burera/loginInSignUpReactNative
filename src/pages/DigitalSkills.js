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


    }
});
export default DigitalSkills;
