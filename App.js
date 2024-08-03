import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function openAddGoalFunction() {
    setShowModal(true);
  }

  function closeAddGoalFunction() {
    setShowModal(false);
  }

  function addGoalHandler(enteredGoal) {
    setCourseGoals((prevState) => [
      ...prevState,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    closeAddGoalFunction();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={openAddGoalFunction}
        />
        <GoalInput
          onClickHandler={addGoalHandler}
          closeModal={closeAddGoalFunction}
          showModal={showModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  item={itemData.item.text}
                  id={itemData.item.id}
                  onClickHandler={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
