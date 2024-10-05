// src/components/PlayAndLearn.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LLMService from '../utils/LLMService';

const PlayAndLearn: React.FC = () => {
  const [question, setQuestion] = React.useState('');

  const generateQuestion = () => {
    LLMService.generateQuestion().then(setQuestion);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <Button title="Generate Question" onPress={generateQuestion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default PlayAndLearn;
