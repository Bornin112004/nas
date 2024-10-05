// src/components/Leaderboard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Leaderboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.position}>Your Position: High Court Judge</Text>
      <Text style={styles.score}>Your Score: 95</Text>
      <Text style={styles.players}>Other Players:</Text>
      <Text>1. Player One</Text>
      <Text>2. Player Two</Text>
      <Text>3. Player Three</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  position: {
    fontSize: 20,
    marginBottom: 10,
  },
  score: {
    fontSize: 18,
    marginBottom: 10,
  },
  players: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Leaderboard;
