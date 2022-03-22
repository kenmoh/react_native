import { StyleSheet, FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screens from "../components/Screens";

const messages = [
  {
    id: 1,
    title: "title one",
    description: "description one",
    image: require("../assets/cream.jpg"),
  },
  {
    id: 2,
    title: "title two",
    description: "description two",
    image: require("../assets/background.jpg"),
  },
  {
    id: 3,
    title: "title three",
    description: "description three",
    image: require("../assets/logo.png"),
  },
];

const MessagesScreen = () => {
  return (
    <Screens>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() =>
              console.log(`Message with ID: ${item.id} Selected !`)
            }
            renderRightActions={() => (
              <View
                style={{
                  backgroundColor: "red",
                  width: 70,
                }}
              ></View>
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screens>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
