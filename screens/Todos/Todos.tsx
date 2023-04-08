import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tasks from "../../components/Tasks";
import AddTask from "../../components/AddTask/AddTask";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";

const Todos = () => {
  return (
    <View style={styles.todoScreenLayout}>
        <LogoutBtn />
        <Tasks />
        <AddTask />
      </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
    todoScreenLayout: {
        flex: 1
    }
});
