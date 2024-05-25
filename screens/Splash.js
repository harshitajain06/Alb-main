import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Splash = ({ navigation })  => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Albinoaware</Text>
      <Text style={styles.subtitle}>Welcome to Albinoaware</Text>
      <Text style={styles.description}>Sign up or login to find resources</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Continue as guest pressed")}>
          <Text style={styles.buttonText}>Continue as guest</Text>
        </TouchableOpacity>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 50, // Make it circular by setting borderRadius to half of width and height
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Splash;
