import React from 'react';
import { Container, Content } from 'native-base';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import DigitalSkills from './DigitalSkills';

import Video from 'react-native-video';

import BottomBtn from '../components/BottomBtn';
import ScroolText from '../components/ScroolText';
import Logo from '../components/Logo'
import Roundbtn from '../components/Roundbtn'
import Bottom from '../components/Bottom';

const WellBeing = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Well Being – </Text>
                <Text style={styles.shortText}>
                    the overall process of hazard identification
        </Text>
            </View>
            {/* make a reusable component */}
            <View
                style={styles.imgStyl}>
                <Video
                    source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
                    // Can be a URL or a local file.
                    // Callback when video cannot be loaded

                    style={styles.backgroundVideo}
                    resizeMode="cover"
                    // resizeMode="contain"
                    controls={true}
                    progressUpdateInterval={15}
                />
            </View>
            {/* do not make component for it */}
            <ScroolText />
            <ScrollAbleContainer>
                <AppText>
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
                </AppText>
            </ScrollAbleContainer>
            <View style={styles.bottmbtn}>
                {/* <BottomBtn title="Back" onPress={() => navigation.goBack()} />


                <Roundbtn title="Confirm"></Roundbtn>

                <BottomBtn
                    title="Next"
                    onPress={() => navigation.navigate('DigitalSkills')}
                /> */}
                <Bottom onLeftPress={() => navigation.goBack()}
                    onRightPress={() => navigation.navigate('DigitalSkills'
                    )} />
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
        paddingTop: 5
    },
    imgStyl: {
        flex: 1,
        alignSelf: 'center',
        width: '90%', backgroundColor: 'silver',
        marginVertical: 10,
        borderWidth: 0.5, borderRadius: 20, overflow: 'hidden'
    }
});
export default WellBeing;
