import React, { useEffect } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/core";
import useAuth from '../hooks/useAuth';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';
//import tw from "tailwind-rn";

const ChatRow = ({ matchDetails }) => {

    const navigation = useNavigation();
    const { user } = useAuth();
    const [matchedUserInfo, setMatchedUserInfo] = useState(null);

    useEffect( () => {
        setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid))
    }, [matchDetails, user]);

    return (
        <TouchableOpacity>
            style = {[
                tw("flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg"),
                styles.cardShadow,
            ]}


-----------------------------------------------------------------
    // CORRESPONDS TO MESSAGESCREEN.JS (4:48:18), uncomment later 
            onPress={() =>
                navigation.navigate("Message", {
                    matchDetails, 
                })
            }
----------------------------------------------------------------
            
    


            <Image
                style = {tw("rounded-full h-16 w-16 mr-4")}
                source = {{ uri: matchedUserInfo?.photoURL }}
            />

            <View>
                <Text style= {tw("text-lg font-semibold")} >
                    {matchedUserInfo?.displayName}
                </Text>
                <Text>Say Hi!</Text>
            </View>

        </TouchableOpacity>
    )
}

export default ChatRow;

const Styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
});