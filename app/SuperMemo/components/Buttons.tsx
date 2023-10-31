import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

interface ButtonProps {
  onPress: () => void;
  title?: string;
}

export function ButtonAdd(props: ButtonProps) {
  const { onPress, title = "Save" } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const onExpand = () => setIsExpanded(!isExpanded);

  return (
    <View>
      {isExpanded && (
        <View style={styles.expandedContainer}>
          <Button title="Ajouter une photo" onPress={() => {}} />
          <Button title="Ajouter un enregistrement" onPress={() => {}} />
          <Button title="Ajouter un texte" onPress={() => {}} />
        </View>
      )}
      <TouchableHighlight style={styles.button} onPress={onExpand}>
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "royalblue",
    padding: 10,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  expandedContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
    gap: 3,
  },
});
