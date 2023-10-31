import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

export interface ImageViewProps {
  uri: string;
}

const ImageCustom = ({ uri }: ImageViewProps) => {
  const [imageHeight, setImageHeight] = useState<number>(0);

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      const aspectRatio = height / width;
      const screenWidth = Dimensions.get("window").width;
      setImageHeight(screenWidth * aspectRatio);
    });
  }, [uri]);

  return (
    <View>
      <Image
        style={[styles.image, { height: imageHeight }]}
        source={{ uri: uri }}
      />
    </View>
  );
};

export default ImageCustom;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    backgroundColor: "#ecf0f1",
  },
});
