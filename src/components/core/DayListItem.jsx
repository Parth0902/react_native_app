import { StyleSheet, Text, View, FlatList,Pressable } from "react-native";
import { Link } from "expo-router";
const DayListItem = ({ data }) => {
  return (
    <Link href={"/about"} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{data}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "#F9EDE3",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,
  },
  text: {
    fontSize: 70,
    color: "#9b4521",
    fontFamily: "AmaticBold",
  },
});

export default DayListItem;
