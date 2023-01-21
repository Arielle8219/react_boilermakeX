import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Homescreen from "./screens/Homescreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {Homescreen} />
            <Stack.Screen name = "Chat" component = {ChatScreen} />
            <Stack.Screen name = "Login" component = {LoginScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;