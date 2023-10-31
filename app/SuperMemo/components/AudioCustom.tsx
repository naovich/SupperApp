import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import { Audio } from "expo-av";

interface PlayButtonProps {
  onPlay: () => void;
}
export interface AudioCustomProps {
  audioFile: any;
}

export default function AudioCustom({ audioFile }: AudioCustomProps) {
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(audioFile);
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <PlayButton onPlay={playSound} />
    </View>
  );
}

const PlayButton = ({ onPlay }: PlayButtonProps) => {
  return (
    <TouchableHighlight style={styles.playButton} onPress={onPlay}>
      <Text style={styles.play}>Play</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  playButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "royalblue",
    padding: 10,
  },
  play: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
