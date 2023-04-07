import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tasks from "../../components/Tasks";
import AddTask from "../../components/AddTask/AddTask";

const Todos = () => {
  return (
    <View style={styles.todoScreenLayout}>
      <Tasks />
      <AddTask />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
    todoScreenLayout: {
        height: '100%'
    }
});
