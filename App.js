import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screens/Homescreen';
import { AuthProvider } from './hooks/useAuth';
import { LogBox } from 'react-native';
import { initializeApp } from 'firebase/app';
//import { firebaseConfig } from '../firebase';

export default function App() {
  return (
    <NavigationContainer>
      {/* higher order component - wrapping child component */} 
      <AuthProvider>
        {/* passes down the authorization stuff to children */}
        <StackNavigator />
      </AuthProvider>
     
    </NavigationContainer>
    
  );
};

