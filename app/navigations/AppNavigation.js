import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens list
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPassrdScreen from '../screens/ForgotpassrdScreen';

const Stack = createNativeStackNavigator();

function AppNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: true,
          animationEnabled: true,
        })}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassrd" component={ForgotPassrdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
