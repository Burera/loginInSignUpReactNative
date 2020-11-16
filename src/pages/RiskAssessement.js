import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Bottom from '../components/Bottom';
import WorkingEnviroment from './WorkingEnviroment';
import { CheckBox } from 'react-native-elements';
import AppText from '../components/AppText';

const ScreenA = (props) => {
    const { navigation } = props;
    const [yes, setYes] = useState(false);

    const YesPresses = () => {
        const changee = !yes;
        setYes(changee);
    };
    return (
        <View style={styles.container}>
            <AppText title="Risk Assessement" shortText="the overall process of hazard identification" />

            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.text}>
                    Determine if existing control measures are adequate or if more should
                    be done. Create awareness of hazards and risk. Determine if existing
                    control measures are adequate or if more should be done. Create
                    awareness of hazards and risk. Determine if existing control measures
                    are adequate or if more should be done. Create awareness of hazards
                    and risk. Determine if existing control measures are adequate or if
                    more should be done. Determine if existing control measures are
                    adequate or if more should be done. Create awareness of hazards and
                    risk. Determine if existing control measures are adequate or if more
                    should be done. Create awareness of hazards and risk. Determine if
                    existing control measures are adequate or if more should be done.
                    Create awareness of hazards and risk. Determine if existing control
                    measures are adequate or if more should be done.
        </Text>
            </ScrollView>
            {/* this should be a reusable component which would recieve checkbox props,  and a label prop for text */}
            <View
                style={{
                    flexDirection: 'row',
                }}>
                <CheckBox
                    onPress={YesPresses}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={yes}
                    checkedColor="#ff1744"
                    uncheckedColor="#bcbcbc"
                />
                <Text
                    style={styles.confirmationText}>
                    I agree terms and Condition
        </Text>
            </View>

            <Bottom
                onLeftPress={() => navigation.goBack()}
                onRightPress={() => navigation.navigate('WorkingEnviroment')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

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
    confirmationText: {
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        left: 45,
        color: 'grey',

    }
});
export default ScreenA;
