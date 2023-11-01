import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";

const categoryList = [
  {
    id: 1,
    name: "Algébre",
    slug: "algebre",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 2,
    name: "Géométrie",
    slug: "geometrie",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 3,
    name: "Trigonométrie",
    slug: "trigonometrie",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
];

const SubCategory = () => {
  return (
    <ScrollView style={styles.contain}>
      {categoryList.map((category) => (
        <View style={styles.category} key={category.id}>
          <Link href="SuperMemo/pages/addKnowledgeView">
            <Text style={styles.text}>{category.name}</Text>
          </Link>
        </View>
      ))}
    </ScrollView>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  contain: {
    width: "100%",
    padding: 10,
  },
  category: {
    width: "100%",
    flexDirection: "column",
    borderBottomWidth: 1,
    borderColor: "royalblue",
    gao: 3,
  },
  text: {
    padding: 10,
    fontSize: 20,
    width: "100%",
    fontWeight: "bold",
  },
});
