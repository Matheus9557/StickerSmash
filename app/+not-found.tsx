import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Text style={styles.text}>`This screen doesn&apos;t exist.`</Text>
        <Link href="/" style={styles.link}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 16,
  },
  link: {
    color: "#ffd33d",
    fontSize: 16,
  },
});
