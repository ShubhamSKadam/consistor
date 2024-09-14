import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HabitScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>HabitScreen</Text>
    </View>
  );
};

export default HabitScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
});
