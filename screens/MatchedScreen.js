import React from "react"; 
import {View, Text, TouchableOpacity, Image} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/core";
//import tw from "tailwind-rn";  

const MatchedScreen = () => {
    const navigation = useNavigation(); 
    const {params} = useRoute(); 

    const{loggedInProfile, userSwiped} = params; 

    // *** REPLACE URI WITH APPROPRIATE IMAGE
    return (
        <View style={[tw("h-full bg-red-500 pt-20"), {opacity: 0.89}]}>
            <View style={tw("justify-center px-10 pt-20")}>
                <Image 
                style={tw("h-20 w-full")}
                source = {{uri: "https://links.papareact.com/mg9"}} /> 
            </View>

            <Text style = {tw("text-white text-center mt-5")}>
                You and {userSwiped.displayName} matched!
            </Text> 

            <View style={tw("flew-row justify-evenly mt-5")}>
                <Image
                    style={tw("h-32 w-32 rounded-full")}
                    source={{
                        uri: LoggedInProfile.photoURL, 
                    }}
                />
            </View>

            <TouchableOpacity
                style={tw("bg-white m-5 px-10 py-8 rounded-full mt-20")}
                onPress={() => {
                    navigation.goBack(); 
                    navigation.navigate("Chat"); 
                }}
                >
                <Text style = {tw("text-center")}> Send a message... </Text>
            </TouchableOpacity> 
        </View>
            
    );  
}; 

export default MatchedScreen; 