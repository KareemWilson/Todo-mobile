import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { theme } from "../../../utils/theme/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../../../navigators/MainStack";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { deleteTodo, updateStatus } from "../../../redux/todo/todo";
import { CheckBox } from "@rneui/themed";

export type SingleTaskProps = {
  todo: {
    id: number;
    title: string;
    description: string;
    userId: number;
    isDone: boolean;
  };
};

type MainScreenNavigationType = StackNavigationProp<MainStackParamList>;

const SingleTask: React.FC<SingleTaskProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainScreenNavigationType>();

  const handleDelete = ():void => {
    dispatch(deleteTodo(todo.id));
    Alert.alert("Task Deleted Successfully");
  };

  const handleTaskStatus = ():void => {
    const {isDone, id} = todo
    const updatedStatus = {
      id,
      updatedStatus: !isDone
    }
    dispatch(updateStatus(updatedStatus))
  }

  return (
    <View>
      <View style={styles.taskCard}>
        <View style={styles.checkAndTitleContainer} >
          <CheckBox
            center
            checked={todo.isDone}
            onPress={handleTaskStatus}
            containerStyle={styles.checkbox}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { todo })}
          >
            <Text style={todo.isDone? styles.inlineTitle : styles.title}>{todo.title}</Text>
          </TouchableOpacity>
        </View>
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
    marginVertical: 5,
    justifyContent: "space-between",
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: '600',
    color: theme.PRIMARY_COLOR,
  },
  inlineTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_COLOR,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    opacity: 0.5
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
  checkAndTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    padding: 0,
    margin: 0
  }
});
