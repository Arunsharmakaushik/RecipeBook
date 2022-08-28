import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Strings from '../../utils/Strings'
const TitleText = props => {
    return (
        <View style={{ height: hp('7%'), alignItems: 'center', justifyContent: 'center', marginTop: 10, flexDirection: 'row' }}>
            <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 22, fontFamily: 'Arial' }}>{Strings.recipe}</Text>
            <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 25, color: "#64E986" }}>{Strings.book}</Text>
        </View>
    )
}

export default TitleText;

