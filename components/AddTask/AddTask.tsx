import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/FontAwesome5'
import { theme } from '../../utils/theme/styles'

const AddTask = () => {
  return (
    <View style={styles.newTaskContainer}>
      <TextInput  style={styles.newTaskInput}/>
      <TouchableOpacity>
        <Icon name='plus-circle' size={50} color={theme.PRIMARY_COLOR}/>
      </TouchableOpacity>
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
    newTaskContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        padding: 30,
        gap: 10,
        backgroundColor: theme.BACKGROUND_COLOR_LIGHT
    },
    newTaskInput: {
        borderWidth: 1,
        flex: 5,
        borderRadius: 16,
        paddingHorizontal: 10
    }
})