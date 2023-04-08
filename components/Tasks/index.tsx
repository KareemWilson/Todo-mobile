import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SingleTask from './SingleTask'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getTodos } from '../../redux/todo/todo'

const Tasks = () => {
  const todos = useAppSelector(state => state.todos)
  const userId = useAppSelector(state => state.currentUser.id)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTodos(userId))    
  }, [dispatch])
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.tasksContainer}>
          {todos.length !== 0 ? todos.map((todo) => (
              <SingleTask key={todo.id} todo={todo} />
          )) : <Text>Start doing your Todo list by Adding your tasks below</Text>}
      </ScrollView>
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
    tasksContainer: {
        marginTop: 40,
        marginBottom: 120
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        paddingLeft: 15
    }
})