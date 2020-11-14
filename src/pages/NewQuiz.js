import React, { useState } from 'react';
import {
  View,

  StyleSheet,
  Text,
  FlatList
} from 'react-native'

export default function NewQuiz(props) {

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

  const [currentQuestion, setCurrentQuestion] = useState();
  const [showScore, setShowScore] = useState(setCurrentQuestion);
  const [score, setScore] = useState(0);

  // const handleAnswerOptionClick = (isCorrect) => {
  //   if (isCorrect) {
  //     setScore(score + 1);
  //   }

  //   const nextQuestion = currentQuestion + 1;
  //   if (nextQuestion < questions.length) {
  //     setCurrentQuestion(nextQuestion);
  //   } else {
  //     setShowScore(true);
  //   }
  // };
  return (
    <View >
      {showScore ? (
        <Text >
          You scored {score} out of {questions.length}
        </Text>
      ) : (
          <>


            <Text >{questions[0].questionText}</Text>

            <Text >
              {questions[0].answerOptions.map((answerOption) => (
                <Text >{answerOption.answerText}
                  {/* onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText} */}

                </Text>
              ))}
            </Text>
          </>
        )}
    </View>
  );
}