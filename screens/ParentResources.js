// screens/ParentResourcesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ParentResourcesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Resources and Information for Parents/Caregivers</Text>
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

export default ParentResourcesScreen;
