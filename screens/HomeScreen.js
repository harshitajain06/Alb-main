// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { marginTop: 40 }]}
          onPress={() => navigation.navigate('GeneralInformation')}
        >
          <Text style={styles.buttonText}>General Information About Albinism</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ParentResources')}
        >
          <Text style={styles.buttonText}>Resources and Information for Parents/ Caregivers</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PWAResources')}
        >
          <Text style={styles.buttonText}>Resources and Information for PWAs (Persons with Albinism)</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DiscussionForum')}
        >
          <Text style={styles.buttonText}>Discussion Forum</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExpertAdvice')}
        >
          <Text style={styles.buttonText}>Seek Expert Advice</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '80%',
    height: '12%',
    borderRadius: 20,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
