import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <StackNavigator />
  );
}

