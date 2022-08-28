import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign'
import Images from "../../assests/Images"
import Stings from '../../utils/Strings'
import TitleText from '../../components/customText/TitleText'
import {
    View,
    Text,
    ScrollView,
    TextInput,
    BackHandler,
    Header,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    TouchableOpacity,
    Keyboard, ToastAndroid, RefreshControl
} from 'react-native';
import Styles from './Styles';
import Strings from '../../utils/Strings';
import  {Colors} from '../../utils/Color'
// import {  } from 'react-native-gesture-handler';
export default function Home({ navigation: { navigate } }) {
    const [favorites, setFavorite] = useState(
        [
            { image: require('../../assests/image/burger.jpg'), discription: "Burger lassanga with wild musrooms and", name: 'Burger' },
            { image: require('../../assests/image/pizza.jpg'), discription: "Pizza lassanga with wild musrooms and", name: 'Pizza' },
            { image: require('../../assests/image/springroll.jpg'), discription: "Springroll lassanga with wild musrooms and", name: 'SpringRoll' },
            { image: require('../../assests/image/paneertikka.jpg'), discription: "PaneerTikka lassanga with wild musrooms and", name: 'PaneerTikka' },
            { image: require('../../assests/image/kheer.jpg'), discription: "Kheer lassanga with wild musrooms and", name: 'Kheer' },
            { image: require('../../assests/image/pasta.jpg'), discription: "Pasta lassanga with wild musrooms and", name: 'Pasta' },
            { image: require('../../assests/image/noodles.jpg'), discription: "Noodles lassanga with wild musrooms and", name: 'Noodles' },
            { image: require('../../assests/image/pizza.jpg'), discription: "Pizza lassanga with wild musrooms and", name: 'Pizza' },
            { image: require('../../assests/image/pasta.jpg'), discription: "Pasta lassanga with wild musrooms and", name: 'Pasta' },
        ]
    );

    return (
        <View style={Styles.mainContainer}>
            <TitleText />
            <View style={Styles.subcontainer}>
                <View style={Styles.headTitle}>
                    <Text style={Styles.headtitletext}>Wat eten we vandaag?</Text>
                </View>
                <View style={{ height: hp('42') }}>
                    <View style={Styles.titleImage}>
                        <Image style={{ height: hp('33%'), width: wp('90%'), borderRadius: 15 }} source={Images.burger} />
                    </View>
                    <View style={Styles.titleBtn}>
                        <View style={[Styles.btnView, { backgroundColor: Colors.APP_PRIMARY_COLOR, borderBottomLeftRadius: 15 }]}>

                            <Text style={[Styles.btnText, { color: Colors.BLACK }]}>{Strings.Volledig}</Text>
                        </View>
                        <View style={[Styles.btnView, { backgroundColor: 'darkgreen', borderBottomRightRadius: 15 }]}>
                            <Text style={[Styles.btnText, { color: 'white' }]}>{Strings.Volledig}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: hp('5%') }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Wat eten we vandaag?</Text>
                </View>
                <View style={{ height: hp('29%') }}>
                    <FlatList

                        nestedScrollEnabled={true}
                        data={favorites}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <View style={Styles.flatlistContainer}>
                                <Image style={Styles.flatlistImage} source={item.image} />
                                <View style={Styles.flatlisttextStyle}>
                                    <Text style={{ width: wp('45%'), height: hp('7%'), color: 'grey', fontWeight: 'bold' }} >{item.discription} </Text>
                                    <View style={{ width: wp('45%'), flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ height: hp('5%'), backgroundColor: '#64E986', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: 'bold', width: wp('30%') }}>VOLLEDIG RECEPT</Text>
                                        </View>
                                        <TouchableOpacity onPress={() =>
                                            navigate('SubCategory', { recepieNameParam: item.name, recepieImageParam: item.image })}>
                                            <View style={Styles.flatlistleftIcon}>

                                                <Icon name="arrowright" color="white" size={18} />

                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        }
                    />

                </View>
            </View>
        </View>

    )


}