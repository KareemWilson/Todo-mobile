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
import { AuthStackParamList } from "../../navigators/AuthStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import validateInputs from "../../utils/validateInputs";
import { useAppDispatch } from "../../redux/hooks";
import { signup } from "../../redux/user/user";

type authScreenNavigationType = StackNavigationProp<
  AuthStackParamList,
  "Signup"
>;

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const navigation = useNavigation<authScreenNavigationType>();
  const dispatch = useAppDispatch()

  const handleSignup = () => {
    const errors = validateInputs(name, email, password, passwordConfirmation)
    if(Object.keys(errors).length === 0){
      const newUser = {
        name,
        email,
        password
      }
      dispatch(signup(newUser)).then(() => {
        navigation.navigate('Login')
      })
    }else{
      console.log(errors)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} onChangeText={(e) => setName(e)} />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} keyboardType="email-address" onChangeText={(e) => setEmail(e)}></TextInput>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} onChangeText={(e) => setPassword(e)}></TextInput>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Confirm your Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} onChangeText={(e) => setPasswordConfirmation(e)}></TextInput>
      </View>
      <View style={styles.btnsContainer}>
        <Button
          title="Signup"
          onPress={handleSignup}
        ></Button>
        <TouchableOpacity style={{ backgroundColor: "" }}>
          <Text onPress={() => navigation.navigate("Login")}>login</Text>
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
