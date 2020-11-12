import { CardItem } from 'native-base';
import React, { useState } from 'react'
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';

import { ListItem, CheckBox, Card } from 'react-native-elements';
import CheckBoxbtn from './CheckBoxbtn';



const Quiz = () => {

    const list = [
        {
            id: 1,
            question: `What is the capital of Nigeria?`,

        },
        {

            id: 2,
            question: `What is the capital of India?`,

        },
        {
            id: 3,
            question: `What is the capital of Australia?`,

        },
        {
            id: 4,
            question: `What is the capital of Turkey?`,

        },
        {
            id: 5,
            question: `What is the capital of Syria?`,

        },
        {
            id: 6,
            question: `What is the capital of Australia?`,

        },
        {
            id: 7,
            question: `What is the capital of Turkey?`,

        },
        {
            id: 8,
            question: `What is the capital of Syria?`,

        },
        ,
        {
            id: 9,
            question: `What is the capital of Syria?`,

        },
        ,
        {
            id: 10,
            question: `What is the capital of Syria?`,

        },
    ]

    return (
        <View>
            {
                list.map((l) => (
                    <ListItem key={l.id} containerStyle={{ paddingTop: 0 }}>

                        <ListItem.Content>
                            <ListItem.Title> {l.id} : {l.question}</ListItem.Title>
                            <Text>
                                <CheckBoxbtn />

                            </Text>
                        </ListItem.Content>
                    </ListItem>
                ))
            }

        </View>
    )
}

export default Quiz
