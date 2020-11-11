import React, { useState } from 'react';

import { Text, View, Image, Button, StyleSheet } from 'react-native';

import { CheckBox } from 'react-native-elements';

const CheckBoxbtn = () => {
    const [yes, setYes] = useState(false);
    const [no, setNo] = useState(false);
    const [option, setOption] = useState('');

    const YesPresses = () => {
        const changee = !yes;
        setYes(changee);
    };

    const NoPresses = () => {
        const changeNo = !no;
        setNo(changeNo);
    };
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
                style={{
                    flexDirection: 'row',

                    justifyContent: 'space-evenly',
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
                    style={{
                        alignSelf: 'center',
                        flex: 1,
                        padding: 0,
                    }}>
                    Yes
        </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    containerStyle={{ paddingHorizontal: 10 }}
                    onPress={NoPresses}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={no}
                    checkedColor="#ff1744"
                    uncheckedColor="#bcbcbc"
                />
                <Text
                    style={{
                        alignSelf: 'center',
                        flex: 1,
                        padding: 0,
                    }}>
                    No
        </Text>
            </View>
        </View>
    );
};

export default CheckBoxbtn;
