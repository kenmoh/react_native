import { StyleSheet, Text, View } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import colors from "../config/colors";

const ListItemSeperator = () => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeperator;
