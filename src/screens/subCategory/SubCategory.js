import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';


export default function SubCategory({ route, navigation: { setParams, navigate } }) {
    //  const { recepieNameParam } = state.params ;
    const { recepieNameParam, recepieImageParam } = route.params;

    //    const { recepieNameParam }  = route.params;
    return (
        <View >
            <View>
                <Image source={recepieImageParam} style={Styles.imageStyle} />
                <View style={Styles.viewIcon}>
                    <TouchableOpacity onPress={() =>
                        navigate('Category')} >
                        <Icon name="left" color="white" size={25} style={{ margin: 15 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.btnView}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{recepieNameParam}</Text>
                <View style={Styles.btnnView}>
                    <Text style={Styles.btn}>VOLLEDIG RECEPT</Text>
                </View>
                <View>
                </View>
            </View>
        </View>
    )


}
const Styles = StyleSheet.create({
    imageStyle: { height: hp("40%"), width: wp("100%") },
    viewIcon: { zIndex: 10, position: 'absolute' },
    btnView: { padding: 20, backgroundColor: 'white', height: hp("70%"), width: wp("100%"), marginTop: hp('35%'), position: 'absolute', borderRadius: 35 },
    btnnView: { marginTop: 20, height: hp('7%'), borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: wp('40%'), backgroundColor: "lightgreen", },
    btn: { textAlign: 'center', fontWeight: 'bold', fontSize: 13 }
})