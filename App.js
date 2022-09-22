import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Welcome</Text>
      <Text style={styles.subtitle}>With your account</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        keyboardType='email-address'
      />
      <TextInput
        style={styles.inputPassword}
        placeholder='Password'
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#160F29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: 80,
    color: '#368F8B',
    fontWeight: 'bold',
    fontFamily: 'sans-serif'
  },
  subtitle: {
    fontSize: 20,
    color: '#F3DFC1',
    fontFamily: 'sans-serif-light'
  },
  input: {
    borderColor: '#DDBEA8',
    backgroundColor: 'white',
    height: 40,
    marginTop: 12,
    borderWidth: 3,
    padding: 10,
    width: 300,
    borderRadius: 10
  },
  inputPassword: {
    borderColor: '#DDBEA8',
    backgroundColor: 'white',
    height: 40,
    marginTop: 5,
    borderWidth: 2,
    padding: 10,
    width: 300,
    borderRadius: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#368F8B',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: 100
  },
  textButton: {
    color: 'white'
  }
});
