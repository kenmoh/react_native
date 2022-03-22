import { useDimensions } from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
// const App = () => <WelcomeScreen />;
const App = () => {
  return <MessagesScreen />;
};

const styles = StyleSheet.create({});

export default App;
