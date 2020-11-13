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
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },

            ],

        },
        {

            id: 2,
            question: `What is the capital of India?`,
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },

            ],

        },
        {
            id: 3,
            question: `What is the capital of Australia?`,
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },

            ],

        },
        {
            id: 4,
            question: `What is the capital of Turkey?`,
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },

            ],

        },
        {
            id: 5,
            question: `What is the capital of Syria?`,
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },

            ],

        },
        {
            id: 6,
            question: `What is the capital of Australia?`,
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },

            ],

        },
        {
            id: 7,
            question: `What is the capital of Turkey?`,
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },

            ],

        },
        {
            id: 8,
            question: `What is the capital of Syria?`,
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },

            ],

        },
        ,
        {
            id: 9,
            question: `What is the capital of Syria?`,
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },

            ],

        },
        ,
        {
            id: 10,
            question: `What is the capital of Syria?`,
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },

            ],

        },
    ]
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(setCurrentQuestion);
    const [score, setScore] = useState(0);
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            console.log(score)
        }
        console.log("score")
        // if (List.length ) {
        //     setCurrentQuestion(nextQuestion);
        // } else {
        //     setShowScore(true);
        // }


    };

    return (
        <View>
            {
                list.map((l) => (
                    <ListItem key={l.id} containerStyle={{ paddingTop: 0 }}>

                        <ListItem.Content>
                            <ListItem.Title> {l.id} : {l.question}</ListItem.Title>
                            {l.answerOptions.map((h) => (
                                // <Text>{h.answerText}</Text>
                                <CheckBoxbtn title={h.answerText} />
                            ))}



                        </ListItem.Content>
                    </ListItem>
                ))
            }

        </View>
    )
}

export default Quiz
