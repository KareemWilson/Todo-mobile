import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from "../../../utils/theme/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../../../navigators/MainStack";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { deleteTodo } from "../../../redux/todo/todo";



export type SingleTaskProps = {
  todo: {
    id: number;
    title: string;
    description: string;
    userId: number;
    isDone: boolean;
  };
};

type MainScreenNavigationType = StackNavigationProp<MainStackParamList>

const SingleTask: React.FC<SingleTaskProps> = ({ todo }) => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<MainScreenNavigationType>()


  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
    Alert.alert('Task Deleted Successfully')
  }
  return (
    <View>
      <View style={styles.taskCard}>
        <TouchableOpacity onPress={() => navigation.navigate('Details', { todo })}>
          <Text style={styles.title}>{todo.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconsContainer} onPress={handleDelete}>
          <Icon name="trash" size={30} color={theme.PRIMARY_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleTask;

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    display: "flex",
    flexDirection: "row",
    margin: 15,
    padding: 15,
    justifyContent: "space-between"
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_COLOR,
  },
  checkbox: {

  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    alignItems: "center"
  }
});
