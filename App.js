import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Inicio from './inicio';
import HomeScreen from './screen/HomeScreen';

const { width, height } = Dimensions.get('window');

const InicioScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/images/page.jpeg')} 
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.title}>BIENVENIDO</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Inicio');
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName=".">
          <Stack.Screen name="InicioScreen" component={InicioScreen} />
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center', 
    paddingBottom: 50,
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    width: '80%', 
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#CG089',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default App;
