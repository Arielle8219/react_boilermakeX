import React from 'react'
import { View, Text} from 'react-native'

const Stack = createNativeStackNavigator();

const Homescreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = (Homescreen) />
            
        </Stack.Navigator>
    )
}

export default Homescreen