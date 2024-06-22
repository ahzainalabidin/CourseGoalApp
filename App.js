import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>

      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
            />);
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
