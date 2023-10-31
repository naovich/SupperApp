import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageCustom, { ImageViewProps } from "./ImageCustom";
import TextCustom, { TextViewProps } from "./TextCustom";
import AudioCustom, { AudioCustomProps } from "./AudioCustom";

/*interface DataViewerProps {
  children: React.ReactNode;
}*/
/*
interface DataProps {
  type: string;
}
[];
*/

interface DataViewerProps {
  dataItems: Array<ImageViewProps | TextViewProps | AudioCustomProps>;
}

const DataViewer: React.FC<DataViewerProps> = ({ dataItems }) => {
  return (
    <ScrollView style={styles.container}>
      {dataItems.map((item, index) => (
        <View key={index} style={styles.child}>
          <DataRenderer data={item} />
        </View>
      ))}
    </ScrollView>
  );
};

export default DataViewer;

interface DataRendererProps {
  data: ImageViewProps | TextViewProps | AudioCustomProps;
}

const DataRenderer: React.FC<DataRendererProps> = ({ data }) => {
  if ("uri" in data) {
    return <ImageCustom {...data} />;
  }
  if ("text" in data) {
    return <TextCustom {...data} />;
  }
  if ("audioFile" in data) {
    return <AudioCustom {...data} />;
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  child: {
    marginBottom: 5,
  },
});
