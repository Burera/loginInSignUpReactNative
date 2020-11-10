

import React from 'react';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';

import Logo from '../components/Logo'
import BottomBtn from './BottomBtn';






const Bottom = (props) => {
    const { onLeftPress, onRightPress } = props;
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: 'center'
        }}>

            <BottomBtn title="Back" onPress={onLeftPress}
            />
            <Logo />
            <BottomBtn title="Next" onPress={onRightPress} />
        </View>
    )
}

const styles = StyleSheet.create({



})
export default Bottom

