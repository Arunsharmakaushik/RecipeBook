import React, { useState, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import auth from '@react-native-firebase/auth';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ToastAndroid
} from 'react-native';
import Styles from './Styles';


export default function User({ route, navigation: { setParams, navigate } }) {
    {

        // const [Auth, setAuth] = useState()

        useEffect(() => {
            console.log(auth()._authResult)
            // setAuth(auth()._authResult)
        }, []);
        const logout = () => {

            auth()
                .signOut()
                .then(() => {

                    ToastAndroid.show("Logout Successfilly", ToastAndroid.SHORT)

                    navigate('Homeloginsignup')
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        }

        // console.log('mei chla')    
        return (

            <View >
                <View style={Styles.mainContainer}>
                    <TouchableOpacity onPress={() =>
                        navigate('Home')} >
                        <View style={[Styles.iconStyle, { alignItems: 'center' }]}>
                            <Icon name="left" color="black" size={22} style={{ margin: 13 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: wp('85%'), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={Styles.title}>Recipe</Text>
                        <Text style={[Styles.title, { color: "#64E986" }]}>book</Text>
                    </View>
                </View>
                <View style={{ height: hp('70%') }}>
                    <View style={Styles.textViewContainer}>

                        <View style={Styles.iconStyle}>
                            <Icon name="exclamationcircle" color="black" size={25} style={{ margin: 13 }} />
                        </View>
                        <View style={Styles.textStyle}>
                            <Text style={Styles.text}>
                                App Info
                            </Text>
                        </View>
                        <View style={Styles.iconStyle}>
                            <Icon name="right" color="black" size={22} style={{ margin: 13 }} />
                        </View>
                    </View>
                    <View style={Styles.textViewContainer}>

                        <View style={Styles.iconStyle}>
                            <Icons name="account-circle" color="black" size={28} style={{ margin: 13 }} />
                        </View>
                        <View style={Styles.textStyle}>
                            <Text style={Styles.text}>
                                Profiel
                            </Text>
                        </View>
                        <View style={Styles.iconStyle}>
                            <Icon name="right" color="black" size={22} style={{ margin: 13 }} />
                        </View>
                    </View>
                    <View style={Styles.textViewContainer}>
                        <View style={Styles.iconStyle}>
                            <Icons name="bell" color="black" size={25} style={{ margin: 13 }} />
                        </View>
                        <View style={Styles.textStyle}>
                            <Text style={Styles.text}>
                                Push Notifications
                            </Text>
                        </View>
                        <View style={Styles.iconStyle}>
                            <Icon name="right" color="black" size={22} style={{ margin: 13 }} />
                        </View>
                    </View>
                    <View style={Styles.textViewContainer}>
                        <View style={Styles.iconStyle}>
                            <Icon name="questioncircle" color="black" size={25} style={{ margin: 13 }} />
                        </View>
                        <View style={Styles.textStyle}>
                            <Text style={Styles.text}>
                                Tips? Laat het ons weten
                            </Text>
                        </View>
                        <View style={{ width: wp('15%'), justifyContent: 'center' }}>
                            <Icon name="right" color="black" size={22} style={{ margin: 13 }} />
                        </View>
                    </View>

                    <View style={Styles.textViewContainer}>
                        <TouchableOpacity onPress={() =>
                            navigate('Homeloginsignup'), logout} style={{ flexDirection: "row" }} >
                            <View style={Styles.iconStyle}>
                                <Icon name="enter" color="black" size={25} style={{ margin: 13 }} />
                            </View>
                            <View style={Styles.textStyle}>
                                <Text style={Styles.text}>
                                    Logout
                            </Text>
                            </View>
                        </TouchableOpacity>

                    </View>


                </View>
            </View>
        );
    }
}
