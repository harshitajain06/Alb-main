// PWAResourcesScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const PWAResourcesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Resources and Information for Persons with Albinism (PWAs)</Text>

      <View style={styles.section}>
      <Image source={{ uri: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg' }} style={styles.image} />
        <Text style={styles.text}>
          Albinism is a genetic condition characterized by a lack of melanin pigment in the skin, hair, and eyes, leading to increased vulnerability to sun exposure and vision problems.
        </Text>
      </View>

      <View style={styles.section}>
        
        <Image source={{ uri: 'https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg' }} style={styles.image} />
        <Text style={styles.subHeader}>Health and Medical Resources</Text>
        <Text style={styles.text}>
          - Regular eye exams and protective eyewear can help manage vision problems.{'\n'}
          - Use sunscreen and wear protective clothing to reduce skin damage from UV radiation.{'\n'}
          - Regular skin check-ups with a dermatologist are recommended.
        </Text>
      </View>

      <View style={styles.section}>
        <Image source={{ uri: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg' }} style={styles.image} />
        
        <Text style={styles.subHeader}>Educational Support</Text>
        <Text style={styles.text}>
          - Special education services may be required to support visual impairments.{'\n'}
          - Encourage the use of assistive devices like magnifiers or screen readers.
        </Text>
      </View>

      <View style={styles.section}>
        
        <Image source={{ uri: 'https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg' }} style={styles.image} />
        <Text style={styles.subHeader}>Community and Support Groups</Text>
        <Text style={styles.text}>
          - Joining support groups can provide emotional support and practical advice.{'\n'}
          - Organizations like the National Organization for Albinism and Hypopigmentation (NOAH) offer resources and support.
        </Text>
      </View>

      <View style={styles.section}>
        
        <Image source={{ uri: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg' }} style={styles.image} />
        <Text style={styles.subHeader}>Legal Rights and Advocacy</Text>
        <Text style={styles.text}>
          - Understand your rights under disability laws and seek accommodations in education and employment.{'\n'}
          - Advocacy groups can help with legal support and awareness campaigns.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2c3e50',
  },
  section: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#34495e',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#7f8c8d',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
});

export default PWAResourcesScreen;
