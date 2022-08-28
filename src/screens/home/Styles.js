import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {

    StyleSheet
} from 'react-native';

export default StyleSheet.create({
  mainContainer:{
    backgroundColor: "#F0F8FF", height: hp('100%')
  },
  subcontainer:{ paddingHorizontal: 20, height: hp('90%'), width: wp('100%') },
  headTitle:{ height: hp('6%') },
  headtitletext:{ fontSize: 25, fontWeight: 'bold' },
  titleImage:{ position: 'absolute', zIndex: 10 },
  titleBtn:{ width: wp('90%'), flexDirection: 'row', height: hp('9%'), marginTop: hp('31%') },
  btnView:{ width: wp('45%'), height: hp('9%'), justifyContent: 'center' },
  btnText:{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', alignItems: 'center' },
  flatlistContainer:{ height: hp('16%'), borderWidth: 0.5, borderColor: 'grey', borderRadius: 15, flexDirection: 'row', marginBottom: 10 },
  flatlistImage:{ height: hp('16%'), width: wp('35%'), borderRadius: 15, },
  flatlisttextStyle:{ flexDirection: 'column', marginLeft: 8, padding: 15 },
  flatlistleftIcon:{ height: hp('5%'), marginLeft: 10, borderRadius: 300, backgroundColor: 'darkgreen', width: wp('10%'), justifyContent: 'center', alignItems: 'center' }
})