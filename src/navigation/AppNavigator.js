import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HabitScreen from '../screens/HabitScreen';
import FocusScreen from '../screens/FocusScreen';
import JournalScreen from '../screens/JournalScreen';
import OtherScreen from '../screens/OtherScreen';
import Loop from 'react-native-vector-icons/MaterialIcons';
import Focus from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'},
      }}>
      <Tab.Screen
        name="Habits"
        component={HabitScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Loop name={'loop'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Focus"
        component={FocusScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Focus name={'target'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Journal"
        component={JournalScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Loop name={'book'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Other"
        component={OtherScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Loop name={'settings'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
