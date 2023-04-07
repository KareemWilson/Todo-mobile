import React from "react";
import {StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from "../../../utils/theme/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../../../navigators/MainStack";
import { useNavigation } from "@react-navigation/native";


export type SingleTaskProps = {
  todo: {
    id: number;
    title: string;
    description: string;
    userId: number;
  };
};

type MainScreenNavigationType = StackNavigationProp<MainStackParamList>

const SingleTask: React.FC<SingleTaskProps> = ({ todo }) => {
  const navigation = useNavigation<MainScreenNavigationType>()
  return (
    <View>
      <View style={styles.taskCard}>
        <TouchableOpacity onPress={() => navigation.navigate('Details', { todo })}>
          <Text style={styles.title}>{todo.title}</Text>
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
          <Icon name="trash" size={30} color={theme.PRIMARY_COLOR} />
        </View>
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
