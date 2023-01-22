import React, { createContext, useContext, useEffect } from 'react'
import { View, Text, Button} from 'react-native'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Google from "expo-google-app-auth"
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';

const AuthContext = createContext({});
const config = {
    androidClientId: "1047725809272-aolua5nkka526e7m6qhq1bkqdsg9tt0f.apps.googleusercontent.com",
    iosClientId: '1047725809272-650pl4pfnragp6ri2ugcfd6vr4cclp5i.apps.googleusercontent.com', 
    scopes: ['profile', 'email'], 
    permissions: ['public_profile', 'email', 'gender', 'location'], 

}
//const Stack = createNativeStackNavigator();
//children is navigation stack
export const AuthProvider = ({children}) => {
    //const [error, setError] = useState(null);
    //rconst [user, setUser] = useState(null);
    /* useEffect{() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

            }
        })
    }, []} */
    const signinGoogle = async() => {
        await Google.logInAsync(config).then(async(logInResult) => {
            if (logInResult.type === "success") {
                /* const {idToken, accessToken } = logInResult;
                const credential = GoogleAuthProvider.credential(idToken, accessToken);
                await signInWith */Credential(auth, credential);
            }
            //return Promise.reject();
           
        });
       // .catch((error) => setError(error));
    };

    return (
        <AuthContext.Provider value = {{
            user: null,
            signinGoogle, 

        }}>
            {children}
        </AuthContext.Provider>
        
    );
};
export default function useAuth() {
    return useContext(AuthContext);
};