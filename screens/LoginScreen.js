import React from 'react'
import { View, Text, Button} from 'react-native'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useAuth from '../hooks/useAuth';
//const Stack = createNativeStackNavigator();

const LoginScreen = () => {
        const { signinGoogle } = useAuth();
    return (
        <View>
            <Text> Login </Text>
            <Button title = "Login" onPress = {signinGoogle} />
        </View>
    );
};

export default LoginScreen;