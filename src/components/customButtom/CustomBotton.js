import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const CustomButton = props => {
    return (

        <View style={{height: hp('8%'),backgroundColor:'#64E986', width: wp('80%'), marginBottom: hp('2%'), borderRadius: 40, flexDirection: 'row', alignItems: 'center',justifyContent:'center', padding: 10 }}>
        <TouchableOpacity onPress={props.onPress} >
            <Text style={{textAlign: 'center',fontSize:22 ,color:'white',fontWeight:'bold'}}>{props.btnTxt}</Text>
        </TouchableOpacity>

    </View>
    )
}

export default CustomButton;

