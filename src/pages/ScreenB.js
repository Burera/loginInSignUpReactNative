
import React from 'react';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import Bottom from '../components/Bottom';
// import Question from '../components/Question';
import QuestionList from '../components/QuestionList';
import Quiz from '../components/Quiz';

const ScreenB = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Quiz></Quiz>
            <View style={styles.bottomBtn}>

                <Bottom onLeftPress={() => navigation.goBack()}></Bottom>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    bottomBtn: {
        justifyContent: 'flex-end'
    }


})
export default ScreenB
