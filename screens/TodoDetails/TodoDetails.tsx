import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from '../../navigators/MainStack';

type TodoDetailsProps = StackScreenProps<MainStackParamList, 'Details'>;

const TodoDetails: React.FC<TodoDetailsProps> = ({ route }) => {
  const { todo } = route.params
  return (
    <View>
      <Text>{todo.title}</Text>
    </View>
  )
}

export default TodoDetails

const styles = StyleSheet.create({})