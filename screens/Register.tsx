import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Button
} from "react-native";
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import Modal from "../components/Modal";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [modal, setModal] = useState(false);

  

  const handleSubmit = () => {
      if(password !== retypePassword){
          console.warn("Password mismatch")
      }
      const showUp = setTimeout(() => {
        setModal(true)
      }, 500);
      // clearTimeout(showUp)

      navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./smallsax.jpg")} style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.goback}>
            <Ionicons name="arrow-back" size={24} color="yellow" />
        </View>
        <Modal show={modal} setModal={setModal} />
        <View style={styles.header}>
          <Text style={styles.title}>Create</Text>
          <Text style={styles.title}>an account</Text>
          <Text style={styles.subtitle}>
            Fill the details & create your account
          </Text>
        </View>
        <View style={{ marginTop: 70, alignItems: "center" }}>
          <TextInput
            style={styles.input}
            placeholder="Username/Email ID"
            placeholderTextColor="white"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={[styles.input, {color: 'blue'}]}
            placeholder="Password"
            placeholderTextColor="white"
            // secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            // value={retypePassword}
            onChangeText={(text) => setRetypePassword(text)}
          />
          <Pressable style={styles.continue} onPress={handleSubmit}>
            <Text style={styles.contText}>Continue</Text>
          </Pressable>
        <View style={styles.orcontainer}>
          <Text style={styles.or}>or sign in with</Text>
        </View>
        <View style={styles.icons}>
            <Entypo name="facebook-with-circle" size={35} color="blue" />
            <View style={{width: 20}}/>
            <AntDesign name="google" size={35} color="red" />
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // aspectRatio: 2/3,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.8,
  },
  goback: {
    marginTop: 60,
    marginLeft: '5%',
  },
  header: {
    marginLeft: 38,
    marginTop: 100,
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
  },
  subtitle: {
    color: "#f3f3f3",
    fontSize: 14,
    paddingVertical: 5,
  },
  input: {
    color: "white",
    borderWidth: 3,
    width: "80%",
    height: 55,
    paddingHorizontal: 20,
    fontSize: 18,
    borderColor: "#ECAE2A",
    borderRadius: 20,
    margin: 10,
  },
  continue: {
    backgroundColor: "#FEA90D",
    padding: 15,
    width: "80%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  orcontainer: {
    marginTop: 30,
    alignItems: "center",
  },
  contText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
  or: {
    color: "#ffffff",
    fontSize: 15,
  },
  icons : { 
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
  }
});

export default Register;
