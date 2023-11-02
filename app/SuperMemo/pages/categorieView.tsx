import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

const categoryList = [
  {
    id: 1,
    name: "Mathématiques",
    slug: "mathematiques",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 2,
    name: "Histoire",
    slug: "histoire",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 3,
    name: "Géographie",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 4,
    name: "Anglais",
    slug: "anglais",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 5,
    name: "Français",
    slug: "francais",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 6,
    name: "Physique",
    slug: "physique",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 7,
    name: "Chimie",
    slug: "chimie",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 8,
    name: "SVT",
    slug: "svt",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 9,
    name: "Espagnol",
    slug: "espagnol",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 10,
    name: "Allemand",
    slug: "allemand",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 11,
    name: "Italien",
    slug: "italien",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 12,
    name: "Portugais",
    slug: "portugais",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 13,
    name: "Russe",
    slug: "russe",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 14,
    name: "Chinois",
    slug: "chinois",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 15,
    name: "Japonais",
    slug: "japonais",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 16,
    name: "Coréen",
    slug: "coreen",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 17,
    name: "Arabe",
    slug: "arabe",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 18,
    name: "Latin",
    slug: "latin",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 19,
    name: "Grec",
    slug: "grec",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 20,
    name: "Informatique",
    slug: "informatique",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 21,
    name: "Philosophie",
    slug: "philosophie",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 22,
    name: "Economie",
    slug: "economie",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
  {
    id: 23,
    name: "Droit",
    slug: "droit",
    image: "https://i.imgur.com/7JX0w5S.png",
  },
];

const Category = () => {
  return (
    <ScrollView style={styles.contain}>
      {categoryList.map((category) => (
        <View style={styles.category} key={category.id}>
          <Link href="SuperMemo/pages/SubCategorieView">
            <Text style={styles.text}>{category.name}</Text>
          </Link>
        </View>
      ))}
    </ScrollView>
  );
};

export default Category;

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
