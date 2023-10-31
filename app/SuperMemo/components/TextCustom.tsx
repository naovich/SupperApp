import { View, Image, Text } from "react-native";

export interface TextViewProps {
  text: string;
}

const TextCustom = ({ text }: TextViewProps) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default TextCustom;
