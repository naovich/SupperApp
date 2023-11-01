import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { buttonPrimary } from "../styles";
import { ButtonAdd } from "../components/Buttons";
import DataViewer from "../components/DataViewer";

import Layout from "../components/Layout";

const uri =
  "https://plus.unsplash.com/premium_photo-1698521961685-ba2dd650e626?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function HomeView() {
  return (
    <Layout>
      <View style={styles.container}>
        <DataViewer
          dataItems={[
            { uri: uri },
            { text: "Ceci est un texte" },
            { text: "Ceci est un deuxième texte" },
            { audioFile: require("../assets/win.mp3") },
            { uri: uri },
            { text: "Ceci est un texte" },
            { text: "Ceci est un deuxième texte" },
            { audioFile: require("../assets/win.mp3") },
          ]}
        />

        {/*<View style={styles.addButton}>
        <ButtonAdd title="+" onPress={() => setIsExpanded(!isExpanded)} />
      </View>*/}

        <StatusBar style="auto" />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: "100%",
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
  expandedContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  addButton: {
    marginTop: 10,
    position: "absolute",
    bottom: 30,
    left: 30,
  },
  saveButton: {
    marginBottom: 10,
  },
});
