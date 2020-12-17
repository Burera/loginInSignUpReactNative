/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {

  StyleSheet,

  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Dashboard from './src/pages/Dashboard';

import Home from './src/pages/Home';
import RiskAssessement from './src/pages/RiskAssessement';
import WorkingEnviroment from './src/pages/WorkingEnviroment';
import WellBeing from './src/pages/WellBeing';
import DigitalSkills from './src/pages/DigitalSkills';
import Welcom from './src/pages/Welcom'


const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator
          headerMode="screen"
          screenOptions={{
            cardStyle: { backgroundColor: 'white' },
            headerShown: false,
          }}>
          <Stack.Screen name="Welcome" component={Welcom} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="RiskAssessement" component={RiskAssessement} />
          <Stack.Screen name="WorkingEnviroment" component={WorkingEnviroment} />
          <Stack.Screen name="WellBeing" component={WellBeing} />
          <Stack.Screen name="DigitalSkills" component={DigitalSkills} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

const styles = StyleSheet.create({});

export default App;
