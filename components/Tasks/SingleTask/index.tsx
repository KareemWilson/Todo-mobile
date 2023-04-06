import React from "react";
import {StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { theme } from "../../../utils/theme/styles";

type SingleTaskProps = {
  todo: {
    id: number;
    title: string;
    description: string;
    userId: number;
  };
};

const SingleTask = ({ todo }: SingleTaskProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.taskCard}>
        {/* <CheckBox
            style={styles.checkbox}
          /> */}
        <Text style={styles.title}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
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
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_COLOR,
  },
  checkbox: {

  }
});
