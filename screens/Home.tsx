import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({route, navigation}) => {
  
  // const { userData } = route.params
  const [myObject, setObject] = useState("");
  const checkUserDetails = async () => {
    try {
      const value = await AsyncStorage.getItem("userDetails");
      setObject(value)
      // if (value !== null) {
      //   setObject(JSON.parse(value));
      // }
    } catch (e) {
      console.log(e);
    }
  };
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("userDetails");
      navigation.navigate('Register')
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    checkUserDetails();
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
      <Pressable onPress={logOut}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  )
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
