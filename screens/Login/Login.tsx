import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { theme } from "../../utils/theme/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigators/AuthStack";
import { useNavigation } from "@react-navigation/native";

type authScreenNavigationType = StackNavigationProp<
  AuthStackParamList,
  "Login"
>;

const Login = () => {
  const navigation = useNavigation<authScreenNavigationType>();
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
      <View style={styles.btnsContainer}>
        <Button
          title="Login"
          onPress={() => console.log("btn pressed")}
        ></Button>
        <TouchableOpacity style={{ backgroundColor: "" }}>
          <Text onPress={() => navigation.navigate("Signup")}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 250,
  },
  fieldContainer: {
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  label: {
    color: theme.PRIMARY_COLOR,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
    borderColor: theme.PRIMARY_COLOR,
  },
  btnsContainer: {
    alignItems: "center",
    padding: 10,
    gap: 20,
  },
});
