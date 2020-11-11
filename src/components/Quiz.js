import React, { useState } from 'react'
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';

import { ListItem, CheckBox } from 'react-native-elements';
import CheckBoxbtn from './CheckBoxbtn';



const Quiz = () => {
    const [checked, setChecked] = useState(false)
    const list = [
        {

            question: `What is the capital of Nigeria?`,

        },
        {

            question: `What is the capital of India?`,

        },
        {

            question: `What is the capital of Australia?`,

        },
        {

            question: `What is the capital of Turkey?`,

        },
        {

            question: `What is the capital of Syria?`,

        },
        {

            question: `What is the capital of Australia?`,

        },
        {

            question: `What is the capital of Turkey?`,

        },
        {

            question: `What is the capital of Syria?`,

        },
    ]

    return (
        <View>
            {
                list.map((l, i) => (
                    <ListItem key={i} bottomDivider>

                        <ListItem.Content>
                            <ListItem.Title>{l.question}</ListItem.Title>
                            <ListItem.Subtitle>
                                <CheckBoxbtn></CheckBoxbtn>

                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
}

export default Quiz
