import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
    height: "92%",
    marginHorizontal: 10
  },
  header: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5
  }
});