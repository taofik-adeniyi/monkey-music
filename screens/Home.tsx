import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [myObject, setObject] = useState("");
  const checkUserDetails = async () => {
    try {
      const value = await AsyncStorage.getItem("userDetails");
      if (value !== null) {
        setObject(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("userDetails");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    checkUserDetails();
    // logOut()
  }, []);

  return (
    <View style={styles.wrapper}>
      <View>
        <Text>Welcome Home</Text>
      </View>
      <View>
      <Text>Your details have been saved</Text>
      </View>
      <View style={styles.row}>
        <Text>Username: { myObject } </Text>
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
