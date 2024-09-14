import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HabitScreen from '../screens/HabitScreen';
import FocusScreen from '../screens/FocusScreen';
import JournalScreen from '../screens/JournalScreen';
import OtherScreen from '../screens/OtherScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Habits" component={HabitScreen} />
      <Tab.Screen name="Focus" component={FocusScreen} />
      <Tab.Screen name="Journal" component={JournalScreen} />
      <Tab.Screen name="Other" component={OtherScreen} />
    </Tab.Navigator>
  );
}
