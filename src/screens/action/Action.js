import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import auth from '@react-native-firebase/auth';
import Images from '../../assests/Images'
import { TextInput } from 'react-native-gesture-handler';
export default class Action extends React.Component {
    render() {
        return (
            <View style={{ height: hp('100%') }}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={() =>
                        navigate('Home')} >
                        <View style={Styles.icon}>
                            <Icon name="left" color="black" size={22} style={{ margin: 13 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={Styles.titleHeader}>
                        <Text style={Styles.ReceipeText}>Recipe</Text>
                        <Text style={Styles.bookText}>book</Text>
                    </View>
                    <TouchableOpacity onPress={() => console.log('Tick')} >
                        <View style={Styles.icon}>
                            <Icon name="check" color="black" size={22} style={{ margin: 13 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <KeyboardAwareScrollView enableOnAndroid={true} >
                    <View style={{ height: hp('30%') }}>
                        <Image style={{ height: hp('30%'), width: wp('100%') }} source={Images.burger} />
                    </View>
                    <View style={{ flex: 1, padding: wp('3%') }}>
                        <View style={Styles.inputContainer}>
                            <Text style={Styles.textinput}>Your Name</Text>
                            <TextInput placeholder="Your Name" style={Styles.input} />
                        </View>
                        <View style={Styles.inputContainer}>
                            <Text style={Styles.textinput}>Recepie Name</Text>
                            <TextInput placeholder="Recepie Name" style={Styles.input} />
                        </View>
                        <View style={Styles.description}>
                            <Text style={Styles.textinput}>Description</Text>
                            <TextInput placeholder="Description" style={[Styles.input, { height: hp('20%') }]} />
                        </View>

                    </View>
                </KeyboardAwareScrollView>

            </View>
        );
    }
}
const Styles = StyleSheet.create({
    header: { height: hp('7%'), alignItems: 'center', justifyContent: 'center', marginTop: 10, flexDirection: 'row' },
    icon: { width: wp('15%'), justifyContent: 'center', alignItems: 'center' },
    titleHeader: { width: wp('65%'), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
    ReceipeText: { textAlign: 'center', fontWeight: "bold", fontSize: 22 },
    bookText: { textAlign: 'center', fontWeight: "bold", fontSize: 25, color: "#64E986" },
    inputContainer: { height: hp('10%'), marginTop: hp('1%') },
    textinput: { fontSize: hp('2%'), height: hp('4%') },
    input: { borderRadius: 30, borderWidth: 1, width: wp('95%'), height: hp('6%') },
    description: { height: hp('25%'), marginTop: hp('1%'), marginBottom: hp('15%') },

})