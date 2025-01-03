import CardList from "@/components/CardList";
import Header from "@/components/header";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent
      />
      <Header />
      <Text style={styles.textTittle}>Olá, usuário</Text>
      <Text style={styles.text}>Pronto para planejar mais uma viagem?</Text>
      <CardList />
    </View>
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
