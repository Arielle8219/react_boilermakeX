import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button} from 'react-native'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Homescreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text> Homescreen </Text>
            <Button title = "Go to chat screen" onPress = {() => navigation.navigate("Chat")}/>
        </View>
    );
};

export default Homescreen;