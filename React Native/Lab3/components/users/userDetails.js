import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Details = () => {
  const { params } = useRoute();

  return (
    <View style={styles.container}>
      {params && <Text style={styles.textStyle}>Name: {params.name}</Text>}
      {params && (
        <Text style={styles.textStyle}>Username: {params.username}</Text>
      )}
      {params && <Text style={styles.textStyle}>Email: {params.email}</Text>}
      {params && <Text style={styles.textStyle}>Phone: {params.phone}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    fontSize: 50,
    textAlign: "center",
    marginTop:60
  },
  textStyle: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
});

export default Details;