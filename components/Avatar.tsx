import { Image, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";

export function Avatar() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../assets/images/avatar.png")}
        style={styles.image}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#1A1A1A",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
