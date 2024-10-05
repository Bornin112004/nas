import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nagrik Aur Samvidhan</Text>
      <View style={styles.buttonContainer}>
        <Button title="Know Your Constitution" onPress={() => navigation.navigate('KnowYourConstitution')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Play and Learn" onPress={() => navigation.navigate('PlayAndLearn')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 15, // Add space between buttons
    width: '80%',     // Optional: Make buttons take up 80% of the screen width
  },
});

export default HomeScreen;
