import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import fetchTravel from "@/hooks/travel_api";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = (width - 60) / 2;

interface Travel {
  id: number | string;
  title: string;
  expenses: Expense[];
  RoadMap: RoadMap[];
  checklist: Checklist;
  color: string;
}

interface Checklist {
  general: string[];
}

interface RoadMap {
  pointTitle: string;
  category: string;
  spentValue: number;
  numberOfDays: number;
}

interface Expense {
  spentTitle: string;
  category: string;
  spentValue: number;
  NumberOfDays: number;
}

export default function CardList() {
  const router = useRouter()
  const [travel, setTravel] = useState<Travel[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTravel();
      setTravel(data);
    };

    loadData();
  }, []);

  return (
    <View style={styles.list}>
      {travel.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[styles.col, { width: ITEM_WIDTH }]}
          onPress={() => router.replace("/travel")}
        >
          <View style={[styles.card, { backgroundColor: item.color }]}></View>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.addButton}>
        <MaterialIcons name="add-circle-outline" size={50} />
      </View>
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
  addButton: {
    width: 160,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
});
