import { StyleSheet, View, Text } from "react-native";

interface Item {
  name: string;
}

export default function Card({ item }: { item: Item }) {
  return (
    <View style={styles.container}>
      <View style={styles.card} />
      <Text style={styles.cardTitle}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
  },
  card: {
    width: "90%",
    height: 150,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
  },
});
