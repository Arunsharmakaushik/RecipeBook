import React, { useState, useEffect } from 'react';

import auth from '@react-native-firebase/auth';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    ToastAndroid,
    TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import Images from '../../assests/Images'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import CustomButton from '../../components/customButtom/CustomBotton'
export default function Login({ navigation: { navigate } }) {

 
    // const [keyCheck, setkeyCheck] = useState({visible:false})
    
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    // Handle user state changes
    const login=()=>
    {
        
      if(Email!="" && Password!="")
      {
        // console.log("ZIndabaad hai or rahenge")
        auth()
        .signInWithEmailAndPassword(Email, Password)
        .then(() => {
           
            console.log('Login in!');
            ToastAndroid.show("Login Successfully!!",ToastAndroid.SHORT)
             navigate('BottomTabNavigator' )
             
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                ToastAndroid.show("Invalid Email and password",ToastAndroid.SHORT)
            }

            if (error.code === 'auth/invalid-email') {
                ToastAndroid.show("Invalid Email and password",ToastAndroid.SHORT)
            }

            console.error(error);
        });
       }
      else
      {
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
                    <Text style={{ fontWeight: "bold", fontSize: 25, color: "white" }}>Login to Your Own Account on </Text>
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
                   <CustomButton onPress={()=>login()} btnTxt="Login To Your Account" />
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