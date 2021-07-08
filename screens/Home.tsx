import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text>Welcome Home</Text>
      </View>
      <Text>Name</Text>
      <View style={styles.row}>
        <Text>Name: Taofik Adeniyi</Text>
      </View>
      <Text>Your details have been saved</Text>
      <View style={styles.row}>
        <Text>Email bidemi64@gmail.com</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
});

export default Home;
