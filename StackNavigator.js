import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Homescreen from "./screens/Homescreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {Homescreen} />

        </Stack.Navigator>
    )
}

export default StackNavigator