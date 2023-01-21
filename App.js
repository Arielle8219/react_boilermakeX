import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screens/Homescreen';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    
  );
};

