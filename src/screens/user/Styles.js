import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {

    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    mainContainer: { height: hp('7%'), alignItems: 'center', justifyContent: 'center', marginTop: 10, flexDirection: 'row' },
    textViewContainer: { padding: 5, width: wp('100%'), flexDirection: 'row', height: hp('8%'), borderBottomWidth: 2, borderColor: 'lightgrey' },
    iconStyle: { width: wp('15%'), justifyContent: 'center' },
    textStyle: { width: wp('70%'), justifyContent: 'center' },
    text: { fontSize: 15, fontWeight: 'bold' },
    title: { textAlign: 'center', fontWeight: "bold", fontSize: 22, fontFamily: 'Arial' }
})