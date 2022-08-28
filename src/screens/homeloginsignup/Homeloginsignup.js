import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TitleText from '../../components/customText/TitleText'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ImageBackground
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Images from '../../assests/Images'

export default function User({ navigation: { navigate } }) {
    {

        return (
            <ImageBackground source={Images.splash} style={{ height: hp('100%') }}>
                <View style={Styles.header}>
                    <Text style={[Styles.headertext, { color: "white" }]}>Recipe</Text>
                    <Text style={[Styles.headertext, { color: "#64E986" }]}>book</Text>
                </View>
                <View style={Styles.btnContainer}>
                    <TouchableOpacity onPress={() =>
                        navigate('Login')} style={Styles.btnTouch}>
                        <Text style={{ color: 'white', fontSize: 20 }}>
                            Login
                         </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                        navigate('Signup')} style={Styles.btnTouch}>
                        <Text style={{ color: 'white', fontSize: 20 }}>
                            Signup
                         </Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.bottom}>
                    <Text style={Styles.bottomText}>Welcome to </Text>
                    <Text style={Styles.bottomText}>Recipe</Text>
                    <Text style={[Styles.bottomText, { color: '#64E986' }]}>book</Text>
                </View>
            </ImageBackground>
        );
    }
}
const Styles = StyleSheet.create({
    header: { height: hp('7%'), marginTop: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
    headertext: { textAlign: 'center', fontWeight: "bold", fontSize: 22, },
    btnContainer: { height: hp('55%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', width: wp('100%') },
    btnTouch: { justifyContent: 'center', marginHorizontal: 4, borderColor: '#64E986', height: hp('6%'), borderWidth: 1, borderRadius: 20, width: wp('40%'), alignItems: 'center' },
    bottom: { height: hp('10%'), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
    bottomText: { fontWeight: "bold", fontSize: 25, color: "white" },

})