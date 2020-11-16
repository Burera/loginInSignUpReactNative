import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Bottom from '../components/Bottom';

import { ListItem, Icon } from 'react-native-elements'
// import AntDesign from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AppText from '../components/AppText'

const list = [
    {
        id: 1,

        title: 'Appointments',
        icon: 'av-timer'

    },
    {
        id: 2,
        title: 'Working Enviroment',
        icon: 'flight-takeoff'
    },
    {
        id: 3,
        title: 'Well Being',
        icon: 'av-timer'
    }

]



const DigitalSkills = (props) => {
    const [check, setCheck] = useState(false);
    const Presses = () => {
        const changee = !check;
        setCheck(changee);
    };
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <AppText title="Digital Skills" shortText="the overall process of hazard identification" />
            <View>
                {
                    list.map((item) => (
                        <ListItem key={item.id} bottomDivider containerStyle={styles.listoStyl}>
                            <Icon name={item.icon} color="#ff1744" />
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.CheckBox
                                key={item.id}
                                onPress={Presses}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                checked={check}
                                checkedColor="#ff1744"
                                uncheckedColor="#bcbcbc" />
                        </ListItem>
                    ))
                }
            </View>


            <View
                style={styles.bottmbtn}>
                <Bottom onLeftPress={() => navigation.goBack()}
                    onRightPress={() => navigation.navigate('WorkingEnviroment')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 0,
        paddingVertical: 0,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#364f6b',
        marginTop: 30,
        justifyContent: 'center',
        marginHorizontal: 20,
        paddingTop: 35
    },
    shortText: {
        color: '#bcbcbc',
        fontWeight: '100',
        marginHorizontal: 20,
        paddingBottom: 30
    },
    bottmbtn: {
        justifyContent: 'flex-end',
        flex: 1
    },
    listoStyl: {
        paddingVertical: 30,
        fontWeight: 'bold',
        marginHorizontal: 10
    }

});
export default DigitalSkills;
