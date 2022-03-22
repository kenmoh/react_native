import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

const ListingDetailScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/background.jpg")}
      />
      <View style={styles.btnContainer}>
        <AppText style={styles.title}>Americano Coffe</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/logo.png")}
            title="Kenneth Aremoh"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  btnContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailScreen;
