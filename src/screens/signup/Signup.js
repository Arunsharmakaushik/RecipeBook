import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import {
    View,
    Image,
    Text,
    ToastAndroid,
    StyleSheet,
    TextInput, TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import CustomButton from '../../components/customButtom/CustomBotton'
import Styles from './Styles';

export default function Singup({ navigation: { navigate } }) {


    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const register = () => {

        if (Email != "" && Password != "") {
            console.log("ZIndabaad")
            auth()
                .createUserWithEmailAndPassword(Email, Password)
                .then(() => {
                    console.log('User account created & signed in!');
                    ToastAndroid.show("Account Created Successfully!!", ToastAndroid.SHORT)
                    navigate('Login')
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        ToastAndroid.show("Already in use", ToastAndroid.SHORT)
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        ToastAndroid.show("Invalid Email and password", ToastAndroid.SHORT)
                    }

                    console.error(error);
                });
        }
        else {
            console.log("kuj daal bro")
        }
    }
    return (
      
        <View >
            <View style={Styles.mainContainer}>
                <View style={Styles.titleContainer}>
                    <Text style={Styles.titleText}>Recipe</Text>
                    <Text style={Styles.titletexxt}>book</Text>
                </View>
                <View style={Styles.subTitle}>
                    <Text style={{ fontWeight: "bold", fontSize: 25, color: "white" }}>Create Your Own Account on </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 27, color: "#64E986" }}>Recipe book</Text>

                </View>
            </View>
            <View style={Styles.ScrollContainer}>
        <KeyboardAwareScrollView  enableOnAndroid={true} >
                
                <View style={Styles.formContainer}>
                    <View style={Styles.formInner}>
                        <Icon name="account" color="black" size={25} />
                        <TextInput style={{ marginHorizontal: 5 }} value={Email} onChangeText={(value) => setEmail(value)} placeholder="Email" />
                    </View>
                    <View style={Styles.formInner}>
                        <Icons name="lock" color="black" size={25} />
                        <TextInput style={{ marginHorizontal: 5 }} value={Password} onChangeText={(value) => setPassword(value)} placeholder="Password" />

                    </View>
                    <CustomButton onPress={()=>register()} btnTxt="Create Your Account" />
                    <View style={Styles.bottomText}>
                       <Text style={Styles.bottomTextt}>
                           Bij het gebruik van deze app gaat u akkoord met onze algemene voorwaarden en privacy verklaring
                       </Text>

                    </View>

                </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    );

}
