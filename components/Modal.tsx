import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    show: boolean;
    children?: React.FC;
    setModal: ()=>{};
}
const Modal = ({ show, setModal }: Props) => {
  const [visible, setVisible] = useState(true);
  if (show) {
      return (
        <View style={styles.modal}>
        <View style={styles.overlay} />
        <View style={{alignItems: "center", marginTop: 30}}>
          <Ionicons name="checkmark-done-circle-outline" size={55} color="green" />
        </View>
        <View style={{alignItems: "center"}}>
          <Text style={styles.title}>Monkey Music !</Text>
        </View>
            <View
              style={{
                width: "90%",
                backgroundColor: "white",
                padding: 22,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                borderColor: "rgba(0, 0, 0, 0.1)",
                marginTop: 50
              }}
            >
              <Text style={styles.textOne}>Succesfull</Text>
              <Text style={styles.textTwo}>Redirecting to Home !</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Pressable onPress={() => setModal(false)}>
                <Text style={{fontSize: 35, color: '#FEA90D', fontWeight: 'bold'}} >...</Text>
              </Pressable>
            </View>
        </View>
      );
  }
  return (
      <View><Text>..loading</Text></View>
  )
};
const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    top: "30%",
    right: 0,
    bottom: "30%",
    left: 0,
    height: "40%",
    backgroundColor: "#f3f3f3",
    marginHorizontal: "5%",
    elevation: 30, // for android
    zIndex: 30, // for ios
    borderRadius: 50,
    // justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // aspectRatio: 2/3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 25
  },
  textOne: {
    fontSize: 15
  },
  textTwo: {
    fontSize: 18,
    paddingVertical: 10
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "red",
    opacity: 0.1,
  }
});
export default Modal;
