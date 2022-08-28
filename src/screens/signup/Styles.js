import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {

    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    mainContainer:{ height: hp("40%"), width: wp("100%"), justifyContent: 'flex-start', backgroundColor: 'black', position: 'absolute', zIndex: 10, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
    titleContainer:{ height: hp('7%'), marginTop: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
    titleText:{ textAlign: 'center', fontWeight: "bold", fontSize: 22, fontFamily: 'Arial', color: "white" },
    titletexxt:{ textAlign: 'center', fontWeight: "bold", fontSize: 25, color: "#64E986" },
    subTitle:{ height: hp('20%'), justifyContent: 'center', alignItems: 'center' },
    ScrollContainer:{ padding: 20, backgroundColor: 'white', height: hp("70%"), width: wp("100%"), marginTop: hp('35%'), paddingVertical: hp('10%') },
    formContainer:{ height: hp('50%'), justifyContent: 'flex-start', alignItems: 'center', padding: hp('5%') },
    formInner:{ height: hp('8%'), borderWidth: 1, width: wp('80%'), marginBottom: hp('2%'), borderRadius: 40, flexDirection: 'row', alignItems: 'center', padding: 10 },
    btnContainer:{ height: hp('8%'),backgroundColor:'#64E986', width: wp('80%'), marginBottom: hp('2%'), borderRadius: 40, flexDirection: 'row', alignItems: 'center',justifyContent:'center', padding: 10 },
    btnText:{ textAlign: 'center',fontSize:22 ,color:'white',fontWeight:'bold'},
    bottomText:{ height: hp('12%'), width: wp('80%'), marginBottom: hp('2%'), flexDirection: 'row', alignItems: 'center',justifyContent:'center', padding: 10 },
    bottomTextt:{textAlign:'center',color:'grey',fontSize:hp('1.5%')}
})