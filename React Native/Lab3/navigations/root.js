import React, { createContext } from "react";
import { StyleSheet } from "react-native";
import routes from "../common/routes";
import Contact from "../components/contact/contact";
import Todo from "../components/toDo/todo"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UsersNavigator from "./userNavigator";
export const usersContext = createContext();


const Root = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen name={routes.contacts} component={Contact} />
      <Tab.Screen  name={routes.users} component={UsersNavigator} />
      <Tab.Screen name={routes.todo} component={Todo} /> 
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
  },
});

export default Root;
