import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Todos from '../screens/Todos/Todos';
import TodoDetails from '../screens/TodoDetails/TodoDetails';
import { SingleTaskProps } from '../components/Tasks/SingleTask';

export type MainStackParamList = {
    Todos: undefined,
    Details: SingleTaskProps
}


const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Todos' component={Todos}/>
        <Stack.Screen name='Details' component={TodoDetails} />
    </Stack.Navigator>
  )
}

export default MainStack