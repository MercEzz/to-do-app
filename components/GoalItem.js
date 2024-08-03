import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, onClickHandler, id }) => {
  return (
    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={onClickHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
    borderRadius: 6,
    marginVertical: 5,
    backgroundColor: "#A43",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
