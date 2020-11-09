import React, { useState } from 'react';
import { CheckBox } from "native-base";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import QuestionData from './QuestionData'

const QuestionList = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const QuestionData = [
        {
            id: 1,
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            id: 2,
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            id: 3,
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            id: 4,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];
    const [showScore, setShowScore] = useState(false)
    // const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        // if (isCorrect) {
        //     setScore(score + 1);
        // }


        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        // console.log(question)
        if (nextQuestion < QuestionData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);

        }
    };

    return (

        <View style={styles.container}>


            {showScore ? (
                <Text >
                    You scored out of {QuestionData.length}
                </Text>
            ) : (
                    <>
                        <Text style={styles.header}>{QuestionData[currentQuestion].questionText}</Text>


                        {QuestionData[currentQuestion].answerOptions.map((option) => (
                            <View style={styles.item} key={option.id}>
                                <TouchableOpacity onPress={handleAnswerOptionClick}



                                >


                                    <Text
                                    >{option.answerText}</Text>
                                </TouchableOpacity>

                            </View>
                        ))}
                        {/* <TouchableOpacity style={styles.submit}>
                            <Text style={{ color: "white" }}>SUBMIT</Text>
                        </TouchableOpacity> */}
                    </>

                )}
        </View>
    )
}


const styles = StyleSheet.create({
    checkoo: {
        backgroundColor: "blue"
    },
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',

    },
    checkBoxTxt: {
        marginLeft: 20,

    },

    header: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#364f6b",
        marginBottom: 40,
        paddingHorizontal: 30,
        justifyContent: 'center',
    },
    item: {
        width: "85%",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        flexDirection: "row",
    },
    checkBoxTxt: {
        marginLeft: 20,

    },
    submit: {
        width: "80%",
        backgroundColor: "#fc5185",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        marginTop: 40
    }

})
export default QuestionList
