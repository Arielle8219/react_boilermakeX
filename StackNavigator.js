import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Homescreen from "./screens/Homescreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import MatchScreen from "./screens/MatchedScreen";
import ModalScreen from "./screens/ModalScreen";
import MessageScreen from "./screens/MessageScreen";
import useAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const {user} = useAuth();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, 
            }}
            >

            {user ? (
            <>
            <Stack.Group>
                <Stack.Screen name = "Home" component = {Homescreen} />
                <Stack.Screen name = "Chat" component = {ChatScreen} />
                <Stack.Screen name = "Message" component = {MessageScreen} />
            </Stack.Group>
            <Stack.Group screenOptions = {{presentation: "modal"}}>
                <Stack.Screen name = "Modal" component={ModalScreen} />
            </Stack.Group>
            <Stack.Group screenOptions= {{presentation: "transparentModal"}}>
                <Stack.Screen name = "Match" component = {MatchScreen} />
            </Stack.Group> 
            </>
            ) : (
                <Stack.Screen name = "Login" component = {LoginScreen} />
            )}
        </Stack.Navigator>
    );
};

export default StackNavigator;