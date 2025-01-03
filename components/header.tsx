import { View, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="account-circle" size={40} />
        <View style={styles.input}>
          <MaterialIcons name="search" size={20} style={styles.inputIcon} />
          <TextInput style={styles.inputText} placeholder="procurar nota" />
        </View>
        <MaterialIcons name="dehaze" size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 0.2,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 30,
  },
  inputIcon: {
    padding: 10,
  },
  inputText: {
    width: 180,
  },
});
