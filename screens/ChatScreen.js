import React from 'react';
import { SafeAreaView, Text} from 'react-native';
import { Header } from "../components/Header";
import { ChatList} from "../components/ChatList";
//import { createNativeStackNavigator } from '@react-navigation/native-stack'

//const Stack = createNativeStackNavigator();

const ChatScreen = () => {
    return (
        <SafeAreaView>
            <Header title = 'Chat' />
            <ChatList />
        </SafeAreaView>
    );
};

export default ChatScreen;