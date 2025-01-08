import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface spentProp {
  id: number;
  spent: string;
  value: number;
  days: number;
  icon: string;
}

interface checklistProp {
  id: number;
  title: string;
}

const spents: spentProp[] = [
  { id: 1, spent: "Alimentação", value: 200, days: 4, icon: "lunch-dining" },
  { id: 2, spent: "Hospedagem", value: 3000, days: 1, icon: "hotel" },
  {
    id: 3,
    spent: "Passagem - ida e volta",
    value: 1500,
    days: 1,
    icon: "confirmation-number",
  },
];

const checklist: checklistProp[] = [
  { id: 1, title: "Documentos" },
  { id: 2, title: "Remedios" },
  { id: 3, title: "Visto" },
  { id: 4, title: "Remedios" },
  { id: 5, title: "Remedios" },
  { id: 6, title: "Passaporte" },
  { id: 7, title: "Passagem aérea" },
  { id: 8, title: "Documentos pessoais (RG, CPF, CNH)" },
  { id: 9, title: "Cartão de crédito/débito" },
  { id: 10, title: "Seguro viagem" },
  { id: 11, title: "Medicamentos de uso contínuo" },
  { id: 12, title: "Itens de higiene pessoal" },
  { id: 13, title: "Carregadores de dispositivos" },
  { id: 14, title: "Adaptador de tomada" },
  { id: 15, title: "Roupas adequadas ao clima" },
  { id: 16, title: "Tênis ou calçado confortável" },
];

const route: spentProp[] = [
  { id: 1, spent: "Museu", value: 100, days: 1, icon: "theater-comedy" },
  { id: 2, spent: "Praia", value: 100, days: 3, icon: "beach-access" },
];

export default function Travel() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.RowSeparated}>
          <Text style={{ fontSize: 36 }}>Acapulco</Text>
          <MaterialIcons name="cancel" size={40} />
        </View>
        <Text style={styles.RowTitle}>Gastos</Text>
        <View>
          {spents.map((spent) => (
            <View style={styles.spents} key={spent.id}>
              <View style={styles.spentTitle}>
                <MaterialIcons name={spent.icon} size={30} />
                <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
                  {spent.spent}
                </Text>
              </View>
              <View style={styles.spentValue}>
                <Text style={{ fontSize: 20 }}>
                  R${spent.value * spent.days}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  {spent.days > 1
                    ? `R$${spent.value} / ${spent.days} dias`
                    : "gasto fixo"}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.RowTitle}>Roteiro de viagem</Text>
        <View>
          {route.map((spent) => (
            <View style={styles.spents} key={spent.id}>
              <View style={styles.spentTitle}>
                <MaterialIcons name={spent.icon} size={30} />
                <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
                  {spent.spent}
                </Text>
              </View>
              <View style={styles.spentValue}>
                <Text style={{ fontSize: 20 }}>
                  R${spent.value * spent.days}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  {spent.days > 1
                    ? `R$${spent.value} / ${spent.days} dias`
                    : "gasto fixo"}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.RowTitle}>Checklist</Text>
        <View>
          {checklist.map((spent) => (
            <View style={styles.spents} key={spent.id}>
              <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
                {spent.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  RowDirect: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  RowSeparated: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  RowTitle: {
    fontSize: 20,
    fontWeight: "medium",
    textAlign: "center",
    marginVertical: 20,
  },
  spents: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  spentTitle: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    gap: 15,
  },
  spentValue: {
    alignItems: "flex-end",
  },
});
