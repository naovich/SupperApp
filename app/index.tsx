import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { buttonPrimary } from "./SuperMemo/styles";

export default function HomeView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Super App</Text>
      <Link style={styles.link} href="SuperMemo">
        Super memo
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
