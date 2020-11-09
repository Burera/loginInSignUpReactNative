/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import HomeScreen from './src/pages/HomeScreen';
import ScreenA from './src/pages/ScreenA';
import ScreenB from './src/pages/ScreenB'
import ScreenC from './src/pages/ScreenC'
import ScreenD from './src/pages/ScreenD'

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator headerMode="screen" screenOptions={{
          headerShown: false

        }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ScreenA" component={ScreenA} />
          <Stack.Screen name="ScreenB" component={ScreenB} />
          {/* <Stack.Screen name="ScreenC" component={ScreenC} />
          <Stack.Screen name="ScreenD" component={ScreenD} /> */}

        </Stack.Navigator>
      </NavigationContainer>
      {/* <Text>hello</Text> */}
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
