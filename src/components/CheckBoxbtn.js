import { CardItem } from 'native-base';
import React, { useState } from 'react';

import { Text, View, Image, Button, StyleSheet } from 'react-native';

import { CheckBox, Card } from 'react-native-elements';

const CheckBoxbtn = (props) => {
    // const [yes, setYes] = useState(false);
    // const [no, setNo] = useState(false);
    // const [option, setOption] = useState('');



    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>

            <View
                style={{
                    flexDirection: 'row',


                }}>

                <CheckBox

                    onPress={props.onPress}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={props.checked}
                    checkedColor="#ff1744"
                    uncheckedColor="#bcbcbc"
                />
                <Text
                    style={{

                        flex: 1,
                        alignSelf: 'center',
                        position: 'absolute',
                        left: 45,
                        color: '#364f6b'


                    }}>
                    {props.title}
                </Text>
            </View>
            {/* <View style={{ flexDirection: 'row' }}>
                <CheckBox

                    onPress={NoPresses}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={no}
                    checkedColor="#ff1744"
                    uncheckedColor="#bcbcbc"
                />
                <Text
                    style={{
                        flex: 1,
                        alignSelf: 'center',
                        position: 'absolute',
                        left: 47,
                        color: '#364f6b'

                    }}>
                    No
        </Text>
            </View> */}
        </View>
    );
};

export default CheckBoxbtn;
