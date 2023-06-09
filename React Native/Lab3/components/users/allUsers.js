import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import routes from "../../common/routes";
import { useNavigation } from '@react-navigation/native';

const UsersList = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (text) => {
    setSearch(text);
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Omnia Goher",
      username: "Omnia",
      email: "omnia@gmail.com",
      phone: "010036458745"
    },
    {
      id: 2,
      name: "Eman Ahmed",
      username: "Eman",
      email: "eman@gmail.com",
      phone: "010036458745"
    },
    {
      id: 3,
      name: "Dina Mohamed",
      username: "Dina",
      email: "dina@gmail.com",
      phone: "010036458745"
    }
  ]);

  const { navigate } = useNavigation()

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      <FlatList
        style={styles.list}
        data={users.filter((user) => user.name.includes(search))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.user}>
            <Text style={[styles.userText]}>{item.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigate(routes.details, item);
              }}
            >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    marginTop:30
  },
  list: {
    marginTop: 20,
    marginHorizontal: 30
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    gap: 10,
    padding: 20,
    marginBottom: 10,
  },
  userText: {
    flex: 1,
    marginRight: 10,
    fontWeight: "800"
  },
  inputError: {
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 10,
    color: "red",
  },
  counter: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white"
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default UsersList;
