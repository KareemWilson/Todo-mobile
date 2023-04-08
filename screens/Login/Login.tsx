import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { theme } from "../../utils/theme/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigators/AuthStack";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/user/user";

type authScreenNavigationType = StackNavigationProp<
  AuthStackParamList,
  "Login"
>;

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()
  const navigation = useNavigation<authScreenNavigationType>();
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} onChangeText={(e) => setName(e)}></TextInput>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} onChangeText={(t) => setPassword(t)}></TextInput>
      </View>
      <View style={styles.btnsContainer}>
        <Button
          title="Login"
          onPress={() => dispatch(login({name, password}))}
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
