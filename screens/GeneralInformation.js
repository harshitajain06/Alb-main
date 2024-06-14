// screens/GeneralInformationScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

const GeneralInformation = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>General Information About Albinism</Text>
        <Image 
          style={styles.image}
          source={require('../assets/alb.jpg')}
        />
        <Text style={styles.text}>
          Albinism is a genetic condition characterized by a lack of melanin, the pigment that gives skin, hair, and eyes their color. Individuals with albinism often have very light skin and hair and may have vision problems.
        </Text>
        <Text style={styles.subheader}>Types of Albinism</Text>
        <Text style={styles.text}>
          There are several types of albinism, including:
          {"\n\n"}• <Text style={styles.bold}>Oculocutaneous Albinism (OCA)</Text>: Affects the skin, hair, and eyes. It is the most common type.
          {"\n"}• <Text style={styles.bold}>Ocular Albinism</Text>: Primarily affects the eyes, while skin and hair may appear similar to those without the condition.
        </Text>
        <Text style={styles.subheader}>Causes</Text>
        <Text style={styles.text}>
          Albinism is caused by mutations in specific genes that are involved in the production of melanin. These mutations can be inherited in an autosomal recessive manner, meaning a person needs to inherit two copies of the mutated gene to have the condition.
        </Text>
        <Text style={styles.subheader}>Symptoms</Text>
        <Text style={styles.text}>
          Common symptoms include:
          {"\n\n"}• Very light skin, hair, and eyes
          {"\n"}• Sensitivity to sun exposure and increased risk of skin cancer
          {"\n"}• Vision problems such as reduced visual acuity, photophobia, nystagmus, and strabismus
        </Text>
        <Text style={styles.subheader}>Diagnosis</Text>
        <Text style={styles.text}>
          Diagnosis of albinism involves:
          {"\n\n"}• Physical examination
          {"\n"}• Detailed eye examination
          {"\n"}• Genetic testing to identify mutations
        </Text>
        <Text style={styles.subheader}>Management and Treatment</Text>
        <Text style={styles.text}>
          While there is no cure for albinism, management includes:
          {"\n\n"}• Protecting skin and eyes from the sun with sunscreen, sunglasses, and protective clothing
          {"\n"}• Regular eye check-ups and corrective lenses
          {"\n"}• Education and support for vision impairments
        </Text>
        <Text style={styles.subheader}>Living with Albinism</Text>
        <Text style={styles.text}>
          Individuals with albinism can lead full and active lives. Education, support groups, and resources tailored to their needs can help them navigate challenges related to vision and skin care.
        </Text>
        <Text style={styles.subheader}>Additional Resources</Text>
        <Text style={styles.text}>
          For more information, consider reaching out to organizations such as:
        </Text>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.albinism.org')}>
          <Ionicons name="link-outline" size={18} color="#000" />
          <Text style={styles.linkText}>National Organization for Albinism and Hypopigmentation (NOAH)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.africanalbinism.org')}>
          <Ionicons name="link-outline" size={18} color="#000" />
          <Text style={styles.linkText}>Albinism Foundation of East Africa (AFEA)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.albinismawareness.org')}>
          <Ionicons name="link-outline" size={18} color="#000" />
          <Text style={styles.linkText}>Albinism Awareness Organization</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
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
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  linkText: {
    fontSize: 16,
    color: '#1E90FF',
    marginLeft: 5,
  },
});

export default GeneralInformation;
