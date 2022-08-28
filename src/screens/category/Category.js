import React, { useEffect, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign'
import Images from "../../assests/Images"

import {
    View,
    Text,
    TextInput,
    BackHandler,
    Header,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    Keyboard, ToastAndroid, RefreshControl
} from 'react-native';
import TitleText from '../../components/customText/TitleText'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function EditProfile({ navigation: { navigate } }) {

//    const  newData = []
    const [searchInput,setsearchInput]=useState(null)

    const [favorites, setFavorite] = useState(
        [
            { image: require('../../assests/image/burger.jpg'), name: "Burger" },
            { image: require('../../assests/image/pizza.jpg'), name: 'Pizza' },
            { image: require('../../assests/image/springroll.jpg'), name: 'SpringRoll' },
            { image: require('../../assests/image/paneertikka.jpg'), name: 'PaneerTikka' },
            { image: require('../../assests/image/kheer.jpg'), name: 'Kheer' },
            { image: require('../../assests/image/pasta.jpg'), name: "Pasta" },
            { image: require('../../assests/image/noodles.jpg'), name: 'Npodles' },
            { image: require('../../assests/image/pizza.jpg'), name: 'Pizza' },
            { image: require('../../assests/image/pasta.jpg'), name: 'Pasta' },
            { image: require('../../assests/image/pizza.jpg'), name: 'Pizza' }]);

            // useEffect(() => {
            //     const [newData, setnewData] = useState([]);
            //       });
        const [newData, setnewData] = useState([]);

    function searchData() {
        const newData1 = favorites.filter(item => {
            const itemData = item.name.toUpperCase();
            const textData = searchInput.toUpperCase();
            return itemData.indexOf(textData) > -1
        });
         setnewData(newData1)
         console.log(newData)
         
        
         
    }
    
    return (
        <View style={{ backgroundColor: "#F0F8FF" }}>
            <TitleText />

            <View style={Styles.header}>
                <View style={Styles.headerInner}>
                    <TouchableOpacity
                        activeOpacity={0.7}>
                        <Icon name="search1" color="black" size={25} style={{ margin: 13 }} />
                    </TouchableOpacity>
                    <TextInput style={{ color: 'black', width: wp('75%') }}
                        placeholder="Zoeken"
                        onSubmitEditing={() => searchData()}
                        onChangeText={data => setsearchInput(data)}
                        value={searchInput}
                    />

                </View>
            </View>

            <View style={{ height: hp("83%") }}>
                <View style={{ height: hp('5%'), marginLeft: 19 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                        Gerechten
                </Text>
                </View>

                <View style={{ marginBottom: 140 }}>
                    <FlatList
                        numColumns={2}
                        data={newData.length>0?newData:favorites}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>

                            <TouchableOpacity onPress={() =>
                                navigate('SubCategory', { recepieNameParam: item.name, recepieImageParam: item.image })}>
                                <View style={{ marginLeft: 15 }} >
                                    <Image style={{ height: hp("25%"), width: wp("43%"), margin: 5, borderRadius: 20 }} source={item.image} >

                                    </Image>
                                    <Text style={{ marginLeft: 13, fontSize: 15, fontWeight: "bold" }}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>

            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    header: { height: hp('10%'), justifyContent: 'center', alignItems: 'center' },
    headerInner: {
        flexDirection: 'row', width: wp('90%'), height: hp('7%'),
        color: 'gray', backgroundColor: "#C2DFFF", borderRadius: 26, marginLeft: 5,
        marginRight: 5, marginBottom: 10, justifyContent: 'center', alignItems: 'center'
    }

})