import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SingleTask from './SingleTask'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getTodos } from '../../redux/todo/todo'
import { theme } from '../../utils/theme/styles'

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
          )) : <Text style={styles.placeholderText}>Start doing your Todo list by Adding your tasks below</Text>}
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
    },
    placeholderText: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 50,
      color: theme.PRIMARY_COLOR
    }
})