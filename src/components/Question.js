import React, { Component } from 'react'
import { QuizData } from './QuestionData'
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet,

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class Question extends Component {

    state = {
        userAnswer: null,    //current users answer
        currentIndex: 0,  //current questions index
        options: [],       //the four options
        quizEnd: false, //True if it's the last question
        score: 0,      //the Score
        disabled: true,
    }
    //Component that holds the current quiz
    loadQuiz = () => {
        const { currentIndex } = this.state //get the current index
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                options: QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer
            }
        }
        )
    }
    nextQuestionHander = () => {
        const { userAnswer, answer, score } = this.state
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })

        //Check for correct answer and increment score
        if (userAnswer === answer) {
            this.setState({
                score: score + 1
            })
        }
    }
    //Load the quiz once the component mounts
    componentDidMount() {
        this.loadQuiz();
    }
    componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state;
        if (this.state.currentIndex !== prevState.currentIndex) {
            this.setState(() => {
                return {
                    disabled: true,
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer
                }
            });

        }
    }
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }
    finishHandler = () => {
        if (this.state.currentIndex === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }

    }
    render() {
        const { question, options, currentIndex, userAnswer, quizEnd } = this.state;
        if (quizEnd) {
            return (
                <View>

                    <Text>your input data are</Text>
                    <Text>
                        {QuizData.map((item, index) => (
                            <Text style={styles.options}
                                key={index}>
                                {item.answer}
                            </Text>
                        ))}
                    </Text>
                </View>
            )
        }

        return (
            <View>
                <Text>{question}</Text>

                {options.map(option => (  //for each option, new paragraph
                    <TouchableOpacity key={option.id}
                        style={`options ${userAnswer === option ? selected : null}`}
                        onClick={() => this.checkAnswer(option)}>

                        <Text>
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
                {currentIndex < QuizData.length - 1 &&
                    // Next button only displays if the above is true
                    <TouchableOpacity

                        disabled={this.state.disabled}
                        onClick={this.nextQuestionHander}
                    ><Text>Next Question</Text></TouchableOpacity>
                }
                {currentIndex === QuizData.length - 1 &&
                    <TouchableOpacity


                        disabled={this.state.disabled}
                        onClick={this.finishHandler}
                    > <Text>Finish</Text></TouchableOpacity>
                }
            </View>
        )

    }
}
const styles = StyleSheet.create({
    App: {
        textAlign: 'center',
        fontFamily: 'Arial'
    },

    selected: {
        backgroundColor: 'yellow'
    },

    options: {
        padding: 8,


        width: '100%',
        backgroundColor: 'white',
        color: 'steelblue',
        fontWeight: 'bold'
    },

    ul: {

    },

    texto: {
        margin: 5,
    },

    container: {
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'Segoe UI',
        fontSize: 18,
        backgroundColor: 'teal'
    }

})
export default Question;