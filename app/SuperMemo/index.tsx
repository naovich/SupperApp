import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { buttonPrimary } from "./styles";
import Layout from "./components/Layout";

export default function HomeView() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Super Mémo</Text>

        <Link style={styles.link} href="SuperMemo/pages/categorieView">
          Categorie
        </Link>

        <StatusBar style="auto" />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    ...buttonPrimary,
  },
});
