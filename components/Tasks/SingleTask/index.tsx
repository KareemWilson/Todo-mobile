import React from "react";
import {StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from "../../../utils/theme/styles";

type SingleTaskProps = {
  todo: {
    id: number;
    title: string;
    description: string;
    userId: number;
  };
};

const SingleTask: React.FC<SingleTaskProps> = ({ todo }) => {
  return (
    <View>
      <View style={styles.taskCard}>
        <TouchableOpacity>
            {/* <CheckBox
              style={styles.checkbox}
            /> */}
          <Text style={styles.title}>{todo.title}</Text>
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
          <Icon name="edit" size={30} color={theme.PRIMARY_COLOR} />
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
