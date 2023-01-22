import React from "react"; 
import {View, Text} from "react-native";
//import tw from "tailwind-rn"; 
import useAuth from "../hooks/useAuth";  

const ModalScreen = () => {
    const {user} = useAuth(); 
    const navigation = useNavigation(); 
    const[image, setImage] = useState(null); 
    const[job, setJob] = useState(null);
    const [age, setAge] = useState(null);  

    const incompleteForm = !image || !job || !age;
    
    // ** PULLS FROM THE DATABASE (db), uncomment when it's ready **
    /* 
    const updateUserProfile = () => {
        setDoc(doc(db, "users", user.uid), {
            id: user.uid, 
            displayName:user.displayName, 
            photoURL: image, 
            job: job, 
            age: age, 
            timestamp: serverTimeStamp(), 
        })
            .then(() => {
                navigation.navigate("Home"); 
            })
            .catch((error) => {
                alert(error.message); 
            });
    }; 
    */

    return (
        <View style = {tw("flew-1 items-center pt-1")}>
            <Image
                style={tw("h-20 w-full")}
                resizeMode = "contain"
                source={{url: "https://media.istockphoto.com/id/1366997840/nl/vector/vector-illustration-of-shower-head-isolated.jpg?s=612x612&w=0&k=20&c=3ABvQ93NIwbjKKoSNoubgd4hXORtb95WY4EvAdDGQh4="}}
                />
            <Text style = {tw("test-xl text-gray-500 p-2 font-bold")}>
                Welcome {user.displayName} 
            </Text>

            <Text style = {tw("test-center text-red-400 p-4 font-bold")}>
                Step 1: The Profile Pic 
            </Text>
            <TextInput
            value = {image}
            onChangeText={setImage} 
                style = {tw("test-center test-xl pb-2")}
                placeholder="Enter a Profile Pic URL"
            />

            <Text style = {tw("test-center text-red-400 p-4 font-bold")}>
                Step 2: The Job 
            </Text>
            <TextInput
            value = {job}
            onChangeText={setJob}  
                style = {tw("test-center test-xl pb-2")}
                placeholder="Enter your occupation "
            />   

            <Text style = {tw("test-center text-red-400 p-4 font-bold")}>
                Step 1: The Age 
            </Text>
            <TextInput 
            value = {age}
            onChangeText={setAge} 
                style = {tw("test-center test-xl pb-2")}
                placeholder="Enter your age"
                keyboardType = "numeric"
                maxLength={2}
            /> 

            <TouchableOpacity
                disabled={IncompleteForm}
                style={[
                    tw("w-64 p-3 rounded-xl absolute bottom-10"), 
                    incompleteForm ? tw("bg-gray-400") : tw("bg-red-400"), 
                ]}
                onPress={updateUserProfile}
            >
                <Text style = {tw("text-center text-white text-xl")}> Update Profile 
                </Text>
            </TouchableOpacity>      
        </View>
    ); 
};

export default ModalScreen; 