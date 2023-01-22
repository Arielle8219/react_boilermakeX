import React from 'react';
import {View, Text} from 'react-native';

const ReceiverMessage = ( {message} ) => {
    return (
        <View>
            style = {[
                tw("bg-red-400 rounded-lg rounded-tl-none px-5 py-3 mx-3 my-2 ml-14"),
                { alignSelf: "flex-start"},
            ]}
            <Text style = {tw("text-white")}>
                {message.message}</Text>
        </View>
    )
}

export default ReceiverMessage