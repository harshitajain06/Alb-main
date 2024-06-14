// screens/ParentResourcesScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ParentResources = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideInAnim = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideInAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideInAnim]);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
        <Text style={styles.header}>Resources and Information for Parents/Caregivers</Text>
        <Image 
          style={styles.image}
          source={require('../assets/parents.jpg')}
        />
        <Text style={styles.text}>
          Caring for a child with albinism can come with unique challenges and opportunities. Here are some resources and information to help parents and caregivers provide the best support.
        </Text>
        <Animated.Text style={[styles.subheader, { transform: [{ translateX: slideInAnim }] }]}>Understanding Albinism</Animated.Text>
        <Animated.Text style={[styles.text, { opacity: fadeAnim, transform: [{ translateX: slideInAnim }] }]}>
          Albinism is a genetic condition that affects the production of melanin, resulting in little or no color in the skin, hair, and eyes. It's important for parents to understand the condition to better support their child.
        </Animated.Text>
        <Animated.Text style={[styles.subheader, { transform: [{ translateX: slideInAnim }] }]}>Health and Safety Tips</Animated.Text>
        <Animated.Text style={[styles.text, { opacity: fadeAnim, transform: [{ translateX: slideInAnim }] }]}>
          • <Text style={styles.bold}>Sun Protection</Text>: Children with albinism are more sensitive to UV radiation. Ensure they wear sunscreen, hats, and protective clothing.
          {"\n"}• <Text style={styles.bold}>Eye Care</Text>: Regular eye exams are crucial. Sunglasses and prescription glasses can help manage light sensitivity and vision issues.
        </Animated.Text>
        <Animated.Text style={[styles.subheader, { transform: [{ translateX: slideInAnim }] }]}>Educational Support</Animated.Text>
        <Animated.Text style={[styles.text, { opacity: fadeAnim, transform: [{ translateX: slideInAnim }] }]}>
          Children with albinism may require special accommodations at school due to vision problems. It's important to work with teachers and school administrators to create an inclusive learning environment.
        </Animated.Text>
        <Animated.Text style={[styles.subheader, { transform: [{ translateX: slideInAnim }] }]}>Emotional and Social Support</Animated.Text>
        <Animated.Text style={[styles.text, { opacity: fadeAnim, transform: [{ translateX: slideInAnim }] }]}>
          Support groups and counseling can be beneficial for both children and parents. Connecting with other families facing similar challenges can provide emotional support and practical advice.
        </Animated.Text>
        <Animated.Text style={[styles.subheader, { transform: [{ translateX: slideInAnim }] }]}>Helpful Resources</Animated.Text>
        <Animated.Text style={[styles.text, { opacity: fadeAnim, transform: [{ translateX: slideInAnim }] }]}>
          Here are some organizations and resources that offer valuable information and support for parents and caregivers:
        </Animated.Text>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.albinism.org')}>
          <Ionicons name="link-outline" size={18} color="#1E90FF" />
          <Text style={styles.linkText}>National Organization for Albinism and Hypopigmentation (NOAH)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.africanalbinism.org')}>
          <Ionicons name="link-outline" size={18} color="#1E90FF" />
          <Text style={styles.linkText}>Albinism Foundation of East Africa (AFEA)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.albinismawareness.org')}>
          <Ionicons name="link-outline" size={18} color="#1E90FF" />
          <Text style={styles.linkText}>Albinism Awareness Organization</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.albinismalliance.org')}>
          <Ionicons name="link-outline" size={18} color="#1E90FF" />
          <Text style={styles.linkText}>Albinism Alliance Group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.visionofchildren.org')}>
          <Ionicons name="link-outline" size={18} color="#1E90FF" />
          <Text style={styles.linkText}>Vision of Children Foundation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.rarediseases.org')}>
          <Ionicons name="link-outline" size={18} color="#1E90FF" />
          <Text style={styles.linkText}>National Organization for Rare Disorders (NORD)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.childrenandfamilies.org')}>
          <Ionicons name="link-outline" size={18} color="#1E90FF" />
          <Text style={styles.linkText}>Children and Families with Albinism Network</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.albinismfellowship.org')}>
          <Ionicons name="link-outline" size={18} color="#1E90FF" />
          <Text style={styles.linkText}>Albinism Fellowship UK</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#444',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: width * 0.6,
    borderRadius: 10,
    marginBottom: 20,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  linkText: {
    fontSize: 16,
    color: '#1E90FF',
    marginLeft: 5,
  },
});

export default ParentResources;
