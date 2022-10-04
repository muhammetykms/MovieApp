import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/home";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const app = () => {
  return (

      <HomeScreen />
    

  );
};

export default app;