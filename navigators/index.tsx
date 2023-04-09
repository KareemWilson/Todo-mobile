import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useAppSelector } from "../redux/hooks";

const AppStack = () => {
  const isLoggedin = useAppSelector(
    (state) => state.currentUser.isLoggedIn
  );
  const name = useAppSelector(
    (state) => state.currentUser.name
  );

  return (
    <NavigationContainer>
      {!isLoggedin ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
