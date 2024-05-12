import { StyleSheet, View, Pressable, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.view}>
      <View style={styles.buttonsContainer}>
        <View style={styles.lineButtonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Week plan</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>My diet</Text>
          </Pressable>
        </View>
        <View style={styles.lineButtonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Avoid this</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>My profile</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingTop: 280,
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
  lineButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    backgroundColor: "#EAFFE2",
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowOffset: { width: -2, height: 2 },
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 22,
  },
  view: { backgroundColor: "white", height: "100%" },
});
