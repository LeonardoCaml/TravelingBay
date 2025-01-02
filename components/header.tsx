import { View, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="account-circle" size={40} />
        <TextInput style={styles.input} placeholder="procurar nota" />
        <MaterialIcons name="dehaze" size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: .2,
    justifyContent: 'center'
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "70%",
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
});
