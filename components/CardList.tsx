import { FlatList, StyleSheet, View } from "react-native";
import Card from "./Card";

interface Item {
  id: number;
  name: string;
}

const archives: Item[] = [
  { id: 1, name: "Acapulco" },
  { id: 2, name: "Maldivas" },
  { id: 3, name: "Viagem a trabalho" },
];

export default function CardList() {
  const numColumn = 2;

  return (
    <FlatList
      data={archives}
      keyExtractor={(item) => item.id.toString()}
      renderItem={Card}
      style={styles.list}
      numColumns={numColumn}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    width: 130,
    height: 130,
    backgroundColor: "#333",
    borderRadius: 10,
    margin: 5,
  },
  cardTitle: {
    fontSize: 20,
  },
  list: {
    flex: 1,
  },
});
