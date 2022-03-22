import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";

const Screens = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screens;
