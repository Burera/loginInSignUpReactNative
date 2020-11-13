import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DashboardList from '../components/DashboardList';

const list = [
    {

        name: 'Risk Assessment',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Confirmation Text',
        address: 'RiskAssessement',
    },
    {
        name: 'Working Enviroment',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Feeback About pandemic',
        address: 'WorkingEnviroment',
    },
    {

        name: 'Well Being',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Detailed Video',
        address: 'WellBeing',
    },
    {

        name: 'Digital Skills',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Survey Feeback',
        address: 'DigitalSkills',
    },
];
const Home = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../images/lll.jpeg')}
                style={styles.header}>
                <SafeAreaView>
                    <View style={styles.HomeOne}>
                        <View style={styles.HomeTwo}>
                            <AntDesign
                                name="arrowleft"
                                size={24}
                                color="#fff"
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                    </View>


                    <View style={styles.HomeThree}>
                        <Text style={styles.HomeFour}>Dashboard</Text>
                        <Text style={styles.HomeFive}>Survey About Pandemic </Text>
                    </View>
                </SafeAreaView>

                <View style={styles.footer}>
                    <FlatList

                        data={list}
                        renderItem={({ item }, index) => (
                            <View style={styles.box}>
                                <DashboardList
                                    key={index}
                                    onPress={() => navigation.navigate(item.address)}
                                    source={{ uri: item.avatar_url }}
                                    name={item.name}
                                    subtitle={item.subtitle}
                                />
                            </View>
                        )}
                        keyExtractor={(item) => item.key}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',

        width: '100%',
        height: '50%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    HomeOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    HomeTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    HomeThree: {
        paddingHorizontal: 27,
        paddingTop: 50,
        paddingBottom: 20,
    },
    HomeFour: {
        borderBottomColor: '#364f6b',
        borderBottomWidth: 3,
        width: 150,
        paddingVertical: 5,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#364f6b',
    },
    HomeFive: {
        color: '#fff',
        fontWeight: '200',
        color: '#364f6b',
    },
});

export default Home;
