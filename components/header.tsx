import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/perfil")}>
          <MaterialIcons name="account-circle" size={40} />
        </TouchableOpacity>
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
    height: 50,
    marginTop: 20,
    justifyContent: "center",
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
