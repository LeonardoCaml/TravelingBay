import { Text, StyleSheet, View, Dimensions } from "react-native";
import { useState, useEffect } from "react";

const { width } = Dimensions.get("window");
const item = (width - 60) / 2;

type Expense = {
  spentTitle: string;
  category: string;
  spentValue: number;
  NumberOfDays: number;
};

type Travel = {
  id: number;
  title: string;
  expenses: Expense[];
};

type TravelsData = {
  travels: Travel[];
};

export default function CardList() {
  const [travel, setTravel] = useState([]);

  useEffect(() => {
    fetch("https://leonardocaml.github.io/travelingbay_api/travels.json")
      .then((response) => response.json())
      .then((data) => setTravel(data.travel))
      .catch((error) => console.error("Erro ao buscar os dados:", error));
  }, []);

  return (
    <View style={styles.list}>
      {travel.map((travel) => (
        <View key={travel.id} style={[styles.col, { width: item }]}>
          <View style={styles.card}></View>
          <Text style={styles.cardTitle}>{travel.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: 160,
    height: 160,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 15,
    width: 150,
    fontFamily: "Poppins-Bold",
  },
  col: {
    alignItems: "center",
    height: 220,
  },
});
