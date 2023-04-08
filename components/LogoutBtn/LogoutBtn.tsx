import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme } from "../../utils/theme/styles";

const LogoutBtn = () => {
  return (
    <TouchableOpacity style={styles.logoutBtn}>
      <Text style={styles.logout}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutBtn;

const styles = StyleSheet.create({
  logoutBtn: {
    position: "absolute",
    top: 0,
    right: 10,
  },
  logout: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: "900",
    padding: 10,
    margin: 10,
    color: "grey",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: theme.PRIMARY_COLOR
  }
});
