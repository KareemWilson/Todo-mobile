import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { todos } from '../../data'
import SingleTask from './SingleTask'

const Tasks = () => {
  return (
    <View style={styles.tasksContainer}>
      <Text style={styles.title}>Tasks</Text>
        {todos.map((todo) => (
            <SingleTask key={todo.id} todo={todo} />
        ))}
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
    tasksContainer: {
        paddingTop: 70,
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        paddingLeft: 15
    }
})