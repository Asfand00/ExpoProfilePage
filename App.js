import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>User Profile</Text>
      </View>

      {/* Image Display */}
      <Image
        source={{ uri: 'https://via.placeholder.com/300' }}
        style={styles.image}
        resizeMode="cover" />

      {/* Information Section */}
      <ScrollView style={styles.infoSection}>
        <Text style={styles.infoText}>Name: John Doe</Text>
        <Text style={styles.infoText}>Age: 30</Text>
        <Text style={styles.infoText}>Location: New York</Text>
        <Text style={styles.infoText}>Email: john.doe@example.com</Text>
        <Text style={styles.infoText}>Bio: Male, 29, From Seattle WA</Text>
      </ScrollView>

      {/* Input Form */}
      <View style={styles.form}>
        <TextInput
          placeholder="Enter your name"
          style={styles.input} />
        <TextInput
          placeholder="Enter your comment"
          style={[styles.input, styles.commentInput]}
          multiline />
        <Text style={styles.submitButton}>Submit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  infoSection: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  commentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default App;
