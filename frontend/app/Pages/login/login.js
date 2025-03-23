// login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = ({ navigation }) => {
    const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logique de connexion
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur ou e-mail"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/Pages/login/singup')}>
        <Text style={styles.link}>Pas de compte ? Inscrivez-vous</Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => router.push('/Pages/accueil/home')}>
        <Text style={styles.link}>Accueil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white', 
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: "bold",
    
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    marginTop: 15,
    color: 'blue',
    textAlign: 'center',
  },
});

export default LoginScreen;