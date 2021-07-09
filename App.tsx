import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from "react";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import { Navigation } from "./Navigation";
import store from "./redux/store";
import { Provider } from "react-redux";
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

export default function App(){
  return (
      <SafeAreaProvider>
        <Provider store={store}>
            <Navigation />
            <StatusBar />
        </Provider> 
      </SafeAreaProvider>
  )
}

// export default function App() {
//   return (
//     <SafeAreaProvider>
//         <StatusBar />
//         <Navigation />
//       </SafeAreaProvider>
//   );
// }

const styles = StyleSheet.create({
  droidSafeArea: {
      flex: 1,
      backgroundColor: 'blue',
      paddingTop: Platform.OS === 'android' ? 20 : 0
  }
})