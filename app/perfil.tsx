import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Perfil() {
  return (
    <View style={styled.container}>
      <StatusBar backgroundColor="#444444" />
      <View style={styled.perfilHeader}>
        <MaterialIcons name="account-circle" size={100} />
        <Text>Nome do usuário</Text>
      </View>
      <Text>Perfil</Text>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  perfilHeader: {
    flex: 0.4,
    backgroundColor: "#666666",
    alignItems: "center",
    justifyContent: "center",
  },
});
