import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../utils/theme/styles";

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Confirm your Password</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.btnsContainer}>
        <Button title="Signup" onPress={() => console.log('btn pressed')}></Button>
        <TouchableOpacity style= {{ backgroundColor: ''}}>
            <Text onPress={() => console.log('btn pressed')}>login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
  },
  fieldContainer: {
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  label: {
    color: theme.PRIMARY_COLOR
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
    borderColor: theme.PRIMARY_COLOR
  },
  btnsContainer: {
    alignItems: "center",
    padding: 10,
    gap: 20
  }
});