import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  ActivityIndicator
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import Modal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setPassword, setRetypePassword } from "../redux/actions/register";
import { StackScreenProps } from '@react-navigation/stack';
import { firebase } from '../src/firebase/config'

type RootStackParamList = {
  Home: undefined;
};

type Props = StackScreenProps<RootStackParamList>;

const Register = ({ navigation }: Props) => {

  const checkifLoggedIn = async ()=>{
    const obj = await AsyncStorage.getItem('userDetails')
    const res = JSON.parse(obj)
    const myTK = res.token
    if(myTK) {
      navigation.navigate('Home')
    }
    return
  }
  useEffect(()=>{
    // checkifLoggedIn()
  }, [])

  const username = useSelector(state => state.register.username)
  const password = useSelector(state => state.register.password)
  const retypepassword = useSelector(state => state.register.retypepassword)
  const prompt = useSelector(state => state.prompt)
  const [passError, setPassError] = useState(false)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();

  
  const handleSubmit = async () => {
      if(password !== retypepassword){
        setPassError(true)
          return
      }

      const setData = async (data) => {
        try {
          const mydata = JSON.stringify(data)
          await AsyncStorage.setItem('userDetails', mydata)
          console.log('d set data')
        } catch (error) {
          console.log(error)         
        }
      }

      firebase
            .auth()
            .createUserWithEmailAndPassword(username, password)
            .then((response: { user: { uid: any; }; }) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    username: username,
                    password: password
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then((document) => {
                        const userData = document.data()
                        console.log('>>>>>>>>userData', userData)
                        setData(userData)
                        navigation.navigate('Home')
                    })
                    .catch((error: any) => {
                        console.log(error)
                    });
            })
            .catch((error: any) => {
                console.log(error)
        });
      
      setTimeout(()=>{
        setLoading(true)
      }, 1000)
      setTimeout(()=>{
        setLoading(false)
      }, 2000)
      setTimeout(() =>{
        dispatch({ 
          type: 'PROMPT'
        })
      }, 3000)

      // const token = "hellotoken"
      // console.log(username)
      // console.log(retypepassword)
      // console.log(password)
      // console.log(token)
      // const details = {
      //   user: username, 
      //   pass: password, 
      //   rpass: retypepassword, 
      //   token: token
      // }
      // try {
      //   const userDetails = JSON.stringify(details)
      //   await AsyncStorage.setItem('userDetails', userDetails)
      // } catch (e) {
      //   console.warn(e)
      // }
      

      setTimeout(()=>{
        navigation.navigate('Home')
      }, 4000)
      setTimeout(()=>{
        dispatch({ 
          type: 'PROMPT'
        })
      }, 5000)
  }
  if (loading) {
    return (
    <View style={styles.indicator}>
      <ActivityIndicator 
      size="large" 
    />
    </View>
    )
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./smallsax.jpg")} style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.goback}>
            <Ionicons name="arrow-back" size={24} color="yellow" />
        </View>
        <Modal show={prompt} />
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
            value={username.toLowerCase()}
            onChangeText={(val) => dispatch( { payload : val, type: 'USERNAME'} ) }
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            value={password.toLowerCase()}
            onChangeText={(val) => dispatch( { payload : val, type: 'PASSWORD'} ) }
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            value={retypepassword.toLowerCase()}
            onChangeText={(val) => dispatch( { payload : val, type: 'RETYPEPASSWORD'} ) }
          />

          {
            passError && (
              <View style={styles.mismatch}>
                <Text style={{color: 'red'}}>
                  Password mismatch Retype password
                </Text>
              </View>
            ) 
          }

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
    textTransform: 'lowercase'
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
  },
  mismatch: {
    backgroundColor: 'white', 
    borderColor: 'red', 
    padding: 10, 
    borderRadius: 15, 
    width: '80%',
    marginTop: 10,
    alignItems: "center",
    },
    indicator: {
        flex: 1,
        justifyContent: "center"
    }
});

export default Register;
