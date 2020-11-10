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
import Bottom from '../components/Bottom';

import Video from 'react-native-video';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WellBeing = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Well Being – </Text>
                <Text style={styles.shortText}>
                    the overall process of hazard identification
        </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    alignSelf: 'center',
                    width: '90%',
                }}>
                <Video
                    source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // Can be a URL or a local file.
                    // Callback when video cannot be loaded
                    style={styles.backgroundVideo}
                    resizeMode="cover"
                    // resizeMode="contain"
                    controls={true}
                    progressUpdateInterval={15}
                />
            </View>

            <View style={styles.bottmbtn}>
                <Bottom
                    onLeftPress={() => navigation.goBack()}
                    onRightPress={() => navigation.navigate('ScreenB')}
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
        justifyContent: 'flex-end',
    },
});
export default WellBeing;
