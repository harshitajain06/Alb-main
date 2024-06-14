// ExpertAdviceScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Linking } from 'react-native';

const ExpertAdviceScreen = () => {
  const experts = [
    {
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      contact: "jane.smith@gmail.com",
      image: "https://images.pexels.com/photos/5207080/pexels-photo-5207080.jpeg"
    },
    {
      name: "Dr. John Doe",
      specialty: "Ophthalmologist",
      contact: "john.doe@gmail.com",
      image: "https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg"
    },
    {
      name: "Ms. Sarah Johnson",
      specialty: "Special Education Teacher",
      contact: "sarah.johnson@gmail.com",
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg"
    },
    {
      name: "Mr. Michael Brown",
      specialty: "Legal Advocate",
      contact: "michael.brown@gmail.com",
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg"
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Seek Expert Advice</Text>

      <View style={styles.section}>
        <Image source={{ uri: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg' }} style={styles.image} />
        <Text style={styles.subHeader}>Why Seek Expert Advice?</Text>
        <Text style={styles.text}>
          Seeking advice from experts can provide valuable insights and guidance, especially when dealing with albinism. Experts can help you understand the condition better, manage health concerns, and provide support in various aspects of life.
        </Text>
      </View>

      <View style={styles.section}>
        <Image source={{ uri: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg' }} style={styles.image} />
        <Text style={styles.subHeader}>Types of Experts</Text>
        <Text style={styles.text}>
          - **Medical Experts**: Dermatologists, ophthalmologists, and general practitioners can provide medical care and advice.{'\n'}
          - **Educational Experts**: Special education teachers and educational psychologists can assist with learning needs.{'\n'}
          - **Legal Experts**: Lawyers and advocates can help with understanding rights and obtaining necessary accommodations.{'\n'}
          - **Support Groups and Counselors**: Emotional and psychological support from professionals and peer groups.
        </Text>
      </View>

      <View style={styles.section}>
        <Image source={{ uri: 'https://images.pexels.com/photos/3184393/pexels-photo-3184393.jpeg' }} style={styles.image} />
        <Text style={styles.subHeader}>Finding the Right Experts</Text>
        <Text style={styles.text}>
          - **Referrals**: Ask your primary care doctor for referrals to specialists.{'\n'}
          - **Research**: Look for experts with experience in albinism or similar conditions.{'\n'}
          - **Online Resources**: Use reputable websites and forums to find recommended professionals.{'\n'}
          - **Local Organizations**: Contact local or national organizations dedicated to albinism for advice and resources.
        </Text>
      </View>

      <View style={styles.section}>
        <Image source={{ uri: 'https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg' }} style={styles.image} />
        <Text style={styles.subHeader}>Experts You Can Contact</Text>
        {experts.map((expert, index) => (
          <View key={index} style={styles.expertContainer}>
            <Image source={{ uri: expert.image }} style={styles.expertImage} />
            <View style={styles.expertInfo}>
              <Text style={styles.expertName}>{expert.name}</Text>
              <Text style={styles.expertSpecialty}>{expert.specialty}</Text>
              <Text style={styles.expertContact} onPress={() => Linking.openURL(`mailto:${expert.contact}`)}>{expert.contact}</Text>
            </View>
          </View>
        ))}
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
  expertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  expertImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  expertInfo: {
    flex: 1,
  },
  expertName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  expertSpecialty: {
    fontSize: 14,
    color: '#34495e',
  },
  expertContact: {
    fontSize: 14,
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});

export default ExpertAdviceScreen;
