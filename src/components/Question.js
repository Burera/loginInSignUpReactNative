// import React, { useState } from 'react';
// import { CheckBox } from "native-base";
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// const Question = () => {
//     const [question, setQuestion] = useState(0)

//     return (

//         <View style={styles.container}>
//             <Text style={styles.header}>What's your favorite programming language?</Text>

//             <View style={styles.item} >
//                 <CheckBox checked={question === 1} color="#fc5185" onPress={() => setQuestion(1)} />
//                 <Text style={
//                     {
//                         ...styles.checkBoxTxt,
//                         color: question === 1 ? "#fc5185" : "gray",
//                         fontWeight: question === 1 ? "bold" : "normal"
//                     }}
//                 >Python</Text>
//             </View>
//             <TouchableOpacity style={styles.submit}>
//                 <Text style={{ color: "white" }}>SUBMIT</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F0F0F0',
//         alignItems: 'center',
//         justifyContent: 'center',

//     },

//     header: {
//         fontSize: 25,
//         fontWeight: "bold",
//         color: "#364f6b",
//         marginBottom: 40,
//         paddingHorizontal: 20,
//         justifyContent: 'center',
//     },
//     item: {
//         width: "80%",
//         backgroundColor: "#fff",
//         borderRadius: 20,
//         padding: 10,
//         marginBottom: 10,
//         flexDirection: "row",
//     },
//     checkBoxTxt: {
//         marginLeft: 20,

//     },
//     submit: {
//         width: "80%",
//         backgroundColor: "#fc5185",
//         borderRadius: 20,
//         padding: 10,
//         alignItems: "center",
//         marginTop: 40
//     }

// })
// export default Question

import React, { useState } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function Question() {
    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <Text className='app'>
            {showScore ? (
                <Text className='score-section'>
                    You scored {score} out of {questions.length}
                </Text>
            ) : (
                    <>
                        <Text className='question-section'>
                            <Text className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </Text>
                            <Text className='question-text'>{questions[currentQuestion].questionText}</Text>
                        </Text>
                        <Text className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </Text>
                    </>
                )}
        </Text>
    );
}

