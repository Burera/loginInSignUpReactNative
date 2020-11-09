
import React from 'react';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import Bottom from '../components/Bottom';
import QuestionList from '../components/QuestionList';





const ScreenB = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <QuestionList></QuestionList>

            <View style={styles.bottomBtn}>

                <Bottom></Bottom>

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
