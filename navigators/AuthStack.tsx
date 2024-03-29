import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';

export type AuthStackParamList = {
    Login: undefined,
    Signup: undefined
}


const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthStack