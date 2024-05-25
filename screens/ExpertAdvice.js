// screens/ExpertAdviceScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpertAdviceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seek Expert Advice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
  },
});

export default ExpertAdviceScreen;
