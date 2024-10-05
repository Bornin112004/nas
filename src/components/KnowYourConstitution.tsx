// src/components/KnowYourConstitution.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ConstitutionAPI from '../utils/ConstitutionAPI';

const KnowYourConstitution: React.FC = () => {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    ConstitutionAPI.fetchContent().then(setContent);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    fontSize: 16,
  },
});

export default KnowYourConstitution;
