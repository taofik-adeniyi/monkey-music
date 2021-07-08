import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from "react";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import { Navigation } from "./Navigation";

export default function App() {
  return (
    <SafeAreaProvider>
        <StatusBar />
        <Navigation />
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
      flex: 1,
      backgroundColor: 'blue',
      paddingTop: Platform.OS === 'android' ? 20 : 0
  }
})