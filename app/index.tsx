import Header from "@/components/header";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from "react-native";

interface Item {
  id: number;
  name: string;
}

const archives: Item[] = [
  { id: 1, name: "Acapulco" },
  { id: 2, name: "Maldivas" },
  { id: 3, name: "Viagem a trabalho" },
];

const getItemCount = (_data: unknown) => 50;

export default function RootLayout() {
  const Card = ({ item }: { item: Item }) => (
    <View>
      <View style={styles.card} />
      <Text style={styles.cardTitle}>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent
      />
      <Header />
      <Text style={styles.textTittle}>Olá, usuário</Text>
      <Text style={styles.text}>Pronto para planejar mais uma viagem?</Text>
      {/* <VirtualizedList
        data={archives}
        keyExtractor={(item) => item.id.toString()}
        renderItem={Card}
        style={styles.list}
        getItemCount={getItemCount}
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  textTittle: {
    fontSize: 30,
    fontWeight: 600,
    width: "100%",
    textAlign: "left",
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    width: "100%",
    textAlign: "left",
    marginBottom: 20,
  },
  card: {
    width: 130,
    height: 130,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
  },
  list: {
    width: "100%",
    flex: 1,
  },
});
