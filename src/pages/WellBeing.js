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
                // progressUpdateInterval={15}
                />
            </View>
            <ScroolText />
            <View style={styles.bottmbtn}>
                <BottomBtn title="Back" onPress={() => navigation.goBack()} />
                <BottomBtn title="Confirm" />
                <BottomBtn
                    title="Next"
                    onPress={() => navigation.navigate('DigitalSkills')}
                />
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
        flexDirection: 'row',

        justifyContent: 'space-around',
    },
    imgStyl: {
        flex: 1,
        alignSelf: 'center',
        width: '90%',
        marginVertical: 10
    }
});
export default WellBeing;
