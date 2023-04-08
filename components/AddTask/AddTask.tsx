import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { theme } from "../../utils/theme/styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTodo } from "../../redux/todo/todo";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const userId = useAppSelector((state) => state.currentUser.id);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (title == "") {
      console.log("title of task is required");
    } else {
      const task = {
        title,
        description,
        userId,
      };
      dispatch(addTodo(task));
      setTitle('')
      setDescription('')
    }
  };

  return (
    <View style={styles.newTaskContainer}>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Task Title"
          style={styles.newTaskInput}
          onChangeText={(v) => setTitle(v)}
          value={title}
        />
        <TextInput
          placeholder="Description (Optional)"
          style={styles.newTaskInput}
          onChangeText={(v) => setDescription(v)}
          value={description}
        />
      </View>
      <TouchableOpacity onPress={handleAdd}>
        <Icon name="plus-circle" size={50} color={theme.PRIMARY_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  newTaskContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    padding: 30,
    gap: 10,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  newTaskInput: {
    borderWidth: 1,
    flex: 5,
    borderRadius: 16,
    paddingHorizontal: 10,
    borderColor: theme.PRIMARY_COLOR,
  },
  inputs: {
    flex: 5,
    gap: 10,
  },
});
