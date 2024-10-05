// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import KnowYourConstitution from '../components/KnowYourConstitution';
import PlayAndLearn from '../components/PlayAndLearn';
import Leaderboard from '../components/Leaderboard';

export type RootStackParamList = {
  Home: undefined;
  KnowYourConstitution: undefined;
  PlayAndLearn: undefined;
  Leaderboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="KnowYourConstitution" component={KnowYourConstitution} />
      <Stack.Screen name="PlayAndLearn" component={PlayAndLearn} />
      <Stack.Screen name="Leaderboard" component={Leaderboard} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
