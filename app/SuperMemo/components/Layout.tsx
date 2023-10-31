import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Platform,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {Platform.OS === "android" && (
        <TouchableHighlight
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableHighlight>
      )}
      {children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  back: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
