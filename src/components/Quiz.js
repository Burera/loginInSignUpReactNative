import { CardItem } from 'native-base';
import React, { useState } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

import { ListItem, CheckBox, Card } from 'react-native-elements';


const Quiz = () => {
    const questions = [
        {
            id: 1,
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'yes', isCorrect: true, checked: false },
                { answerText: 'No', isCorrect: false, checked: false },
            ],
        },
        {
            id: 2,
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'No', isCorrect: false, checked: false },
                { answerText: 'yes', isCorrect: true, checked: false },
            ],
        },
        {
            id: 3,
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'No', isCorrect: false, checked: false },
                { answerText: 'yes', isCorrect: true, checked: false },
            ],
        },
        {
            id: 4,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: 'No', isCorrect: false, checked: false },
                { answerText: 'yes', isCorrect: true, checked: false },
            ],
        },
        {
            id: 5,
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'yes', isCorrect: true, checked: false },
                { answerText: 'No', isCorrect: false, checked: false },
            ],
        },
        {
            id: 6,
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'No', isCorrect: false, checked: false },
                { answerText: 'yes', isCorrect: true, checked: false },
            ],
        },
        {
            id: 7,
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'No', isCorrect: false, checked: false },
                { answerText: 'yes', isCorrect: true, checked: false },
            ],
        },
        {
            id: 8,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: 'No', isCorrect: false, checked: false },
                { answerText: 'yes', isCorrect: true, checked: false },
            ],
        },
        {
            id: 9,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: 'No', isCorrect: false, checked: false },
                { answerText: 'yes', isCorrect: true, checked: false },
            ],
        },
        {
            id: 10,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: 'No', isCorrect: false, checked: false },
                { answerText: 'yes', isCorrect: true, checked: false },
            ],
        },
    ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [checked, setChecked] = useState()

    const handleAnswerOptionClick = (isCorrect) => {
        const colorcheck = !checked
        // setChecked(colorcheck)
        setChecked(colorcheck)
        if (isCorrect) {
            setScore(score + 1);


        }

        const nextQuestion = questions.length;

        console.log(currentQuestion)
        if (currentQuestion < nextQuestion) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };


    return (
        <View>
            {showScore ? (
                <Text>
                    You scored {score} out of {questions.length}
                </Text>
            ) : (
                    <View style={{ flex: 1 }} >
                        {questions.map((l) => (
                            <ListItem key={l.id} containerStyle={{ paddingTop: 0 }}>
                                <ListItem.Content >
                                    <ListItem.Title>
                                        {' '}
                                        {l.id} : {l.questionText}
                                    </ListItem.Title>
                                    {questions[0].answerOptions.map((answerOption) => (
                                        <ListItem.Subtitle
                                        >

                                            <Text
                                            ><View style={{ flexDirection: 'row' }}>

                                                    <CheckBox
                                                        containerStyle={{
                                                            backgroundColor: '#fff',

                                                        }}
                                                        center
                                                        title={answerOption.answerText}
                                                        checkedIcon='dot-circle-o'
                                                        uncheckedIcon='circle-o'
                                                        checked={answerOption.checked}
                                                        checkedColor="#ff1744"
                                                        uncheckedColor="#ff1744"
                                                        onPress
                                                        ={() =>
                                                            handleAnswerOptionClick
                                                                (answerOption.isCorrect)
                                                        }
                                                    />

                                                </View></Text>

                                        </ListItem.Subtitle>

                                    ))}
                                </ListItem.Content>
                            </ListItem>
                        ))}
                    </View>
                )
            }
        </View >
    );
};

export default Quiz;
