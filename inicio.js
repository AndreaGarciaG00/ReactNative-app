import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screen/HomeScreen';

const Stack = createNativeStackNavigator();

const InicioScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleIniciarPress = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isEmailValid = emailRegex.test(form.email);
    const isPasswordValid = form.password.length >= 8;

    if (isEmailValid && isPasswordValid) {
      console.log('Un usuario ha ingresado');
      navigation.navigate('HomeScreen');
    } else {
      // Mensaje de error
      console.log('Error: Ingrese un correo electronico valido y una contraseña de al menos 8 caracteres');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: 'https://img.freepik.com/vector-gratis/fondo-diseno-textura-acuarela-azul-suave_1055-15955.jpg',
        }}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>Bienvenido!</Text>
          <Text style={styles.subtitle}>Descubre tu hogar temporal, donde las historias se tejen y los recuerdos florecen. Tu escape perfecto comienza aquí</Text>

          <View style={styles.form}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(email) => setForm({ ...form, email })}
              placeholder="email"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />

            <TextInput
              autoCorrect={false}
              onChangeText={(password) => setForm({ ...form, password })}
              placeholder="password"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />

            <View style={styles.formAction}>
              <TouchableOpacity onPress={handleIniciarPress}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Iniciar</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                }}
              >
                <Text style={styles.formFooter}>
                  ¿Aun no tienes una cuenta?{' '}
                  <Text style={styles.linkText}>Registrate</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffff',
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  form: {
    marginTop: 24,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    marginBottom: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
    color: 'black',
  },
});

export default InicioScreen;
